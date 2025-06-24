<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Donor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class DonorAuthController extends Controller
{
    public function register(Request $request) {
        $validated = $request->validate([
            'don_name' => 'required|string|max:255', 
            'don_email' => 'required|email|unique:donors,don_email', 
            'don_password' => 'required|string|min:8|confirmed', 
            'don_description' => 'nullable|string|max:255', 
        ]);

        $donor = Donor::create([
            'don_name' => $validated['don_name'],
            'don_email' => $validated['don_email'],
            'don_password' => Hash::make($validated['don_password']),
            'don_description' => $validated['don_description'] ?? null,
        ]);

        $token = $donor->createToken('auth_token')->plainTextToken;

        return response()->json([
            'ok' => true,
            'donor' => $donor,
            'token' => $token,
        ]);
    }

    public function login(Request $request) {    
    
    }

    public function logout(Request $request) {

    }
}
