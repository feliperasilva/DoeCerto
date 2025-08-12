<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

class AdminAuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:admins,email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $validated['password'] = Hash::make($validated['password']);

        $admin = Admin::create($validated);

        

        return response()->json([
            'ok' => true,
            'admin' => $admin,
            // 'token' => $token,
        ], 201);
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        $admin = Admin::where('email', $validated['email'])->first();

        if (!$admin || !Hash::check($validated['password'], $admin->password)) {
            return response()->json([
                'ok' => false,
                'error' => 'Credenciais incorretas.',
            ], 401);
        }

       $token = $admin->createToken('admin-token', ['admin'])->plainTextToken;

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
                'message' => 'Nenhum token fornecido.',
            ], 401);
        }

        $accessToken = PersonalAccessToken::findToken($token);

        if (!$accessToken) {
            return response()->json([
                'ok' => false,
                'message' => 'Token inválido.',
            ], 401);
        }

        $accessToken->delete();

        return response()->json([
            'ok' => true,
            'message' => 'Logout realizado com sucesso.',
        ]);
    }
}