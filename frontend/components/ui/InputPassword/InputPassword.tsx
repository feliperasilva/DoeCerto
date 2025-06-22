"use client";

import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./InputPassword.module.css";
import type { InputProps } from "@/types";

export default function InputPassword({
  size, // extraia para não passar para input
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
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const inputType = type === "password" && isPasswordVisible ? "text" : type;
  const classNames = [styles.input, className].filter(Boolean).join(" ");

  const inputId = id || name;

  return (
    <label htmlFor={inputId} className={styles.inputContainer}>
      {label && <span className={styles.inputLabel}>{label}</span>}
      <div className={styles.inputWithToggle}>
        <input
          id={inputId}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classNames}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete ?? "current-password"}
          {...rest} // size não vai estar aqui, pois extraímos acima
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
