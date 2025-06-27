"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { Logo } from "@/components";
import { getHeaderLinks } from "@/lib";
import { useState } from "react";
import type { NavigationLink } from "@/types";
import AuthService from "@/lib/auth";

export default function Header() {
  const pathname = usePathname();
  const links: NavigationLink[] = getHeaderLinks(pathname);
  const router = useRouter();
  const [loadingLogout, setLoadingLogout] = useState(false);

  const handleLogout = async () => {
    setLoadingLogout(true);
    try {
      await AuthService.logout();
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
      </nav>
    </header>
  );
}
