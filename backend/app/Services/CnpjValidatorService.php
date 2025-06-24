<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CnpjValidatorService
{
    public static function validate(string $cnpj): bool
    {
        
        $cnpj = preg_replace('/\D/', '', $cnpj);

        $response = Http::get("https://brasilapi.com.br/api/cnpj/v1/{$cnpj}");

        if ($response->successful()) {
            $data = $response->json();

           
            return !empty($data) && isset($data['cnpj']) && str_replace(['.', '/', '-'], '', $data['cnpj']) === $cnpj;
        }

        return false;
    }
}
