import React from "react";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "@/types";

export default function Checkbox({
  checked,
  onChange,
  label,
  className = "",
}: CheckboxProps) {
  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={styles.checkboxInput}
        />
        {label && <span className={styles.checkboxLabel}>{label}</span>}
      </label>
    </div>
  );
}

