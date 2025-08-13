<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Donor;
use App\Models\Ong;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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

        // Donor
        $donor = Donor::where('don_email', $email)->first();
        if ($donor && Hash::check($password, $donor->don_password)) {
            $token = $donor->createToken('donor-token')->plainTextToken;
            return response()->json([
                'role'  => 'donor',
                'token' => $token,
                'user'  => $donor,
            ]);
        }

        // Ong
        $ong = Ong::where('ong_email', $email)->first();
        if ($ong && Hash::check($password, $ong->ong_password)) {
            if (!$ong->approved) {
                return response()->json([
                    'message' => 'Sua conta ainda não foi aprovada por um administrador.',
                ], 403);
            }
            $token = $ong->createToken('ong-token')->plainTextToken;
            return response()->json([
                'role'  => 'ong',
                'token' => $token,
                'user'  => $ong,
            ]);
        }

        // Admin
        $admin = Admin::where('email', $email)->first();
        if ($admin && Hash::check($password, $admin->password)) {
            $token = $admin->createToken('admin-token')->plainTextToken;
            return response()->json([
                'role'  => 'admin',
                'token' => $token,
                'user'  => $admin,
            ]);
        }

        return response()->json(['message' => 'Credenciais inválidas'], 401);
    }
}
