"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./HomeDonor.module.css";
import Link from "next/link";
import { useRef, useEffect } from "react";

const usuario = {
  nome: "Guistoso123",
  foto: "https://randomuser.me/api/portraits/men/32.jpg",
};

const ongs = [
  {
    nome: "SOS Gatinho",
    img: "https://www.estadao.com.br/resizer/v2/KJDE6VL4F5AVJJJBLH5XYGVWD4.png?quality=80&auth=9298eb03c61f9b7995df9a8c47b7eed8ca9e118c532d97b464527bc3286740b8&width=380",
    estrelas: 4,
  },
  {
    nome: "Vozes da Terra",
    img: "https://gourmetjr.com.br/wp-content/uploads/2019/04/o-que-a-alimentacao-dos-indios-tem-a-nos-ensinar-Gourmet-Jr-740x370.jpg",
    estrelas: 3,
  },
  {
    nome: "Laços de Esperança",
    img: "https://lunetas.com.br/wp-content/uploads/2021/07/passos-para-incentivar-autonomia-das-criancas-portal-lunetas.jpg",
    estrelas: 4,
  },
  {
    nome: "Casa Viva",
    img: "https://clinicaportal.com.br/wp-content/uploads/2021/11/a-importancia-do-contato-familiar-para-idosos-em-casas-de-repouso.jpg",
    estrelas: 4,
  },
  {
    nome: "Mar Azul",
    img: "https://static1.odiariodemogi.net.br/wp-content/uploads/2024/07/tartaruga-marinha-1024x683-1.jpg",
    estrelas: 4,
  },
  {
    nome: "TecnoSocial",
    img: "https://s2.glbimg.com/2gOjdgNTkByvgAOTMCjvJVmf6iI=/620x520/e.glbimg.com/og/ed/f/original/2020/10/16/gettyimages-87419070.jpg",
    estrelas: 4,
  },
  {
    nome: "Mãos que Ajudam",
    img: "https://files.mormonsud.net/wp-content/uploads/2020/04/mqa-2020.jpg",
    estrelas: 3,
  },
];

const melhores = [
  {
    nome: "Caminhos Livres",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    estrelas: 5,
  },
  {
    nome: "Tecendo Futuros",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    estrelas: 5,
  },
  {
    nome: "Rede Horizonte Azul",
    img: "https://carinhodebicho.com.br/wp-content/uploads/2021/11/novembro-azul-pet-saiba-a-importancia-1024x640.png",
    estrelas: 4,
  },
  {
    nome: "Luz para o Saber",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    estrelas: 5,
  },
  {
    nome: "Futebol de Rua",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    estrelas: 5,
  },
  {
    nome: "Raízes do Amanhã",
    img: "https://conexaoplaneta.com.br/wp-content/uploads/2019/07/etiopia-plantio-arvores-conexao-planeta.jpg",
    estrelas: 5,
  },
  {
    nome: "Laço Rosa Livre",
    img: "https://cimcentral.com.br/arquivo/651afdd1c1bb5.jpg",
    estrelas: 5,
  },
];

function renderStars(qtd: number) {
  return (
    <span className={styles.stars}>
      {"★".repeat(qtd)}
      {"☆".repeat(5 - qtd)}
    </span>
  );
}

export default function HomeDonor() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const categories = [
    "Animais",
    "Causas Sociais",
    "Ajuda Humanitária",
    "Educação",
    "Meio Ambiente",
    "Saúde",
  ];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.container}>
      {/* Barra de busca */}
      <div className={styles.top}>
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            className={styles.search}
            placeholder="SOS Gatinho"
          />
        </div>
        <div className={styles.filterWrapper} ref={filterRef}>
          <button
            className={styles.filterButton}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filtrar{" "}
            <span className={styles.arrow}>{showFilters ? "▲" : "▼"}</span>
          </button>

          {showFilters && (
            <div className={styles.filterDropdown}>
              {categories.map((category) => (
                <div
                  key={category}
                  className={styles.filterOption}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MAIS PRÓXIMAS DE VOCÊ */}
      <div>
        <div className={styles.nearyouong}>
          <h1>Mais Próximas de Você</h1>
        </div>
        <div className={styles.cards}>
          {ongs.map((ong, idx) => (
            <div className={styles.card} key={idx}>
              <img src={ong.img} alt={ong.nome} className={styles.cardImg} />
              <p className={styles.cardTitle}>{ong.nome}</p>
              {renderStars(ong.estrelas ?? 4)}

              <Link href="/donor/ong" className={styles.cardButton}>
                Doar
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* MELHOR AVALIAÇÃO */}
      <div>
        <div className={styles.nearyouong}>
          <h1>Melhor Avaliação</h1>
        </div>
        <div className={styles.cards}>
          {melhores.map((ong, idx) => (
            <div className={styles.card} key={idx}>
              <img src={ong.img} alt={ong.nome} className={styles.cardImg} />
              <p className={styles.cardTitle}>{ong.nome}</p>
              {renderStars(ong.estrelas ?? 4)}

              <Link href="/donation" className={styles.cardButton}>
                Doar
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
