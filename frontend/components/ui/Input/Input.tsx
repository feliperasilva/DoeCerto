import React from "react";
import styles from "./Input.module.css";
import { InputProps } from "@/types";

export default function Input({
  type = "text",
  placeholder = "",
  onChange,
  value,
  className = "",
  disabled = false,
  id = "",
  required = false,
}: InputProps) {
  const classNames = [styles.input, className].filter(Boolean).join(" ");

  return (
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
  );
}