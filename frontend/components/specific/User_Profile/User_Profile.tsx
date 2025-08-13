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
        // Requisição para pegar usuário autenticado
        const data = await AuthService.request<{ user: User; role: string }>("/api/auth/me");
        setUser(data.user);

        // Inicializa campos para edição
        setEmail(data.user.don_email || "");
        setPhone(data.user.don_phone || "");
        setCep(data.user.don_cep || "");
        setHouseNumber(data.user.don_houseNumber || "");
        setComplement(data.user.don_complement || "");

        // Busca as doações do doador
        const donationsData = await AuthService.request<Donation[]>(`/api/donations/donor/${data.user.id}`);
        setDonations(donationsData);
      } catch (error) {
        console.error("Erro ao carregar usuário ou doações:", error);
      }
    }
    loadUserAndDonations();
  }, []);

  const handleClose = async () => {
    if (!user) return;

    try {
      const formData = new FormData();
      formData.append("don_email", email);
      formData.append("don_phone", phone);
      formData.append("don_cep", cep);
      formData.append("don_houseNumber", houseNumber);
      formData.append("don_complement", complement);

      const response = await AuthService.updateDonor(user.id, formData);
      setUser(response);
      setOpenModal(null);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !user) return;

    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("don_image", file);

    try {
      const response = await AuthService.updateDonor(user.id, formData);
      setUser(response);
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

      {/* Tabela de doações */}
      <div className={styles.tableContent}>
        <table className={styles.tableDonations}>
          <thead>
            <tr>
              <th className={styles.headerTable}>Data</th>
              <th className={styles.headerTable}>Tipo</th>
              <th className={styles.headerTable}>Valor</th>
              <th className={styles.headerTable}>ONG</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id} className={styles.lineTable}>
                <td>{new Date(donation.created_at).toLocaleDateString("pt-BR")}</td>
                <td>{donation.donation_type}</td>
                <td>
                  {Number(donation.value).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>{donation.ong.ong_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para editar perfil */}
      {openModal === "modal1" && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Editar Perfil</h2>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Telefone:
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label>
              CEP:
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </label>
            <label>
              Número:
              <input
                type="text"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </label>
            <label>
              Complemento:
              <input
                type="text"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </label>

            <div className={styles.modalButtons}>
              <button onClick={() => setOpenModal(null)}>Cancelar</button>
              <button onClick={handleClose}>Salvar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modais para outros cards poderiam ser implementados aqui */}

    </div>
  );
}
