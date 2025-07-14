"use client";

import React from "react";
import styles from "./User_Profile.module.css";
import Image from 'next/image';

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
      <div className={styles.totalDonations}>
        <button className={styles.editButton}>Editar Perfil</button>

      <h1 className={styles.title}>Sua generosidade transforma vidas!</h1>

      <div className={styles.content}>
        <div className={styles.textBox}>
          <h2 className={styles.subtitle}>Total de doações</h2>
          <h2 className={styles.donationCount}>5</h2>
        </div>

        <div className={styles.imageBox}>
          <Image
            src="/illustration.svg" 
            alt="Mulher segurando coração"
            width={300}
            height={300}
          />
        </div>
      </div>
      </div>
    </div>
  );
}
