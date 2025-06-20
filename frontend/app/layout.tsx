import "@/styles/globals.css";
import { roboto, darkerGrotesque } from "./fonts";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "DoeCerto",
  description: "DoeCerto - Sua plataforma de doações",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${darkerGrotesque.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
