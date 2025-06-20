"use client";

import { useState } from "react";
import { Input, Checkbox, Button } from "@/components";
import styles from "./LoginCard.module.css";

export default function LoginCard() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.loginCardContainer}>
      <div className={styles.loginFormWrapper}>
        <h2 className={styles.loginTitle}>Entrar Agora</h2>
        <form className={styles.loginForm}>
          <Input
            label="Email"
            type="email"
            className={styles.loginInput}
          />
          <Input
            label="Senha"
            type="password"
            className={styles.loginInput}
          />
          <div className={styles.checkboxAndLinkWrapper}>
            <Checkbox
              label="Lembrar-me"
              className={styles.rememberMeCheckbox}
              onChange={() => setIsChecked(!isChecked)}
              checked={isChecked}
            />
            <a href="#" className={styles.forgotPasswordLink}>Esqueceu sua senha?</a>
          </div>
          <Button className={styles.loginButton}>Entrar</Button>
        </form>
      </div>
      <div className={styles.cadastroWrapper}>
        <p className={styles.cadastroMessage}>Não tem uma conta? <br /> Cadastre-se agora!</p>
        <button className={styles.cadastroButton}>Cadastre-se</button>
      </div>
    </div>
  );
}
