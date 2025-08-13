<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OngRegistrationReceived extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Sua ONG está em análise',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        // Sem view, retorna vazio
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
        return $this->subject('Sua ONG está em análise')
            ->html("
                <p>Olá,</p>
                <p>Recebemos o cadastro da sua ONG no sistema DoeCerto. Atualmente, sua solicitação está em análise pela nossa equipe.</p>
                <p>Esse processo é fundamental para garantirmos a segurança e a qualidade das ONGs cadastradas em nossa plataforma.</p>
                <p>Assim que a análise for concluída, entraremos em contato informando o resultado e os próximos passos.</p>
                <p>Enquanto isso, caso tenha alguma dúvida, fique à vontade para nos contatar.</p>
                <p>Obrigado por confiar no DoeCerto!</p>
                <p>Atenciosamente,<br>Equipe DoeCerto</p>
            ");
    }
}
