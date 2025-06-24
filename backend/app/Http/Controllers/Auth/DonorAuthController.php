<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Donor;
use Faker\Provider\ar_EG\Person;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

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

        $token = $donor->createToken('api-token', ['post:read', 'post:create'])->plainTextToken;

        return response()->json([
            'ok' => true,
            'donor' => $donor,
            'token' => $token,
        ]);
    }

    public function login(Request $request) {

        $validated = $request->validate([
            'don_email' => 'required|email:rfc,dns', 
            'don_password' => 'required|string|min:8', 
        ]);

        $donor = Donor::where('don_email', $validated['don_email'])->first();

        if (!$donor || !Hash::check($validated['don_password'], $donor->don_password)) {
            return response()->json([
                'ok' => false,
                'error' => 'The provided credentials are incorrect.',
            ], 401);
        }

        $token = $donor->createToken('api-token', ['post:read', 'post:create'])->plainTextToken;

        return response()->json([
            'ok' => true,
            'token' => $token,
        ]);
        
    }

    public function logout(Request $request) {

        $token = $request->bearerToken();

        if (!$token) {
            return response()->json([
                'ok' => false,
                'message' => 'No token provided.',
            ], 401);
        }

        $acess_token = PersonalAccessToken::findToken($token);

        if (!$acess_token) {
            return response()->json([
                'ok' => false,
                'message' => 'Invalid token.',
            ], 401);
        }

        $acess_token->delete();

        return response()->json([
            'ok' => true,
            'message' => 'Logout successful.',
        ]);
    }
}
