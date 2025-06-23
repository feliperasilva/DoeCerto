"use client";

import React from "react";
import { InputMask } from "@react-input/mask";
import styles from "./Input.module.css";
import type { InputProps } from "@/types";

export default function Input({
  size,
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
  error,
  inputMask, // string como "cnpj", "phone", etc.
  ...rest
}: InputProps & { inputMask?: string }) {
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

  const labelClassNames = styles.inputLabel;

  const maskMap: Record<
    string,
    { mask: string; replacement: Record<string, RegExp> }
  > = {
    cnpj: {
      mask: "99.999.999/9999-99",
      replacement: { "9": /\d/ },
    },
    phone: {
      mask: "(99) 99999-9999",
      replacement: { "9": /\d/ },
    },
    cep: {
      mask: "99999-999",
      replacement: { "9": /\d/ },
    },
  };

  const selectedMask = inputMask ? maskMap[inputMask] : null;

  return (
    <label htmlFor={inputId} className={containerClassNames}>
      <div className={styles.labelErrorWrapper}>
        {label && <span className={labelClassNames}>{label}</span>}
        {error && <span className={styles.errorText}>{error}</span>}
      </div>

      {selectedMask ? (
        <InputMask
          id={inputId}
          name={name}
          mask={selectedMask.mask}
          replacement={selectedMask.replacement}
          value={value}
          onChange={onChange}
          className={inputClassNames}
          placeholder={placeholder || selectedMask.mask}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete ?? "off"}
          {...rest}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClassNames}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete ?? type}
          {...rest}
        />
      )}
    </label>
  );
}
