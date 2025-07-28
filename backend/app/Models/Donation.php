<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    protected $fillable = [
        'donor_id',
        'ong_id',
        'value',
        'date',
        'description',
    ];

    public function donor()
    {
        return $this->belongsTo(Donor::class);
    }

    public function ong()
    {
        return $this->belongsTo(Ong::class);
    }
}

