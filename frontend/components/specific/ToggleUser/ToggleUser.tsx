"use client";
import styles from "./ToggleUser.module.css";
import { FaUser, FaBuildingNgo } from "react-icons/fa6";
import type { ToggleUserProps, UserType } from "@/types";

function toggleUserType(current: UserType): UserType {
  return current === "donor" ? "ngo" : "donor";
}

export default function ToggleUser({ selected, setSelected }: ToggleUserProps) {
  const handleToggle = () => {
    setSelected(toggleUserType(selected));
  };

  return (
    <div className={styles.toggleUser} onClick={handleToggle}>
      <div
        className={`${styles.toggleSlider} ${
          selected === "ngo" ? styles.sliderRight : styles.sliderLeft
        }`}
      />
      <div
        className={`${styles.toggleButton} ${
          selected === "donor" ? styles.active : ""
        }`}
      >
        <span className={styles.toggleIcon}>
          <FaUser />
        </span>
        <span className={styles.toggleText}>Doador</span>
      </div>
      <div
        className={`${styles.toggleButton} ${
          selected === "ngo" ? styles.active : ""
        }`}
      >
        <span className={styles.toggleIcon}>
          <FaBuildingNgo />
        </span>
        <span className={styles.toggleText}>ONG</span>
      </div>
    </div>
  );
}
