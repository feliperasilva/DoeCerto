import styles from "./OngCard.module.css";

export default function OngCard({ imagem="", nome="", nota=0 }) {
  const estrelasCheias = "★".repeat(nota);
  const estrelasVazias = "☆".repeat(5 - nota);

    return (
      <div className={styles.card}>
        <img src={imagem} alt={nome} className={styles.img} />
        <h3 className={styles.titulo}>{nome}</h3>
       {/* <div className={styles.estrelas}>
        {estrelasCheias}{estrelasVazias}
       </div> */}
       <button className={styles.botao}>Doar</button>
      </div>
    );
}
