import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  href?: string; 
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  size = "medium",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[size],
    className,
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classNames} tabIndex={disabled ? -1 : 0} aria-disabled={disabled}>
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
      {children}
    </button>
  );
}