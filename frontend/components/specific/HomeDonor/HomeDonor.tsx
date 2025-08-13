"use client";
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import styles from "./HomeDonor.module.css";
import OngCard from "@/components/specific/OngCard";

const usuario = {
  nome: "Guistoso123",
  foto: "https://randomuser.me/api/portraits/men/32.jpg",
};

const ongs = [
  {
    nome: "SOS Gatinho",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    
  },
  {
    nome: "Vozes da Terra",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    
  },
  {
    nome: "Laços de Esperança",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    
  },
  {
    nome: "Casa Viva",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    
  },
  {
    nome: "Mar Azul",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    
  },
  {
    nome: "TecnoSocial",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    
  },
  {
    nome: "Mãos que Ajudam",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    
  },
];

const melhores = [
  {
    nome: "Caminhos Livres",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    estrelas: 5,
  },
  {
    nome: "Tecendo Futuros",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    estrelas: 5,
  },
  {
    nome: "Rede Horizonte Azul",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    estrelas: 4,
  },
  {
    nome: "Luz para o Saber",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    estrelas: 5,
  },
  {
    nome: "Futebol de Rua",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    estrelas: 5,
  },
  {
    nome: "Raízes do Amanhã",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    estrelas: 5,
  },
  {
    nome: "Laço Rosa Livre",
    img: "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg",
    estrelas: 5,
  },
];

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
            Filtrar <span className={styles.arrow}>{showFilters ? "▲" : "▼"}</span>
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
            <OngCard
              key={idx}
              imagem={ong.img}
              nome={ong.nome} />
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
            <OngCard
              key={idx}
              imagem={ong.img}
              nome={ong.nome}
              nota={ong.estrelas ?? 4} />
          ))}
        </div>
      </div>
    </div>
  );
}
