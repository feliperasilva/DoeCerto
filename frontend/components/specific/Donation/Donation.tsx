"use client";

import React, { useState } from "react";
import styles from "./Donation.module.css";
import StarRating from '../../StarRating';
import { FaHeart, FaMoneyCheckAlt, FaGift } from 'react-icons/fa';
import { BsPatchCheckFill } from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { IoReturnUpBackOutline } from 'react-icons/io5';

export default function Donation() {
const [showModal, setShowModal] = useState(false);

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
                        <button className={styles.button2} onClick={() => setShowModal(true)}></button>
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
              {/* descrição da ONG lado direito */}
              <div className={styles.donationParagraphRight}>
                <p>A ONG é dedicada a amparar e transformar a vida dos <br />
                   animais em situação de vulnerabilidade, <br /> 
                   fornecem lar temporário, até que eles estejam <br /> 
                   em boa saúde para que sejam inserido no <br /> 
                   programa de adoção.</p>
              </div>
              {/* fim descrição da ONG lado direito */}

               {/* informações da ONG lado direito */}
              <hr className={styles.hrRow}/>
              <div className={styles.donationDataONG}>
                <p className={styles.textIcon}><MdEmail className={styles.dataIcon} /> contato@exemplo.com</p>
                <p className={styles.textIcon}><MdPhone className={styles.dataIcon} /> (81) 91234-5678</p>
                <p className={styles.textIcon}><MdLocationOn className={styles.dataIcon} /> Rua Exemplo, 123 - Igarassu, PE</p>
              </div>
              {/* fim informações da ONG lado direito */}

               {/* categorias */}
              <hr className={styles.hrRow}/>
              <div className={styles.donationCategory}>
                <div className={styles.categories}>Categorias</div>
                <div className={styles.category}>Animal</div>
                <div className={styles.category}>Adoção</div>
                <div className={styles.category}>Gatos</div>
              </div>
              {/*fim categorias */}
              
             </div>
            {/* fim lado direito */}

              {showModal && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <button onClick={() => setShowModal(false)} className={styles.modalClose}>×</button>
                <h2 className={styles.modalTitle}>Doar dinheiro</h2>
                <div className={styles.qrCode}>Qr code</div>
                <div className={styles.modalOngData}>
                <p className={styles.modalOngName}>SOS Gatinhos</p>
                <p><strong>Chave PIX:</strong></p>
                <p>(00) 00000-0000</p>
                <p><strong>Conta:</strong></p>
                <p>Banco 123 Agência 0000 Conta 12345-6</p>
                </div>
                <div style={{ marginBottom: '5px'}}></div>
                <button className={styles.modalConfirm}>Confirmar</button>
              </div>
            </div>
)}

      </div>  
    );
}