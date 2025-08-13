"use client";
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import styles from "./HomeDonor.module.css";
import OngCard from "@/components/specific/OngCard";

export default function HomeDonor() {
  const [ongs, setOngs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
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

  const defaultImage =
    "https://outraspalavras.net/wp-content/uploads/2024/10/WhatsApp-Image-2021-09-18-at-10.38.48.jpeg";

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ongs`);
        if (!res.ok) throw new Error("Erro ao buscar ONGs");
        const data = await res.json();
        setOngs(data);
      } catch (error) {
        console.error("Erro ao buscar ONGs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOngs();
  }, []);

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

  if (loading) {
    return <div className={styles.container}>Carregando ONGs...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Barra de busca */}
      <div className={styles.top}>
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            className={styles.search}
            placeholder="Buscar ONG..."
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
              imagem={ong.ong_image ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${ong.ong_image}` : defaultImage}
              nome={ong.ong_name}
            />
          ))}
        </div>
      </div>

      {/* MELHOR AVALIAÇÃO (mesmo conteúdo por enquanto) */}
      <div>
        <div className={styles.nearyouong}>
          <h1>Melhor Avaliação</h1>
        </div>
        <div className={styles.cards}>
          {ongs.map((ong, idx) => (
            <OngCard
              key={idx}
              imagem={ong.ong_image ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${ong.ong_image}` : defaultImage}
              nome={ong.ong_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
