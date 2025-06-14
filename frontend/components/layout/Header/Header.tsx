import React from "react";
import styles from "./Header.module.css";
import { Logo } from "@/components";
import Link from "next/link";
import { HeaderProps } from "@/types";

export default function Header({ links = [] }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Logo />
        <span className={styles.headerLogoText}>DoeCerto</span>
      </div>
      <nav className={styles.headerNav}>
        {links.length > 0 &&
          links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={styles.headerNavLink}
            >
              {link.label}
            </Link>
          ))
        }
      </nav>
    </header>
  );
}