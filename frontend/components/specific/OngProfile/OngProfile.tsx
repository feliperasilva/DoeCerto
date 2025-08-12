import React from "react";
import styles from "./OngProfile.module.css";
import StarRating from "../../StarRating";
import { FaHeart, FaMoneyCheckAlt, FaGift } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { IoReturnUpBackOutline } from "react-icons/io5";

export default function SosGatinho() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="" alt="Gato" />
        <div className={styles.headercontent}>
          <h1>
            SOS Gatinho <span className={styles.verified}></span>
          </h1>
          <div className={styles.rating}>
            {" "}
            title="4.0 Muito boa"
            <span className="filled">&#9733;</span>
            <span className="filled">&#9733;</span>
            <span className="filled">&#9733;</span>
            <span className="filled">&#9733;</span>
            <span>&#9733;</span>
          </div>
          <small>4.0 Muito boa</small>
        </div>
        <button className={styles.btn_edit}>Editar ✏️</button>
      </header>

      <section className={styles.sectionAbout}>
        <div className={styles.about_text}>
          <h3>Sobre a ONG</h3>
          <p>
            A ONG é dedicada a amparar e transformar a vida dos animais em
            situação de vulnerabilidade, fornecem lar temporário, até que eles
            estejam em boa saúde para que sejam o processo de adoção
          </p>
        </div>
      </section>

      <section className={styles.sectioncategories}>
        <span className={styles.highlight}>Proteção Animal</span>
        <span>Saúde</span>
        <span>Combate à Fome</span>
        <span>Educação</span>
        <span>Meio Ambiente</span>
      </section>

      <section className={styles.sectioncontacts}>
        <div>
          <strong>Email:</strong>
          <br />
          SOSGatinhos@gmail.com
        </div>
        <div>
          <strong>Telefone:</strong>
          <br />
          +55 81 91234-5678
        </div>
        <div>
          <strong>Localização:</strong>
          <br />
          SOSGatinhos@gmail.com
        </div>
      </section>

      <section
        className={styles.sectionaccounts_items}
        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        <div className={styles.accounts}>
          <h2>Contas Adicionadas</h2>
          <p>
            <b>Banco:</b> Banco do Brasil
          </p>
          <p>
            <b>Agência:</b> 4364-8
          </p>
          <p>
            <b>Conta:</b> 85448-5
          </p>
        </div>

        <div className={styles.items_interest_box}>
          <h2>Itens de interesse</h2>
          <p>
            <b>Ração</b>
          </p>
          <p>
            <b>Coleira</b>
          </p>
          <p>
            <b>Material de limpeza</b>
          </p>
          <p>
            <b>Papel higiênico</b>
          </p>
        </div>
      </section>

      <section className={styles.sectiondonations_table}>
        <table className={styles.tabela}>
          <thead>
            <tr className={styles.cabecalho}>
              <th className={styles.linha}>Nome</th>
              <th className={styles.linha}>Data</th>
              <th className={styles.linha}>Tipo</th>
              <th className={styles.linha}>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.cabecalho}>
              <td className={styles.lt}>Paulo Ricardo</td>
              <td className={styles.lt}>16/04/2024</td>
              <td className={styles.lt}>Dinheiro</td>
              <td className={styles.lt}>R$ 3000,00</td>
            </tr>
            <tr className={styles.cabecalho}>
              <td className={styles.lt}>Ryon Xavier</td>
              <td className={styles.lt}>16/04/2024</td>
              <td className={styles.lt}>Ração</td>
              <td className={styles.lt}>10.000 KG</td>
            </tr>
            <tr className={styles.cabecalho}>
              <td className={styles.lt}>Marcos Vinicius</td>
              <td className={styles.lt}>16/04/2024</td>
              <td className={styles.lt}>Dinheiro</td>
              <td className={styles.lt}>R$ 1.000,00</td>
            </tr>
            <tr className={styles.cabecalho}>
              <td className={styles.lt}>Felipe Romero</td>
              <td className={styles.lt}>16/04/2024</td>
              <td className={styles.lt}>Ração</td>
              <td className={styles.lt}>100 KG</td>
            </tr>
            <tr className={styles.cabecalho}>
              <td className={styles.lt}>Weydson Lino</td>
              <td className={styles.lt}>16/04/2024</td>
              <td className={styles.lt}>Coleira</td>
              <td className={styles.lt}>1 unidade</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
