"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { Logo } from "@/components";
import { getHeaderLinks } from "@/lib";
import { useState, useEffect } from "react";
import type { NavigationLink } from "@/types";
import AuthService from "@/lib/auth";

interface User {
  id: string;
  don_name: string;
  don_image?: string;
  // outros campos que precisar
}

export default function Header() {
  const pathname = usePathname();
  const links: NavigationLink[] = getHeaderLinks(pathname);
  const router = useRouter();

  const [loadingLogout, setLoadingLogout] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await AuthService.request<{ user: User; role: string }>("/api/auth/me");
        setUser(data.user);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      }
    }
    loadUser();
  }, []);

  const handleLogout = async () => {
    setLoadingLogout(true);
    try {
      // lógica de logout
      router.push("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      setLoadingLogout(false);
    }
  };

  const renderLogoutButton = () => (
    <button
      className={styles.headerNavButton}
      onClick={handleLogout}
      disabled={loadingLogout}
      aria-busy={loadingLogout}
    >
      {loadingLogout ? "Saindo..." : "Sair"}
    </button>
  );

  const shouldShowUserInfo =
    user && pathname !== "/" && pathname !== "/login";

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.headerNav}>
        {pathname === "/home"
          ? renderLogoutButton()
          : links.map((link, idx) =>
              link.href ? (
                <Link
                  key={idx}
                  href={link.href}
                  className={styles.headerNavLink}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={idx}
                  className={styles.headerNavButton}
                  onClick={handleLogout}
                  disabled={loadingLogout}
                  aria-busy={loadingLogout}
                >
                  {loadingLogout ? "Saindo..." : link.label}
                </button>
              )
            )}
        {shouldShowUserInfo && (
          <div className={styles.userInfo}>
            <img
              src={
                user?.don_image
                  ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${user.don_image}`
                  : "/default-profile.png"
              }
              alt={user?.don_name}
              className={styles.userAvatar}
            />
            <span className={styles.userName}>{user?.don_name}</span>
            {renderLogoutButton()}
          </div>
        )}
      </nav>
    </header>
  );
}
