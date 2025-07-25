<?php

namespace App\Http\Controllers;

use App\Models\Ong;
use App\Services\CnpjValidatorService;
use Illuminate\Http\Request;

class OngController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Ong::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            'ong_name' => 'required|string|max:255',
            'ong_email' => 'required|email|unique:ongs,ong_email',
            'ong_password' => 'required|string|min:8|confirmed',
            'ong_cnpj' => 'required|string|unique:ongs,ong_cnpj',
        ]);

        
        if (!CnpjValidatorService::validate($validated['ong_cnpj'])) {
            return response()->json([
                'message' => 'O CNPJ informado não é válido ou não foi encontrado na Receita Federal.'
            ], 422);
        }

        $validated['ong_password'] = bcrypt($validated['ong_password']);

        $ong = Ong::create($validated);

        return response()->json($ong, 201);
    }
    /**
     * Display the specified resource.
     */
    public function show(Ong $ong)
    {
        return Ong::findOrFail($ong->ong_id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ong $ong)
    {
        $validated = $request->validate([
            'ong_name' => 'sometimes|required|string|max:255',
            'ong_email' => 'sometimes|required|email|unique:ongs,ong_email,' . $ong->ong_id . ',ong_id',
            'ong_password' => 'sometimes|required|string|min:8|confirmed',
            'ong_cnpj' => 'sometimes|required|string|unique:ongs,ong_cnpj,' . $ong->ong_id . ',ong_id',
        ]);

        if (isset($validated['ong_cnpj']) && $validated['ong_cnpj'] !== $ong->ong_cnpj) {
            if (!CnpjValidatorService::validate($validated['ong_cnpj'])) {
                return response()->json([
                    'message' => 'O CNPJ informado não é válido ou não foi encontrado na Receita Federal.'
                ], 422);
            }
        }

        if (isset($validated['ong_password'])) {
            $validated['ong_password'] = bcrypt($validated['ong_password']);
        }

        $ong->update($validated);

        return response()->json($ong);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ong $ong)
    {
        Ong::findOrFail($ong->ong_id)->delete();
        return response()->json(null, 204);
    }
}
