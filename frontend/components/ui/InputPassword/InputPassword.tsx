import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./InputPassword.module.css";
import { InputProps } from "@/types";

export default function Input({
  type = "password",
  placeholder = "",
  onChange,
  value,
  className = "",
  disabled = false,
  id = "",
  label = "",
  required = false,
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const inputType = type === "password" && isPasswordVisible ? "text" : type;
  const classNames = [styles.input, className].filter(Boolean).join(" ");

  return (
    <label htmlFor={id} className={styles.inputContainer}>
      {label && <span className={styles.inputLabel}>{label}</span>}
      <div className={styles.inputWithToggle}>
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
        {type === "password" && (
          <button
            type="button"
            className={styles.toggleVisibilityButton}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </label>
  );
}
