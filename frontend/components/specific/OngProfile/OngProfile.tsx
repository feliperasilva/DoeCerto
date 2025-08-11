"use client";

import styles from "./OngProfile.module.css";

export default function Donation() {
  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
          <div className={styles.profileBanner}></div>
          <div className={styles.userPhoto}></div>
      </div>
    </div>
  );
}