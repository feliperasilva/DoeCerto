<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CnpjValidatorService
{
    public function validate(string $cnpj): bool
    {
        
        $response = Http::get("https://publica.cnpj.ws/cnpj/{$cnpj}");

        if ($response->successful()) {
            $data = $response->json();

            
            return !empty($data) && isset($data['status']) && $data['status'] === 'OK';
        }

        return false;
    }
}
