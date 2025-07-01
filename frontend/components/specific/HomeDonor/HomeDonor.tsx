import React from "react";
import styles from "./HomeDonor.module.css"; // criaremos este arquivo a seguir

type Ong = {
  img: string;
  nome: string;
  estrelas: number;
};

const ongsProximas: Ong[] = [
  { img: "/exemplo1.jpg", nome: "SOS Gatinho", estrelas: 4 },
  { img: "/exemplo2.jpg", nome: "Amigos dos Bichos", estrelas: 5 },
  // ...adicione mais mocks se quiser
];

const ongsMelhores: Ong[] = [
  { img: "/exemplo3.jpg", nome: "ONG Patas Felizes", estrelas: 5 },
  { img: "/exemplo4.jpg", nome: "Cão Cuidado", estrelas: 4 },
  // ...adicione mais mocks se quiser
];

function OngCard({ img, nome, estrelas }: Ong) {
  return (
    <div className={styles.card}>
      
      <span className={styles.cardName}>{nome}</span>
      <div className={styles.stars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < estrelas ? "⭐" : "☆"}</span>
        ))}
      </div>
      <button className={styles.cardButton}>Doar</button>
    </div>
  );
}

export default function HomeDonor() {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
  

      {/* Busca + Filtro */}
      <section className={styles.searchSection}>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="SOS Gatinho" className={styles.input} />
          <span className={styles.searchIcon}>🔍</span>
        </div>
        <button className={styles.filterButton}>Filtrar ⌄</button>
      </section>

      {/* Mais Próximas de Você */}
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Mais Próximas de Você</h2>
        <div className={styles.cardsRow}>
          {ongsProximas.map((ong, i) => (
            <OngCard key={i} {...ong} />
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Melhor Avaliação</h2>
        <div className={styles.cardsRow}>
          {ongsMelhores.map((ong, i) => (
            <OngCard key={i} {...ong} />
          ))}
        </div>
      </main>
    </div>
  );
}
