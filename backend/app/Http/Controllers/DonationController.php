<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ong;
use App\Models\Donor;

class DonationController extends Controller
{
    public function getWhatsAppLink(Request $request, $ongId)
    {
        $donor = $request->user(); 

        if (!$donor) {
            return response()->json([
                'ok' => false,
                'message' => 'Você precisa estar logado.'
            ], 401);
        }

        $ong = Ong::findOrFail($ongId);

        if (!$ong->ong_phone) {
            return response()->json([
                'ok' => false,
                'message' => 'ONG não possui número cadastrado.'
            ], 400);
        }

        // Mensagem genérica para WhatsApp
        $mensagem = "Olá, {$ong->ong_name}! O doador {$donor->don_name} quer fazer uma doação em dinheiro.";
        $mensagemCodificada = urlencode($mensagem);

        $link = "https://wa.me/{$ong->ong_phone}?text={$mensagemCodificada}";

        return response()->json([
            'ok' => true,
            'link' => $link
        ]);
    }
}
