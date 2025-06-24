<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Donor extends Authenticatable
{

    use HasFactory, Notifiable, HasApiTokens;

    protected $table = 'donors';
    protected $primaryKey = 'don_id';

    protected $fillable = [
        'don_name', 'don_email', 'don_password', 'don_description',
    ];

    protected $hidden = [
        'don_password',
    ];

    public $timestamps = true;
}
