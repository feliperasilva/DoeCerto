import React from "react";
import styles from "./Donation.module.css";


export default function Donation() {
    return(
      <div className={styles.donationContent}>

            <div className={styles.donationLeftBox}>
                <div className={styles.donationOngImage}>
                   
                </div>

                <div className={styles.donationHeader}>
                    <p className={styles.donationTitleOng}>SOS Gatinho</p>
                    <p className={styles.donationParagraph}>Deixe sua Avaliação</p>
                    <p>Muito bom 4.0</p>
                    <p>Muito bom 4.0</p>
                 </div>
                 
            </div>

            <div className={styles.donationRightBox}>

            </div>
      </div>  
    )
}