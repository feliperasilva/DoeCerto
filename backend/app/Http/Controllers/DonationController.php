<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DonationController extends Controller
{
    public function index () {
        return Donation::with(['donor', 'ong'])->get();
    }
}
