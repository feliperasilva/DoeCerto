import styles from "./OngCard.module.css";
import { useRouter } from "next/navigation";

interface OngCardProps {
  id: number;
  imagem?: string;
  nome?: string;
  nota?: number;
}

export default function OngCard({ id, imagem = "", nome = "", nota = 0 }: OngCardProps) {
  const router = useRouter();
  const estrelasCheias = "★".repeat(nota);
  const estrelasVazias = "☆".repeat(5 - nota);

  const handleDoar = () => {
    router.push(`/donor/ong/${id}`);
  };

  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.img} />
      <h3 className={styles.titulo}>{nome}</h3>
      {/* Caso queira mostrar estrelas de avaliação, descomente: */}
      {/* <div className={styles.estrelas}>
        {estrelasCheias}{estrelasVazias}
      </div> */}
      <button className={styles.botao} onClick={handleDoar}>Doar</button>
    </div>
  );
}
