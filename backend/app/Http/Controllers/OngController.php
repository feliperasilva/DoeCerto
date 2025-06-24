<?php

namespace App\Http\Controllers;

use App\Models\Ong;
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
            'ong_cnpj' => 'required|cnpj|unique:ongs,ong_cnpj',
            'ong_description' => 'nullable|string|max:255',
        ]);

        $validated['ong_password'] = bcrypt($validated['ong_password']);
        return Ong::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(Ong $ong)
    {
        //
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
