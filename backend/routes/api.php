<?php

use Illuminate\Http\Request;
use App\Http\Controllers\DonorController;
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->group(function () {
   Route::post('/register', [DonorController::class, 'register']);
   Route::post('/login', [DonorController::class, 'login']);
   Route::post('/logout', [DonorController::class, 'logout']); 
});

Route::apiResource('donors', DonorController::class);

