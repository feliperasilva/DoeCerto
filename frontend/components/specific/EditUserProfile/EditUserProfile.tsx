import React from "react";
import styles from "./EditUserProfile.module.css";

export default function EditUserProfile() {
  return (
    <div className={styles.container}>
        <div className={styles.profileHeader}>
         <div className={styles.profileBanner}></div>
         <div className={styles.userPhoto}></div>
         <div className={styles.space}></div>
        </div>
        <div className={styles.userData}>
            <p>Ryon Xavier</p>
        </div>
    </div>
  )}