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

    public function update(Request $request, $id)
    {
        $donation = Donation::findOrFail($id);

        $validated = $request->validate([
            'donor_id' => 'exists:donors,id',
            'ong_id' => 'exists:ongs,id',
            'value' => 'numeric|min:1',
            'date' => 'date|unique:donations,date,' . $donation->id,
            'description' => 'nullable|string|max:255',
        ]);

        $donation->update($validated);

        return response()->json($donation);
    }

    public function destroy($id)
    {
        $donation = Donation::findOrFail($id);
        $donation->delete();

        return response()->json(['message' => 'Donation deleted']);
    }

    public function byDonor($donorId)
    {
        $donations = Donation::where('donor_id', $donorId)->with('ong')->get();
        return response()->json($donations);
    }
}
