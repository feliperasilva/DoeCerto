<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Ong;
use App\Models\Admin; 
use App\Services\CnpjValidatorService;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewOngRegistered;
use App\Mail\OngRegistrationReceived;

class OngAuthController extends Controller
{
    public function register(Request $request)
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

        $validated['ong_password'] = Hash::make($validated['ong_password']);
        $validated['approved'] = false;
        $ong = Ong::create($validated);

        
        $admins = Admin::all();

        foreach ($admins as $admin) {
            Mail::to($admin->email)->send(new NewOngRegistered($ong, $admin->name));
        }

        
        Mail::to($ong->ong_email)->send(new OngRegistrationReceived());

        return response()->json([
            'ok' => true,
            'ong' => $ong,
        ], 201);
    }

    public function login(Request $request)
    {
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

        if (!$ong->approved) {
            return response()->json([
                'ok' => false,
                'error' => 'Sua conta ainda não foi aprovada por um administrador.',
            ], 403);
        }

        $token = $ong->createToken('ong-token', ['ong'])->plainTextToken;

        return response()->json([
            'ok' => true,
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $token = $request->bearerToken();

        if (!$token) {
            return response()->json([
                'ok' => false,
                'message' => 'No token provided.',
            ], 401);
        }

        $access_token = PersonalAccessToken::findToken($token);

        if (!$access_token) {
            return response()->json([
                'ok' => false,
                'message' => 'Invalid token.',
            ], 401);
        }

        $access_token->delete();

        return response()->json([
            'ok' => true,
            'message' => 'Logout successful.',
        ]);
    }
}
