import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaEdit, FaStar, FaRegStar } from 'react-icons/fa';
import styles from './OngProfile.module.css';

const OngProfile = () => {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <div className={styles.header}>
        <div className={styles.profileInfo}>
          <img src="/gatinho.jpg" alt="Foto do gato" className={styles.profileImage} />
          <div>
            <h1 className={styles.title}>
              SOS Gatinho <span className={styles.verificado}>✔</span>
            </h1>
            <p className={styles.ratingLabel}>Avaliações</p>
            <div className={styles.rating}>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              <span className={styles.ratingText}>4.0 Muito boa</span>
            </div>
          </div>
        </div>
        <button className={styles.editButton}>
          <strong>Editar</strong> <FaEdit />
        </button>
      </div>

      {/* Sobre a ONG */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Sobre a ONG</h2>
        <p>
          A ONG é dedicada a amparar e transformar a vida dos animais em situação de vulnerabilidade,
          fornecendo lar temporário até que eles estejam em boa saúde para passar pelo processo de adoção.
        </p>
      </div>

      {/* Contato */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Contato</h2>
        <p className={styles.contactItem}><FaEnvelope /> SOSGatinho@gmail.com</p>
        <p className={styles.contactItem}><FaPhoneAlt /> +55 81 91234-5678</p>
        <p className={styles.contactItem}><FaMapMarkerAlt /> Recife, PE</p>
      </div>

      {/* Categorias */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Categoria</h2>
        <div className={styles.categories}>
          <span>Proteção Animal</span>
          <span>Saúde</span>
          <span>Combate à Fome</span>
          <span>Educação</span>
          <span>Meio Ambiente</span>
        </div>
      </div>

      {/* Contas e Itens */}
      <div className={styles.row}>
        <div className={styles.boxPurple}>
          <h2>Contas Adicionadas</h2>
          <div className={styles.innerWhite}>
            <p><strong>Banco:</strong> Banco do Brasil</p>
            <p><strong>Agência:</strong> 4364-8</p>
            <p><strong>Conta:</strong> 85448-5</p>
          </div>
        </div>

        <div className={styles.boxPurple}>
          <h2>Itens de interesse</h2>
          <div className={styles.innerWhite}>
            <p>Ração</p>
            <p>Coleira</p>
            <p>Material de limpeza</p>
            <p>Papel higiênico</p>
          </div>
        </div>
      </div>

      {/* Doações */}
      <div className={styles.tableContainer}>
      
        <div className={styles.tableWrapper}>
          <table className={styles.donationTable}>
            <thead>
              <tr>
                <th className={styles.thPurple}>Nome</th>
                <th className={styles.thPurple}>Data</th>
                <th className={styles.thPurple}>Tipo</th>
                <th className={styles.thPurple}>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paulo Ricardo</td>
                <td>16/04/2024</td>
                <td>Dinheiro</td>
                <td>R$ 3.000,00</td>
              </tr>
              <tr>
                <td>Ryan Xavier</td>
                <td>16/04/2024</td>
                <td>Ração</td>
                <td>10.000 KG</td>
              </tr>
              <tr>
                <td>Marcos Vinicius</td>
                <td>16/04/2024</td>
                <td>Dinheiro</td>
                <td>R$ 1.000,00</td>
              </tr>
              <tr>
                <td>Felipe Romero</td>
                <td>16/04/2024</td>
                <td>Ração</td>
                <td>100 KG</td>
              </tr>
              <tr>
                <td>Weydson Lino</td>
                <td>16/04/2024</td>
                <td>Coleira</td>
                <td>1 unidade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OngProfile;
