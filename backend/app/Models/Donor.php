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
    protected $primaryKey = 'id';

    protected $fillable = [
        'don_name',
        'don_email',
        'don_password',
        'don_description',
        'don_image',
        'don_phone',
        'don_cep',
        'don_houseNumber',
        'don_complement',
    ];

    protected $hidden = [
        'don_password',
    ];

    public function donations()
    {
        return $this->hasMany(Donation::class);
    }

    public $timestamps = true;
}
