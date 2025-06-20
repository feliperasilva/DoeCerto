"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { Logo } from "@/components";
import { getHeaderLinks } from "@/lib";

export default function Header() {
  const pathname = usePathname();
  const links = getHeaderLinks(pathname);

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Logo />
        <span className={styles.headerLogoText}>DoeCerto</span>
      </div>
      <nav className={styles.headerNav}>
        {links.map((link, idx) => (
          <Link key={idx} href={link.href} className={styles.headerNavLink}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
