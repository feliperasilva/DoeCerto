"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";

type Donor = {
  don_name: string;
  // outros campos, se quiser
};

export default function Page() {
  const [user, setUser] = useState<Donor | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me", { withCredentials: true });
        setUser(res.data);
      } catch {
        router.push("/login");
      }
    };

    fetchUser();
  }, [router]);

  if (!user) return <p>Carregando...</p>;

  return <div>Bem-vindo, {user.don_name}!</div>;
}
