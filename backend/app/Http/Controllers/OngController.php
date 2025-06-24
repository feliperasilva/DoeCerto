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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ong $ong)
    {
        //
    }
}
