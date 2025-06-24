<?php

use Illuminate\Http\Request;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\Auth\DonorAuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->group(function () {
   Route::post('/register', [DonorAuthController::class, 'register']);
   Route::post('/login', [DonorAuthController::class, 'login']);
   Route::post('/logout', [DonorAuthController::class, 'logout']); 
});

Route::apiResource('donors', DonorController::class);

