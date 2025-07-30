"use client";

import React, { useState } from 'react';
import styles from "./Donation_Itens.module.css";
import { FiChevronDown } from 'react-icons/fi';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function Donation_Itens() {
    const [openModal, setOpenModal] = useState<string | null>(null); 
    
    const toggleConteudo = () => {
  setOpenModal((prev) => (prev === 'modal1' ? null : 'modal1'));
};

    return(
        <div className={styles.container}>
            <div className={styles.ONGBanner}>
                <img src="" alt="" />
            </div>
            <div className={styles.donationData}>
                <button className={styles.buttonFormation} onClick={toggleConteudo}>Dados da Doação
                    <FiChevronDown size={24} style={{width: 35, height: 30, alignItems: 'center'}}/></button>
                <button className={styles.buttonFormation}>Dados da Retirada
                <FiChevronDown size={24} style={{width: 35, height: 30, alignItems: 'center'}}/></button>
                <button className={styles.buttonFormation}>Dados do Doador
                    <FiChevronDown size={24} style={{width: 35, height: 30, alignItems: 'center'}}/>
                </button>
            </div>

             {openModal === 'modal1' && (
                    <div className={styles.modalOverlay}>
                      <ul className={styles.modalRow}>
                        <li className={styles.modalItem}>
                            <button className={styles.substractAndAdd}><FaMinus style={{color: 'red', width: 15, height: 15}}/></button>
                            <button className={styles.substractAndAdd}><FaPlus style={{color: 'green', width: 15,height: 15}}/></button>
                            <p className={styles.itemName}> Roupas (Sacos ou Caixa)</p>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.modalItem}>
                            <button className={styles.substractAndAdd}><FaMinus style={{color: 'red', width: 15, height: 15}}/></button>
                            <button className={styles.substractAndAdd}><FaPlus style={{color: 'green', width: 15,height: 15}}/></button>
                            <p className={styles.itemName}> Calçados (Sacos ou Caixa)</p>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.modalItem}>
                            <button className={styles.substractAndAdd}><FaMinus style={{color: 'red', width: 15, height: 15}}/></button>
                            <button className={styles.substractAndAdd}><FaPlus style={{color: 'green', width: 15,height: 15}}/></button>
                            <p className={styles.itemName}> Livros (Sacos ou Caixa)</p>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.modalItem}>
                            <button className={styles.substractAndAdd}><FaMinus style={{color: 'red', width: 15, height: 15}}/></button>
                            <button className={styles.substractAndAdd}><FaPlus style={{color: 'green', width: 15,height: 15}}/></button>
                            <p className={styles.itemName}> Brinquedos (Sacos ou Caixa)</p>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.modalItem}>
                            <button className={styles.substractAndAdd}><FaMinus style={{color: 'red', width: 15, height: 15}}/></button>
                            <button className={styles.substractAndAdd}><FaPlus style={{color: 'green', width: 15,height: 15}}/></button>
                            <p className={styles.itemName}> Roupas (Sacos ou Caixa)</p>
                        </li>
                      </ul>
                    </div>
                  )}

        </div>
    );
}