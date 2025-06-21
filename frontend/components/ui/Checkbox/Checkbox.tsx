import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "@/types";

export default function Checkbox({
  checked,
  onChange,
  label,
  className = "",
}: CheckboxProps) {
  return (
    <div className={`${styles.checkboxContainer} ${className}`}>
      <label className={styles.checkboxContainerLabel}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={styles.checkboxInput}
        />
        <span className={styles.customCheckbox}>{checked && <FaCheck />}</span>
        {label && <span className={styles.checkboxLabel}>{label}</span>}
      </label>
    </div>
  );
}
