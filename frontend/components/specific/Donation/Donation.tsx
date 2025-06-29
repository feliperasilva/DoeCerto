import React from "react";
import styles from "./Donation.module.css";
import StarRating from '../../StarRating';
import { FaHeart, FaMoneyCheckAlt, FaGift } from 'react-icons/fa';
import { BsPatchCheckFill } from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { IoReturnUpBackOutline } from 'react-icons/io5';

export default function Donation() {
    return(
      <div className={styles.donationContent}>

                {/* lado esquerdo */}
            <div className={styles.donationLeftBox}>

                {/* cabeçalho lado esquerdo */}
                <div className={styles.donationHeaderLeft}>
                  <div className={styles.donationOngImage}>
                   /* imagem */
                  </div>

                  <div>
                    <p className={styles.donationTitleOngLeft}>SOS Gatinho 
                    <BsPatchCheckFill style={{ marginLeft: 8, color: "#6B39A7" }} />
                    </p>
                    <p className={styles.donationParagraphLeft}>Deixe sua Avaliação</p>
                    <StarRating rating={4.5} />
                    <p>Muito bom 4.5</p>
                    <button className={styles.donationButtonFavorite}>
                      <FaHeart size={20} />Favoritar</button>
                  </div>

                </div>
                 {/* fim cabeçalho lado esquerdo */}

                 
            </div>  
            {/* fim lado direito */}
      </div>  
    )
}