<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ong extends Model
{
    protected $table = 'ongs';

    protected $fillable = [
        'ong_name',
        'ong_email',
        'ong_password',
        'ong_cnpj',
        'ong_description',
    ];

    protected $hidden = [
        'ong_password',
    ];

    public $timestamps = true;
}
