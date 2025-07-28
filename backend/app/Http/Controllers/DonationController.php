<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DonationController extends Controller
{
    public function index () {
        return Donation::with(['donor', 'ong'])->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'donor_id' => 'required|exists:donors,id',
            'ong_id' => 'required|exists:ongs,id',
            'value' => 'required|numeric|min:1',
            'date' => 'required|date|unique:donations,date',
            'description' => 'nullable|string|max:255',
        ]);

        $donation = Donation::create($validated);

        return response()->json($donation, 201);
    }

    public function show($id)
    {
        $donation = Donation::with(['donor', 'ong'])->findOrFail($id);
        return response()->json($donation);
    }
}
