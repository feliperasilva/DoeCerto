"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { Logo } from "@/components";
import { getHeaderLinks } from "@/lib";
import { useState } from "react";
import type { NavigationLink } from "@/types";

export default function Header() {
  const pathname = usePathname();
  const links: NavigationLink[] = getHeaderLinks(pathname);
  const router = useRouter();

  const [loadingLogout, setLoadingLogout] = useState(false);

  // Mock do usuário logado
  const currentUser = {
    name: "Guilherme Matheus",
    profilePicture: "https://via.placeholder.com/32",
  };

  const handleLogout = async () => {
    setLoadingLogout(true);
    try {
      // Aqui iria a lógica de logout real
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
    currentUser && pathname !== "/" && pathname !== "/login";

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
              src={currentUser.profilePicture}
              alt=""
              className={styles.userAvatar}
            />
            <span className={styles.userName}>{currentUser.name}</span>
            {renderLogoutButton()}
          </div>
        )}
      </nav>
    </header>
  );
}
