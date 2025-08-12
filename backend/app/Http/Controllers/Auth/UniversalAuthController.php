<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UniversalAuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required|string',
        ]);

        $email = $request->input('email');
        $password = $request->input('password');

        // Tenta como donor
        if (Auth::guard('donor')->attempt(['don_email' => $email, 'don_password' => $password])) {
            $token = Auth::guard('donor')->user()->createToken('donor-token')->plainTextToken;
            return response()->json([
                'role'  => 'donor',
                'token' => $token,
                'user'  => Auth::guard('donor')->user(),
            ]);
        }

        // Tenta como ong
        if (Auth::guard('ong')->attempt(['ong_email' => $email, 'ong_password' => $password])) {
            $token = Auth::guard('ong')->user()->createToken('ong-token')->plainTextToken;
            return response()->json([
                'role'  => 'ong',
                'token' => $token,
                'user'  => Auth::guard('ong')->user(),
            ]);
        }

        // Tenta como admin
        if (Auth::guard('admin')->attempt(['email' => $email, 'password' => $password])) {
            $token = Auth::guard('admin')->user()->createToken('admin-token')->plainTextToken;
            return response()->json([
                'role'  => 'admin',
                'token' => $token,
                'user'  => Auth::guard('admin')->user(),
            ]);
        }

        return response()->json(['message' => 'Credenciais inválidas'], 401);
    }
}
