import Image from "next/image";
import styles from "./Donation.module.css";
import { Tags } from "@/components";
import { s } from "framer-motion/client";

export default function Donation() {
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
              src="/gato.jpg"
              alt="Foto ONG"
              width={120}
              height={120}
              className={styles.image}
            />
            <div className={styles.info}>
              <div className={styles.nameRow}>
                <h2 className={styles.ongname}>SOS Gatinho</h2>
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
            <button className={styles.backButton} aria-label="Voltar">
              ↩
            </button>
          </div>

          <div className={styles.about}>
            <p>
              A ONG é dedicada a amparar e transformar a vida dos animais em
              situação de vulnerabilidade, fornecem lar temporário, até que eles
              estejam em boa saúde para que sejam o processo de adoção.
            </p>
          </div>

          <div className={styles.icons}>
            <div className={styles.email}>
              <span aria-label="Email">✉</span>
              <div className={styles.emailtext}>teste</div>
            </div>
            <div className={styles.phone}>
              <span aria-label="Telefone">📞</span>
              <div className={styles.phonetext}>teste</div>
            </div>
            <div className={styles.location}>
              <span aria-label="Localização">📍</span>
              <div className={styles.locationtext}>teste</div>
            </div>
          </div>

          <Tags items={["Categoria", "Animal", "Adoção", "Felinos"]} />
        </div>
      </div>
    </div>
  );
}
