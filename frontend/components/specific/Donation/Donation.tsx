"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Donation.module.css";
import { Tags } from "@/components";

interface Ong {
  id: number;
  ong_name: string;
  ong_email: string;
  ong_cnpj: string;
  ong_image?: string;
  // Campos futuros: telefone, localização, etc.
}

export default function Donation() {
  const params = useParams();
  const router = useRouter();
  const [ong, setOng] = useState<Ong | null>(null);
  const [loading, setLoading] = useState(true);

  const defaultImage =
    "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg";

  useEffect(() => {
    const fetchOng = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/ongs/${params.id}`
        );
        if (!res.ok) throw new Error("Erro ao buscar ONG");
        const data = await res.json();
        setOng(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOng();
  }, [params.id]);

  if (loading) {
    return <div className={styles.ongcontainer}>Carregando ONG...</div>;
  }

  if (!ong) {
    return <div className={styles.ongcontainer}>ONG não encontrada</div>;
  }

  return (
    <div className={styles.ongcontainer}>
      {/* Título */}
      <div className={styles.header}>
        <h1>
          Já são <span>1.987</span> doações recebidas em 2025
        </h1>
      </div>

      {/* Container Principal */}
      <div className={styles.container}>
        {/* Lado Esquerdo */}
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Image
              src={ong.ong_image ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${ong.ong_image}` : defaultImage}
              alt={`Foto da ONG ${ong.ong_name}`}
              width={120}
              height={120}
              className={styles.image}
            />
            <div className={styles.info}>
              <div className={styles.nameRow}>
                <h2 className={styles.ongname}>{ong.ong_name}</h2>
              </div>

              <button className={styles.favorite}>
                <span className={styles.heart}>♥</span> Favoritar
              </button>
            </div>
          </div>

          <div className={styles.contribution}>
            <h3 className={styles.contributionTitle}>Formas de contribuição</h3>
            <div className={styles.cards}>
              <div className={styles.moneyCard}>
                <div className={styles.moneyheader}>
                  <div className={styles.moneyicon}>💲</div>
                  <div className={styles.moneytitle}>Doar Dinheiro</div>
                </div>
                <button className={styles.money}>Doar</button>
              </div>
              <div className={styles.itemsCard}>
                <div className={styles.itemsheader}>
                  <div className={styles.itemsicon}>🎁</div>
                  <div className={styles.itemstitle}>Doar Itens</div>
                </div>
                <button className={styles.items}>Doar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito */}
        <div className={styles.right}>
          <div className={styles.aboutHeader}>
            <h3 className={styles.aboutTitle}>Sobre a ONG</h3>
            <button
              className={styles.backButton}
              aria-label="Voltar"
              onClick={() => router.back()}
            >
              ↩
            </button>
          </div>

          <div className={styles.about}>
            <p>
              {/* Placeholder até você adicionar a descrição real no banco */}
              A ONG {ong.ong_name} é dedicada a transformar vidas e causas sociais.  
            </p>
          </div>

          <div className={styles.icons}>
            <div className={styles.email}>
              <span aria-label="Email">✉</span>
              <div className={styles.emailtext}>{ong.ong_email}</div>
            </div>
            <div className={styles.phone}>
              <span aria-label="Telefone">📞</span>
              <div className={styles.phonetext}>Não disponível</div>
            </div>
            <div className={styles.location}>
              <span aria-label="Localização">📍</span>
              <div className={styles.locationtext}>Não disponível</div>
            </div>
          </div>

          <Tags items={["Categoria", "Animal", "Adoção", "Felinos"]} />
        </div>
      </div>
    </div>
  );
}
