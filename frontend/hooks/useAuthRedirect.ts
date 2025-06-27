"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthService from "@/lib/auth";

export const useAuthRedirect = () => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!AuthService.isAuthenticated()) {
      router.replace("/login");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  return checkingAuth;
};
