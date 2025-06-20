"use client";

import { useState } from "react";
import styles from "./Input.module.css";
import { InputProps } from "@/types";

// Componente interno para campo de senha com olhinho
function InputPassword({
  placeholder,
  value,
  onChange,
  className = "",
  disabled,
  id = "",
  required,
  label = "",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : "password";
  const classNames = [styles.input, className].filter(Boolean).join(" ");

  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={id} className={styles.inputLabel}>{label}</label>}
      <div className={styles.passwordWrapper}>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classNames}
          disabled={disabled}
          id={id}
          required={required}
        />
        <span
          className={styles.passwordToggle}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? "👁️" : "🙈"}
        </span>
      </div>
    </div>
  );
}

// Componente principal que decide qual input usar
export default function Input({
  type = "text",
  placeholder = "",
  onChange,
  value,
  className = "",
  disabled = false,
  id = "",
  label = "",
  required = false,
}: InputProps) {
  if (type === "password") {
    return (
      <InputPassword
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        disabled={disabled}
        id={id}
        label={label}
        required={required}
      />
    );
  }

  const classNames = [styles.input, className].filter(Boolean).join(" ");

  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={id} className={styles.inputLabel}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames}
        disabled={disabled}
        id={id}
        required={required}
      />
    </div>
  );
}
