<?php

use Illuminate\Http\Request;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\Auth\DonorAuthController;
use App\Http\Controllers\OngController;
use App\Http\Controllers\Auth\OngAuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonationController;


Route::apiResource('donors', DonorController::class);

Route::prefix('/auth/donor')->group(function () {
   Route::post('/register', [DonorAuthController::class, 'register']);
   Route::post('/login', [DonorAuthController::class, 'login']);
   Route::post('/logout', [DonorAuthController::class, 'logout']); 
});

Route::apiResource('ongs', OngController::class);

Route::prefix('/auth/ong')->group(function () {
   Route::post('/register', [OngAuthController::class, 'register']);
   Route::post('/login', [OngAuthController::class, 'login']);
   Route::post('/logout', [OngAuthController::class, 'logout']);
});

Route::apiResource('donations', DonationController::class);
Route::get('donations/donor/{donorId}', [DonationController::class, 'byDonor']);
Route::get('donations/ong/{ongId}', [DonationController::class, 'byOng']);




