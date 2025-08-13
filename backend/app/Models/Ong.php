<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Ong extends Model
{

    use HasFactory, Notifiable, HasApiTokens;

    protected $table = 'ongs';

    protected $primaryKey = 'id';

    protected $fillable = [
        'ong_name',
        'ong_email',
        'ong_password',
        'ong_cnpj',
        'ong_image',
        'approved',
        'rejection_reason',
    ];

    protected $hidden = [
        'ong_password',
    ];

    public function donations() {
        return $this->hasMany(Donation::class);
    }


    public $timestamps = true;
}
