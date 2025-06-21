import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";
import { ButtonProps } from "@/types";

export default function Button({
  children,
  size = "medium",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[size],
    styles[variant],
    className,
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={classNames}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.buttonContent}>{children}</span>
    </button>
  );
}
