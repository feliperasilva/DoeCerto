import { Input } from "@/components";
import styles from "./LoginCard.module.css";

export default function LoginCard() {
  return (
    <div className={styles.loginCardContainer}>
      <div className={styles.loginFormWrapper}>
        <h2 className={styles.loginTitle}>Entrar Agora</h2>
        <form className={styles.loginForm}>
          <Input
            type="email"
            placeholder="Email"
            className={styles.loginInput}
          />
          <Input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
          />
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
      <div className={styles.cadastroWrapper}>
        <p className={styles.cadastroMessage}>Não tem uma conta? <br /> Cadastre-se agora!</p>
        <button className={styles.cadastroButton}>Cadastre-se</button>
      </div>
    </div>
  );
}