"use client";

// prettier-ignore
import { Input, Checkbox, Button, InputPassword, ToggleUser } from "@/components";
import { useState } from "react";
import styles from "./LoginCard.module.css";
import type { UserType } from "@/types";

export default function LoginCard() {
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState<UserType>("donor");

  return (
    <div className={styles.loginCardContainer}>
      <div className={styles.loginFormContainer}>
        <div className={styles.loginFormWrapper}>
          <h1 className={styles.loginTitle}>Entrar Agora</h1>
          <form className={styles.loginForm}>
            <Input label="Email" type="email" className={styles.loginInput} />
            <InputPassword label="Senha" className={styles.loginInput} />
            <div className={styles.checkboxAndLinkWrapper}>
              <Checkbox
                label="Lembrar-me"
                className={styles.rememberMeCheckbox}
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
              />
              <a href="#" className={styles.forgotPasswordLink}>
                Esqueceu sua senha?
              </a>
            </div>
            <Button className={styles.loginButton} size="fullWidth">
              Entrar
            </Button>
          </form>
        </div>
      </div>

      <div className={styles.signupContainer}>
        <div className={styles.signupWrapper}>
          <h1 className={styles.signupTitle}>Novo por aqui?</h1>
          <p className={styles.signupMessage}>
            Cadastre-se agora mesmo como ONG ou doador e faca a diferenca!
          </p>

          <ToggleUser selected={selected} setSelected={setSelected} />

          <p className={styles.signupToggleMessage}>
            {selected === "donor"
              ? "Como Doador, você pode contribuir para diversas causas e acompanhar o impacto de suas doações."
              : "Como ONG, você pode cadastrar projetos, receber doações e mostrar o impacto do seu trabalho."}
          </p>

          <Button
            className={styles.signupButton}
            size="fullWidth"
            variant="secondary"
          >
            Cadastre-se
          </Button>
        </div>
      </div>
    </div>
  );
}
