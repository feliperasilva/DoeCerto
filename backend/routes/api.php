<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\Auth\DonorAuthController;
use App\Http\Controllers\OngController;
use App\Http\Controllers\Auth\OngAuthController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\Auth\AdminAuthController; 
use App\Http\Controllers\Auth\UniversalAuthController;
// Rotas Donor
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('donors', DonorController::class);
});

// Rotas de autenticação do Donor
Route::prefix('/auth/donor')->group(function () {
    Route::post('/register', [DonorAuthController::class, 'register']);
    Route::post('/login', [DonorAuthController::class, 'login']);
    Route::post('/logout', [DonorAuthController::class, 'logout']);
});

// Rotas ONG
Route::apiResource('ongs', OngController::class);

// Rotas de autenticação da ONG
Route::prefix('/auth/ong')->group(function () {
    Route::post('/register', [OngAuthController::class, 'register']);
    Route::post('/login', [OngAuthController::class, 'login']);
    Route::post('/logout', [OngAuthController::class, 'logout']);
});

// Rotas de doações
Route::apiResource('donations', DonationController::class);
Route::get('donations/donor/{donorId}', [DonationController::class, 'byDonor']);
Route::get('donations/ong/{ongId}', [DonationController::class, 'byOng']);

// Rotas de autenticação do Admin
Route::prefix('/auth/admin')->group(function () {
    Route::post('/register', [AdminAuthController::class, 'register']);
    Route::post('/login', [AdminAuthController::class, 'login']);
    Route::post('/logout', [AdminAuthController::class, 'logout']);
});

// Rotas protegidas para admins (exemplo: aprovação de ONG)
Route::middleware('auth:admin')->patch('/ongs/{id}/approve', [OngController::class, 'approve']);

Route::post('/auth/login', [UniversalAuthController::class, 'login']);

Route::middleware('auth:sanctum')->get('/auth/me', function (Request $request) {
    $user = $request->user();

    // Detectar role baseado no modelo da instância do usuário
    $role = null;
    if ($user instanceof \App\Models\Donor) {
        $role = 'donor';
    } elseif ($user instanceof \App\Models\Ong) {
        $role = 'ong';
    } elseif ($user instanceof \App\Models\Admin) {
        $role = 'admin';
    }

    return response()->json([
        'user' => $user,
        'role' => $role,
    ]);
});
