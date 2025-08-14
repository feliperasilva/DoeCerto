import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '127.0.0.1', 'outraspalavras.net'], // adiciona o domínio externo aqui
  },
};

export default nextConfig;
