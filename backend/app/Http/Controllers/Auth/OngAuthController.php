<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Ong;
use Illuminate\Http\Request;
use App\Services\CnpjValidatorService;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

class OngAuthController extends Controller
{
    public function register (Request $request) {
        
        $validated = $request->validate([
            'ong_name' => 'required|string|max:255',
            'ong_email' => 'required|email|unique:ongs,ong_email',
            'ong_password' => 'required|string|min:8|confirmed',
            'ong_cnpj' => 'required|string|unique:ongs,ong_cnpj|cnpj',
        ]);

        if (!CnpjValidatorService::validate($validated['ong_cnpj'])) {
        return response()->json([
            'message' => 'O CNPJ informado não é válido ou não foi encontrado na Receita Federal.'
        ], 422);
        }

        $validated['ong_password'] = Hash::make($validated['ong_password']);

        $ong = Ong::create($validated);

        $token = $ong->createToken('api-token', ['post:read', 'post:create'])->plainTextToken;

        return response()->json([
            'ok' => true,
            'ong' => $ong,
            'token' => $token,
        ]);
    }

    public function login (Request $request) {
        
        $validated = $request->validate([
            'ong_email' => 'required|email',
            'ong_password' => 'required|string|min:8',
        ]);

        $ong = Ong::where('ong_email', $validated['ong_email'])->first();

        if (!$ong || !Hash::check($validated['ong_password'], $ong->ong_password)) {
            return response()->json([
                'ok' => false,
                'error' => 'The provided credentials are incorrect.',
            ], 401);
        }

        $token = $ong->createToken('api-token', ['post:read', 'post:create'])->plainTextToken;

        return response()->json([
            'ok' => true,
            'token' => $token,
        ]);
    }

    public function logout (Request $request) {
        
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
