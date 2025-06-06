import '@/styles/globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'DoeCerto',
    description: 'DoeCerto - Sua plataforma de doações',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    )
}