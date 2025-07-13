"use client";

import React from "react";
import styles from "./User_Profile.module.css";

export default function User_Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.userIformation}>
        <img src="#" alt="" width={250} height={250} className={styles.userPhoto} />
        <div className={styles.userData}>
            <h1 style={{marginBottom: 5, fontSize: 64}}>Ryon Xavier</h1>
            <p style={{marginBottom: 7, fontSize: 20}}>exemplo@gmail.com</p>
            <p style={{fontSize: 20}}>(81) 9 1234-5678</p>
        </div>
      </div>
    </div>
  );
}
