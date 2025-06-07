import React from "react";
import styles from "./Header.module.css";
import { Logo } from "@/components"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <Logo />
                <span className={styles.headerLogoText}>DoeCerto</span>
            </div>
            <nav className={styles.headerNav}></nav>
        </header>
    );
}