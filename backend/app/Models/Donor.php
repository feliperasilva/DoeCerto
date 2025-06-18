<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Donor extends Authenticatable
{
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
