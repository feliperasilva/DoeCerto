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
                   {/* imagem */}
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

                {/* formas de pagamento */}
                <div className={styles.donationForms}>
                     <h3 className={styles.donationPaymentTitle}>Formas de contribuição</h3>
                     
                  <div className={styles.donationPaymentCards}>
                     {/* card esquerdo */}
                     <div className={styles.paymentCard}>
                       <div className={styles.cardTop}>
                        <FaMoneyCheckAlt className={styles.paymentIcon} size={40} />
                        <p className={styles.cardTopP}>Doação de Dinheiro</p>
                       </div>
                       <div className={styles.paymentButton}>
                        <button className={styles.button1}></button>
                        <button className={styles.button1}></button>
                        <button className={styles.button2}></button>
                       </div>
                     </div>
                     {/* fim card esquerdo */}
                     {/* card direito */}
                    <div className={styles.paymentCard}>
                       <div className={styles.cardTop}>
                        <FaGift className={styles.paymentIcon} size={40} />
                        <p className={styles.cardTopP}>Doação de Itens</p>
                       </div>
                       <div className={styles.paymentButton}>
                        <button className={styles.button1}></button>
                        <button className={styles.button1}></button>
                        <button className={styles.button2}></button>
                       </div>
                    </div>
                    {/* fim card direito */}
                  </div>
                    
                </div>
                {/* fim formas de pagamento */}
            </div>
            {/* fim lado esquerdo */}

            {/* lado direito */}
            <div className={styles.donationRightBox}>
              {/* cabeçalho lado direito */}
              <div className={styles.donationHeaderRight}>
                <h1 className={styles.donationTitleRight}>
                  Sobre a ONG
                  <IoReturnUpBackOutline size={40} style={{color: '#6B39A7', marginLeft: '160px'}} />
                </h1>
              </div>
              {/* fim cabeçalho lado direito */}

              
             </div>
            {/* fim lado direito */}
      </div>  
    );
}