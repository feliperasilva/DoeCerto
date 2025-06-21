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
  label = "",
  required = false,
}: InputProps) {
  const classNames = [styles.input, className].filter(Boolean).join(" ");

  return (
    <label htmlFor={id} className={styles.inputContainer}>
      {label && <span className={styles.inputLabel}>{label}</span>}
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
    </label>
  );
}
