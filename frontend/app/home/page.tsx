"use client";

import { useAuthRedirect } from "@/hooks/useAuthRedirect";

export default function Page() {
  const checkingAuth = useAuthRedirect();

  if (checkingAuth) return <p>Carregando...</p>;

  return <div>Bem-vindo!</div>;
}
