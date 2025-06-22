"use client";

import styles from "./Input.module.css";
import type { InputProps } from "@/types";

export default function Input({
  size, // não repassar para o input nativo (conflito)
  type = "text",
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
  ...rest
}: InputProps) {
  const classNames = [styles.input, className, size && styles[size]]
    .filter(Boolean)
    .join(" ");

  const inputId = id || name;

  return (
    <label htmlFor={inputId} className={styles.inputContainer}>
      {label && <span className={styles.inputLabel}>{label}</span>}
      <input
        id={inputId}
        name={name}
        type={type === "cnpj" ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete ?? type}
        {...rest} // passar o resto das props, sem size
      />
    </label>
  );
}
