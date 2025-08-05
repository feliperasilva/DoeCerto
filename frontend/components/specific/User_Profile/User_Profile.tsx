"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./User_Profile.module.css";
import { FaPencilAlt, FaStar } from "react-icons/fa";
import Image from "next/image";
import AuthService from "@/lib/auth";

interface User {
  id: string;
  don_name: string;
  don_email: string;
  don_phone?: string;
  don_cep?: string;
  don_number?: string;
  don_complement?: string;
  don_location?: string;
  don_since?: string;
  don_description?: string;
  don_image?: string;
}

export default function User_Profile() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await AuthService.request<User>("/api/auth/donor/me");
        setUser(data);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      }
    }
    loadUser();
  }, []);

  const handleClose = () => setOpenModal(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !user) return;

    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("don_image", file);
    formData.append("_method", "PUT"); // necessário para Laravel

    try {
      const response = await AuthService.updateDonor(user.id, formData);
      setUser(response.data);
      console.log("Imagem atualizada com sucesso");
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
    }
  };

  const doadores = [
    { data: "16/04/2025", tipo: "Dinheiro", valor: "R$ 30,00", ong: "SOS Gatinhos" },
  ];

  if (!user) return <p>Carregando perfil...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <div className={styles.profileBanner}></div>

        <div
          className={styles.userPhoto}
          onClick={handleImageClick}
          style={{
            cursor: "pointer",
            backgroundImage: user.don_image
              ? `url(${process.env.NEXT_PUBLIC_API_URL}/storage/${user.don_image})`
              : "url(/default-profile.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>


        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <div className={styles.space}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.userData}>
          <h1 className={styles.userName}>{user.don_name}</h1>
          <p style={{ fontSize: 18, marginBottom: 5 }}>
            Cep: {user.don_cep || "não informado"}
          </p>
          <p style={{ display: "flex", alignItems: "center", fontSize: 18, marginBottom: 5 }}>
            <Image src="/Location.svg" alt="localização" width={20} height={20} style={{ marginRight: 5 }} />
            {user.don_location || "Brasil"}
          </p>
          <p style={{ display: "flex", alignItems: "center", fontSize: 18, marginBottom: 5 }}>
            <Image src="/clock.svg" alt="relógio" width={20} height={20} style={{ marginRight: 5 }} />
            Participa desde {user.don_since || "julho de 2025"}
          </p>
          <button className={styles.editButton} onClick={() => setOpenModal("modal1")}>
            Editar Perfil
          </button>
        </div>

        <div className={styles.topics}>
          <button className={styles.favoritesButton}>
            Favoritos <FaStar style={{ marginLeft: 10 }} />
          </button>
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
        <button className={styles.card} onClick={() => setOpenModal("modal1")}>
          Informações Pessoais <FaPencilAlt style={{ marginLeft: 120 }} />
        </button>
        <button className={styles.card} onClick={() => setOpenModal("modal2")}>
          Favoritos <FaPencilAlt style={{ marginLeft: 235 }} />
        </button>
        <button className={styles.card} onClick={() => setOpenModal("modal3")}>
          Descrição <FaPencilAlt style={{ marginLeft: 230 }} />
        </button>
      </div>

      <div className={styles.tableContent}>
        <table className={styles.tableDonations}>
          <thead>
            <tr>
              <th className={styles.headerTable}>Data</th>
              <th className={styles.headerTable}>Tipo</th>
              <th className={styles.headerTable}>Valor/Item</th>
              <th className={styles.headerTable}>ONG</th>
            </tr>
          </thead>
          <tbody>
            {doadores.map((doador, index) => (
              <tr key={`${doador.data}-${index}`}>
                <td className={styles.rowTable}>{doador.data}</td>
                <td className={styles.rowTable}>{doador.tipo}</td>
                <td className={styles.rowTable}>{doador.valor}</td>
                <td className={styles.rowTable}>{doador.ong}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL: Informações pessoais */}
      {openModal === "modal1" && (
        <div className={styles.modalOverlay}>
          <div className={styles.userInformationModal}>
            <h1 style={{ marginBottom: 30 }}>Editar Perfil</h1>

            <div className={styles.formGroup}>
              <label className={styles.labelForms} htmlFor="email">E-mail:</label>
              <input className={styles.inputForms} id="email" type="email" defaultValue={user.don_email} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labelForms} htmlFor="telefone">Telefone:</label>
              <input className={styles.inputForms} id="telefone" type="tel" defaultValue={user.don_phone || ""} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labelForms} htmlFor="cep">Cep (opcional):</label>
              <input className={styles.inputForms} id="cep" type="text" defaultValue={user.don_cep || ""} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labelForms} htmlFor="numero">Número da Casa (opcional):</label>
              <input className={styles.inputForms} id="numero" type="number" defaultValue={user.don_number || ""} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labelForms} htmlFor="complemento">Complemento:</label>
              <input className={styles.inputForms} id="complemento" type="text" defaultValue={user.don_complement || ""} />
            </div>

            <button onClick={handleClose} className={styles.modalClose}>
              Salvar Alterações
            </button>
          </div>
        </div>
      )}

      {/* MODAIS 2 e 3 */}
      {openModal === "modal2" && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button onClick={handleClose} className={styles.modalClose}>×</button>
            <h2>Modal 2</h2>
            <p>Conteúdo do segundo modal.</p>
          </div>
        </div>
      )}

      {openModal === "modal3" && (
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
