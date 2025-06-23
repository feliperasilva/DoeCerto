"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./Checkbox.module.css";
import type { CheckboxProps } from "@/types";

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, name, className = "", ...rest }, ref) => {
    return (
      <div className={`${styles.checkboxContainer} ${className}`}>
        <label htmlFor={id} className={styles.checkboxContainerLabel}>
          <input
            type="checkbox"
            id={id}
            name={name}
            ref={ref}
            className={styles.checkboxInput}
            {...rest}
          />
          <span className={styles.customCheckbox}>
            {/* ícone sempre visível se o input estiver marcado */}
            <FaCheck className={styles.checkIcon} />
          </span>
          {label && <span className={styles.checkboxLabel}>{label}</span>}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
