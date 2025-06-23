"use client";

import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./InputPassword.module.css";
import type { InputProps } from "@/types";

export default function InputPassword({
  size, // extraído para não repassar
  type = "password",
  placeholder = "",
  onChange,
  value,
  className = "",
  disabled = false,
  id,
  name,
  label = "",
  required = false,
  autoComplete,
  error,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  const inputId = id || name;

  const containerClassNames = [styles.inputContainer, error ? styles.error : ""]
    .filter(Boolean)
    .join(" ");

  const inputClassNames = [
    styles.input,
    size && styles[size],
    className,
    error ? styles.error : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label htmlFor={inputId} className={containerClassNames}>
      <div className={styles.labelErrorWrapper}>
        {label && <span className={styles.inputLabel}>{label}</span>}
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
      <div className={styles.inputWithToggle}>
        <input
          id={inputId}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClassNames}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete ?? "current-password"}
          {...rest}
        />
        {type === "password" && (
          <button
            type="button"
            className={styles.toggleVisibilityButton}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            tabIndex={-1}
            aria-label={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </label>
  );
}
