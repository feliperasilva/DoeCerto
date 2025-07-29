"use client";

import React, { useState } from 'react';
import styles from "./User_Profile.module.css";
import { FaPencilAlt, FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function User_Profile() {
   const [openModal, setOpenModal] = useState<string | null>(null); 

   const handleClose = () => setOpenModal(null);

   const doadores = [
    { data: "16/04/2025", tipo: "Dinheiro", valor: "R$ 30,00", ong: "SOS Gatinhos" },
    { data: "16/04/2025", tipo: "Dinheiro", valor: "R$ 30,00", ong: "SOS Gatinhos" },
    { data: "16/04/2025", tipo: "Dinheiro", valor: "R$ 30,00", ong: "SOS Gatinhos" },
    { data: "16/04/2025", tipo: "Dinheiro", valor: "R$ 30,00", ong: "SOS Gatinhos" },
    { data: "16/04/2025", tipo: "Dinheiro", valor: "R$ 30,00", ong: "SOS Gatinhos" },
    { data: "16/04/2025", tipo: "Dinheiro", valor: "R$ 30,00", ong: "SOS Gatinhos" },

  ];

  return (
   <div className={styles.container}>
           <div className={styles.profileHeader}>
             <div className={styles.profileBanner}></div>
             <div className={styles.userPhoto}></div>
             <div className={styles.space}></div>
           </div>
           <div className={styles.content}>
   
             <div className={styles.userData}>
               <h1 className={styles.userName}>Ryon Xavier</h1>
               <p style={{ fontSize: 18, marginBottom: 5}}>Cep: 123132</p>
   
               <p style={{ display: 'flex', alignItems: 'center', fontSize: 18, marginBottom: 5}}>
                 <Image src="/Location.svg" alt="localizaçao" width={20} height={20} style={{ marginRight: 5}}/> Brasil</p>
   
               <p style={{ display: 'flex', alignItems: 'center', fontSize: 18, marginBottom: 5}}>
                 <Image src="/clock.svg" alt="relogio" width={20} height={20} style={{ marginRight: 5}}/> Participa desde julho de 2025</p>
   
                 <button className={styles.editButton}>Editar Perfil</button>
             </div>
   
             <div className={styles.topics}>
               <button className={styles.favoritesButton}>Favoritos <FaStar style={{marginLeft: 10}}/> </button>
               <div className={styles.blocks}>
                <div className={styles.block}>Educação</div>
                <div className={styles.block}>Proteção Animal</div>
                <div className={styles.block}>Combate à fome</div>
                <div className={styles.block}>Saúde</div>
                <div className={styles.block}>Meio Ambiente</div>
               </div>
             </div>
   
           </div>
   
           <div className={styles.editingCards}>
               <button className={styles.card} onClick={() => setOpenModal('modal1')}>
                Informações Pessoais <FaPencilAlt style={{marginLeft: 120}}/>
               </button>
   
               <button className={styles.card} onClick={() => setOpenModal('modal2')}>
                 <p>Favoritos <FaPencilAlt style={{marginLeft: 235}}/></p>
               </button>
   
                <button className={styles.card} onClick={() => setOpenModal('modal3')}>
                 <p>Descrição <FaPencilAlt style={{marginLeft: 230}}/></p>
               </button>
           </div>

        <div className={styles.tableContent}>
          <table className={styles.tableDonations}>
            <thead style={{borderTopLeftRadius:20, borderTopRightRadius:20}}>
              <tr>
                <th className={styles.headerTable}>Data</th>
                <th className={styles.headerTable}>Tipo</th>
                <th className={styles.headerTable}>Valor/Item</th>
                <th className={styles.headerTable}>ONG</th>
              </tr>
            </thead>
            <tbody>

              {doadores.map((doador, index) => (
                  <tr key={`${doador.data}-${doador.ong}-${index}`}>
                  <td className={styles.rowTable}>{doador.data}</td>
                  <td className={styles.rowTable}>{doador.tipo}</td>
                  <td className={styles.rowTable}>{doador.valor}</td>
                  <td className={styles.rowTable}>{doador.ong}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {openModal === 'modal1' && (
        <div className={styles.modalOverlay}>
          <div className={styles.userInformationModal}>
            <h1 style={{marginBottom: 30}}>Editar Perfil</h1>
              <div className={styles.formGroup}>
                <label className={styles.labelForms} htmlFor="email">E-mail:</label>
                <input className={styles.inputForms} id="email" type="email" placeholder='exemplo@gmail.com'/>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.labelForms} htmlFor="telefone">Telefone:</label>
                <input className={styles.inputForms} id="telefone" type="tel" placeholder='(81) 91234-5678'/>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.labelForms} htmlFor="cep">Cep (opcional):</label>
                <input className={styles.inputForms} id="cep" type="text" placeholder='12.123-456'/>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.labelForms} htmlFor="numero">Número da Casa (opcional):</label>
                <input className={styles.inputForms} id="numero" type="number" placeholder='123'/>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.labelForms} htmlFor="complemento">Complemento:</label>
                <input className={styles.inputForms} id="complemento" type="number" placeholder='Bloco 6 - Apto 123'/>
              </div>
            <button onClick={handleClose} className={styles.modalClose}>Salvar Alterações</button>
          </div>
        </div>
      )}

       {openModal === 'modal2' && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button onClick={handleClose} className={styles.modalClose}>×</button>
            <h2>Modal 2</h2>
            <p>Conteúdo do segundo modal.</p>
          </div>
        </div>
      )}

      {openModal === 'modal3' && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button onClick={handleClose} className={styles.modalClose}>×</button>
            <h2>Modal 3</h2>
            <p>Conteúdo do terceiro modal.</p>
          </div>
        </div>
      )}
   </div>
 );
}
