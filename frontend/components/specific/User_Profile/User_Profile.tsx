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
  don_houseNumber?: string;
  don_complement?: string;
  don_location?: string;
  don_since?: string;
  don_description?: string;
  don_image?: string;
}

interface Donation {
  id: string;
  created_at: string;
  donation_type: string;
  value: string;
  ong: {
    ong_name: string;
  };
}

export default function User_Profile() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [complement, setComplement] = useState("");

  useEffect(() => {
    async function loadUserAndDonations() {
      try {
        // Pega o usuário autenticado
        const data = await AuthService.request<User>("/api/auth/donor/me");
        setUser(data);

        // Inicializa campos para edição
        setEmail(data.don_email || "");
        setPhone(data.don_phone || "");
        setCep(data.don_cep || "");
        setHouseNumber(data.don_houseNumber || "");
        setComplement(data.don_complement || "");

        // Busca as doações do doador
        const donationsData = await AuthService.request<Donation[]>(
          `/api/donations/donor/${data.id}`
        );
        setDonations(donationsData);
      } catch (error) {
        console.error("Erro ao carregar usuário ou doações:", error);
      }
    }
    loadUserAndDonations();
  }, []);

  // Fecha o modal e salva alterações
  const handleClose = async () => {
    if (!user) return;

    try {
      const formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("don_email", email);
      formData.append("don_phone", phone);
      formData.append("don_cep", cep);
      formData.append("don_houseNumber", houseNumber);
      formData.append("don_complement", complement);

      const response = await AuthService.updateDonor(user.id, formData);
      setUser(response.data);
      setOpenModal(null);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  // Dispara o clique no input file escondido
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // Upload da imagem do usuário
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !user) return;

    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("don_image", file);
    formData.append("_method", "PUT");

    try {
      const response = await AuthService.updateDonor(user.id, formData);
      setUser(response.data);
      console.log("Imagem atualizada com sucesso");
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
    }
  };

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
          <p
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            <Image
              src="/Location.svg"
              alt="localização"
              width={20}
              height={20}
              style={{ marginRight: 5 }}
            />
            {user.don_location || "Brasil"}
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            <Image
              src="/clock.svg"
              alt="relógio"
              width={20}
              height={20}
              style={{ marginRight: 5 }}
            />
            Participa desde {user.don_since || "julho de 2025"}
          </p>
          <button
            className={styles.editButton}
            onClick={() => setOpenModal("modal1")}
          >
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

      {/* Tabela de doações */}
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
  {donations.length > 0 ? (
    donations.map((donation) => {
      console.log("Doação:", donation);
      return (
        <tr key={donation.id}>
          <td className={styles.rowTable}>
            {new Date(donation.created_at).toLocaleDateString("pt-BR")}
          </td>
          <td className={styles.rowTable}>
            {donation.donation_type || "Desconhecido"}
          </td>
          <td className={styles.rowTable}>
            {Number(donation.value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </td>
          <td className={styles.rowTable}>
            {donation.ong?.ong_name || "ONG não informada"}
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan={4} className={styles.rowTable}>
        Nenhuma doação encontrada.
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>


      {/* MODAL: Informações pessoais */}
      {openModal === "modal1" && (
        <div className={styles.modalOverlay}>
          <div className={styles.userInformationModal}>
            <h1 style={{ marginBottom: 30 }}>Editar Perfil</h1>

            <div className={styles.formGroup}>
              <label className={styles.labelForms} htmlFor="email">
                E-mail:
              </label>
              <input
                className={styles.inputForms}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labelForms} htmlFor="telefone">
                Telefone:
              </label>
              <input
                className={styles.inputForms}
                id="telefone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labelForms} htmlFor="cep">
                Cep (opcional):
              </label>
              <input
                className={styles.inputForms}
                id="cep"
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labelForms} htmlFor="numero">
                Número da Casa (opcional):
              </label>
              <input
                className={styles.inputForms}
                id="numero"
                type="number"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.labelForms} htmlFor="complemento">
                Complemento:
              </label>
              <input
                className={styles.inputForms}
                id="complemento"
                type="text"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </div>

            <button onClick={handleClose} className={styles.modalClose}>
              Salvar Alterações
            </button>
          </div>
        </div>
      )}

      {/* MODAL 2 e 3 */}
      {openModal === "modal2" && (
        <div className={styles.modalOverlay}>
          <div className={styles.userInformationModal}>
            <h1>Editar Favoritos</h1>
            {/* Conteúdo do modal 2 */}
            <button className={styles.modalClose} onClick={() => setOpenModal(null)}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {openModal === "modal3" && (
        <div className={styles.modalOverlay}>
          <div className={styles.userInformationModal}>
            <h1>Editar Descrição</h1>
            {/* Conteúdo do modal 3 */}
            <button className={styles.modalClose} onClick={() => setOpenModal(null)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
