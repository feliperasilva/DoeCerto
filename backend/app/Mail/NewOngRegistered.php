<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewOngRegistered extends Mailable
{
    use Queueable, SerializesModels;

    public $ong;
    public $adminName;

    /**
     * Create a new message instance.
     */
    public function __construct($ong, $adminName)
    {
        $this->ong = $ong;
        $this->adminName = $adminName;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Nova ONG cadastrada para aprovação',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content();
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->subject('Nova ONG cadastrada para aprovação')
            ->html("
                <p>Olá, {$this->adminName},</p>
                <p>Uma nova ONG acaba de se cadastrar no sistema DoeCerto e aguarda aprovação.</p>
                <p>Confira os detalhes da ONG para prosseguir com a análise:</p>
                <ul>
                    <li><strong>Nome:</strong> {$this->ong->ong_name}</li>
                    <li><strong>Email:</strong> {$this->ong->ong_email}</li>
                    <li><strong>CNPJ:</strong> {$this->ong->ong_cnpj}</li>
                </ul>
                <p>Por favor, acesse o painel administrativo para revisar e aprovar ou rejeitar o cadastro.</p>
                <p>Obrigado,<br>Equipe DoeCerto</p>
            ");
    }
}
