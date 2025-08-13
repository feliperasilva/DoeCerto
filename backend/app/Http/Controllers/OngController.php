<?php

namespace App\Http\Controllers;

use App\Models\Ong;
use App\Services\CnpjValidatorService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class OngController extends Controller
{
    
    public function index()
    {
        return Ong::all();
    }

    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'ong_name' => 'required|string|max:255',
            'ong_email' => 'required|email|unique:ongs,ong_email',
            'ong_password' => 'required|string|min:8|confirmed',
            'ong_cnpj' => 'required|string|unique:ongs,ong_cnpj',
            'ong_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        
        if (!CnpjValidatorService::validate($validated['ong_cnpj'])) {
            return response()->json([
                'message' => 'O CNPJ informado não é válido ou não foi encontrado na Receita Federal.'
            ], 422);
        }

        if ($request->hasFile('ong_image')) {
            $path = $request->file('ong_image')->store('ongs', 'public');
            $validated['ong_image'] = $path;
        }

        
        $validated['ong_password'] = bcrypt($validated['ong_password']);

       
        $validated['approved'] = 0;

        $ong = Ong::create($validated);

        return response()->json($ong, 201);
    }

    /**
     * Exibe uma ONG específica.
     */
    public function show(Ong $ong)
    {
        return response()->json($ong);
    }

    /**
     * Atualiza uma ONG.
     */
    public function update(Request $request, Ong $ong)
    {
        $validated = $request->validate([
            'ong_name' => 'sometimes|required|string|max:255',
            'ong_email' => 'sometimes|required|email|unique:ongs,ong_email,' . $ong->id,
            'ong_password' => 'sometimes|required|string|min:8|confirmed',
            'ong_cnpj' => 'sometimes|required|string|unique:ongs,ong_cnpj,' . $ong->id,
            'ong_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if (isset($validated['ong_cnpj']) && $validated['ong_cnpj'] !== $ong->ong_cnpj) {
            if (!CnpjValidatorService::validate($validated['ong_cnpj'])) {
                return response()->json([
                    'message' => 'O CNPJ informado não é válido ou não foi encontrado na Receita Federal.'
                ], 422);
            }
        }

        if ($request->hasFile('ong_image')) {
           
            if ($ong->ong_image) {
                Storage::disk('public')->delete($ong->ong_image);
            }
            $path = $request->file('ong_image')->store('ongs', 'public');
            $validated['ong_image'] = $path;
        }

        if (isset($validated['ong_password'])) {
            $validated['ong_password'] = bcrypt($validated['ong_password']);
        }

        $ong->update($validated);

        return response()->json($ong);
    }

   
    public function destroy(Ong $ong)
    {
        
        if ($ong->ong_image) {
            Storage::disk('public')->delete($ong->ong_image);
        }

        $ong->delete();

        return response()->json(null, 204);
    }

    
public function approve($id)
{
    $ong = Ong::findOrFail($id);

    if ($ong->approved == 1) {
        return response()->json([
            'ok' => false,
            'message' => 'ONG já está aprovada.'
        ], 400); 
    }

    $ong->approved = 1;
    $ong->save();

    return response()->json([
        'ok' => true,
        'message' => 'ONG aprovada com sucesso!'
    ]);
}

}
