import { Search } from "lucide-react";
import styles from "./HomeDonor.module.css";

export default function HomeDonor() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            className={styles.search}
            placeholder="SOS Gatinho"
          />
        </div>
        <button className={styles.filterButton}>
          Filtrar <span className={styles.arrow}>▼</span>
        </button>
      </div>
    </div>
  );
}
