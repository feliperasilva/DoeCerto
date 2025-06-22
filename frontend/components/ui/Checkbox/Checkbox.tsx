import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./Checkbox.module.css";
import type { CheckboxProps } from "@/types";

export default React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onChange, label, id, name, className = "" }, ref) => {
    return (
      <div className={`${styles.checkboxContainer} ${className}`}>
        <label htmlFor={id} className={styles.checkboxContainerLabel}>
          <input
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            className={styles.checkboxInput}
            ref={ref}
          />
          <span className={styles.customCheckbox}>
            {checked && <FaCheck />}
          </span>
          {label && <span className={styles.checkboxLabel}>{label}</span>}
        </label>
      </div>
    );
  }
);
