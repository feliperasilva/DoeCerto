<?php

use Illuminate\Http\Request;
use App\Http\Controllers\DonorController;
use Illuminate\Support\Facades\Route;

Route::apiResource('donors', DonorController::class);

