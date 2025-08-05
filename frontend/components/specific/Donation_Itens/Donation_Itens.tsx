"use client";

import React, { useState } from 'react';
import styles from "./Donation_Itens.module.css";
import { FiArrowLeft, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function Donation_Itens() {
    const [openModal, setOpenModal] = useState<string | null>(null); 
    
   const toggleConteudo = (modalName: string) => {
  setOpenModal((prev) => (prev === modalName ? null : modalName));
};

    return(
        <div className={styles.container}>
            <div className={styles.ONGBanner}>
                <img src="" alt="" />
            </div>
            <div className={styles.donationData}>
                <button className={styles.buttonFormation} onClick={() => toggleConteudo('modal1')}>Dados da Doação
                    <FiChevronDown size={24} style={{width: 35, height: 30, alignItems: 'center'}}/></button>
                <button className={styles.buttonFormation} onClick={() => toggleConteudo('modal2')}>Dados da Retirada
                <FiChevronDown size={24} style={{width: 35, height: 30, alignItems: 'center'}}/></button>
                <button className={styles.buttonFormation} onClick={() => toggleConteudo('modal3')}>Dados do Doador
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
                        <hr className={styles.rowSpace}/>
                        <li className={styles.addItens}>
                            <p style={{fontWeight: 600}}>Não encontrou o item? <a href="#" style={{color: '#6c2bd9', textDecoration: 'none'}}>Clique aqui</a></p>
                            <button className={styles.buttonNext}>Próximo
                                <FiArrowRight size={32} color="#6c2bd9" style={{marginLeft: 20}}/>
                            </button>
                        </li>
                      </ul>
                    </div>
                  )}

                   {openModal === 'modal2' && (
                    <div className={styles.modalOverlay}>
                      <ul className={styles.modalRow}>
                        <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>Cep:</label>
                            <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                            <input type="text" className={styles.addressDataInput}/>
                            <button className={styles.buttonSearch}>Buscar</button>
                            </div>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>Endereço:</label>
                            
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>Número:</label>
                            <input type="text" className={styles.addressDataInput}/>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>Complemento:</label>
                            <input type="text" className={styles.addressDataInput}/>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>Como conheceu a DoeCerto?</label>
                            <input type="text" className={styles.addressDataInput}/>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.buttonStart}>
                            <button className={styles.buttonNext}>
                                <FiArrowLeft size={32} color="#6c2bd9" style={{marginRight: 20}}/>
                                Anterior
                            </button>
                            <button className={styles.buttonNext}>Próximo
                                <FiArrowRight size={32} color="#6c2bd9" style={{marginLeft: 20}}/>
                            </button>
                        </li>
                      </ul>
                    </div>
                  )}

                   {openModal === 'modal3' && (
                    <div className={styles.modalOverlay}>
                      <ul className={styles.modalRow}>
                        <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>Tipo de Pessoa:</label>
                            <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                                
                                 <button className={styles.buttonOption}></button>
                                 <p>Sim</p>
                                
                                 <button></button>
                                 <p>Não</p>
                                
                            </div>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>CPF:</label>
                            <input type="text" className={styles.addressDataInput}/>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>Nome:</label>
                            <input type="text" className={styles.addressDataInput}/>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>E-mail:</label>
                            <input type="text" className={styles.addressDataInput}/>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>Deseja receber novidades do DoeCerto?</label>
                            <input type="text" className={styles.addressDataInput}/>
                        </li>
                        <hr className={styles.rowSpace}/>
                         <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>DDD e Telefone 1:</label>
                            <input type="text" className={styles.addressDataInput}/>
                        </li>
                        <hr className={styles.rowSpace}/>
                         <li className={styles.withdrawalData}>
                            <label htmlFor="" className={styles.nameAddress}>DDD e Telefone 2:</label>
                            <input type="text" className={styles.addressDataInput}/>
                        </li>
                        <hr className={styles.rowSpace}/>
                        <li className={styles.buttonStart}>
                            <button className={styles.buttonNext}>
                                <FiArrowLeft size={32} color="#6c2bd9" style={{marginRight: 20}}/>
                                Anterior
                            </button>
                            <button className={styles.buttonNext}>Próximo
                                <FiArrowRight size={32} color="#6c2bd9" style={{marginLeft: 20}}/>
                            </button>
                        </li>
                      </ul>
                    </div>
                  )}


        </div>
    );
}