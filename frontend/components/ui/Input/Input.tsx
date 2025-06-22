"use client";

import Cleave from "cleave.js/react";
import styles from "./Input.module.css";
import type { InputProps } from "@/types";

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
  const classNames = [styles.input, className].filter(Boolean).join(" ");

  const isCnpj = type === "cnpj";

  return (
    <label htmlFor={id} className={styles.inputContainer}>
      {label && <span className={styles.inputLabel}>{label}</span>}
      {isCnpj ? (
        <Cleave
          id={id}
          placeholder={placeholder}
          options={{
            delimiters: [".", ".", "/", "-"],
            blocks: [2, 3, 3, 4, 2],
            numericOnly: true,
          }}
          value={value}
          onChange={onChange}
          className={classNames}
          disabled={disabled}
          required={required}
        />
      ) : (
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
      )}
    </label>
  );
}
