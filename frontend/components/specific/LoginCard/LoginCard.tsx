"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Input,
  Checkbox,
  Button,
  InputPassword,
  ToggleUser,
  Logo,
} from "@/components";
import type { UserType } from "@/types";
import styles from "./LoginCard.module.css";

type PanelState = "initial" | "signup-donor" | "signup-ong";

export default function LoginCard() {
  const [panelState, setPanelState] = useState<PanelState>("initial");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserType>("donor");

  const handleSignupClick = () => {
    if (selectedUser === "donor") {
      setPanelState("signup-donor");
    } else {
      setPanelState("signup-ong");
    }
  };

  const handleBack = () => {
    setPanelState("initial");
  };

  return (
    <div className={styles.loginCardContainer}>
      {/* c1: LOGIN */}
      <motion.div
        className={`${styles.panel} ${styles.panel1}`}
        animate={{
          x: panelState === "initial" ? "0%" : "-10%",
          zIndex: panelState === "initial" ? 2 : 0,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
      >
        <div className={styles.panelContent}>
          <h1 className={styles.loginTitle}>Entrar Agora</h1>
          <form className={styles.loginForm}>
            <Input id="login-email" label="Email" type="email" />
            <InputPassword id="login-password" label="Senha" />
            <div className={styles.checkboxAndLinkWrapper}>
              <Checkbox
                label="Lembrar-me"
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
              />
              <a href="#" className={styles.forgotPasswordLink}>
                Esqueceu sua senha?
              </a>
            </div>
            <Button size="fullWidth">Entrar</Button>
          </form>
        </div>
      </motion.div>

      {/* c2: SELETOR ou LOGIN NOVO + BOTÃO VOLTAR */}
      <motion.div
        className={`${styles.panel} ${styles.panel2}`}
        animate={{
          x: panelState === "initial" ? "0%" : "-100%",
          zIndex: 3,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
      >
        <AnimatePresence mode="wait">
          {panelState === "initial" ? (
            <motion.div
              key="selector"
              className={styles.panelContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className={styles.signupTitle}>Novo por aqui?</h1>
              <p className={styles.signupMessage}>
                Cadastre-se como ONG ou Doador!
              </p>

              <ToggleUser
                selected={selectedUser}
                setSelected={setSelectedUser}
              />

              <p className={styles.signupToggleMessage}>
                {selectedUser === "donor"
                  ? "Como doador, você pode contribuir para diversas causas e acompanhar o impacto de suas doações."
                  : "Como ONG, você pode cadastrar projetos, receber doações e mostrar o impacto do seu trabalho."}
              </p>

              <Button
                className={styles.signupButton}
                size="fullWidth"
                variant="secondary"
                onClick={handleSignupClick}
              >
                Cadastre-se
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="loginNew"
              className={styles.panelContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className={styles.signupTitle}>Já tem conta?</h1>
              <p className={styles.signupMessage}>
                Conecte-se agora e acompanhe suas ações e impacto positivo.
              </p>
              <Logo type="secondary" />
              <Button
                className={styles.switchButton}
                variant="secondary"
                size="fullWidth"
                onClick={handleBack}
              >
                Fazer Login
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* c3: CADASTRO (monta e desmonta) */}
      <AnimatePresence>
        {(panelState === "signup-donor" || panelState === "signup-ong") && (
          <motion.div
            className={`${styles.panel} ${styles.panel3}`}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
          >
            <div className={styles.panelContent}>
              <h1 className={styles.loginTitle}>
                {panelState === "signup-donor"
                  ? "Cadastro Doador"
                  : "Cadastro ONG"}
              </h1>
              <form className={styles.signupForm}>
                {panelState === "signup-donor" ? (
                  <>
                    <Input id="donor-name" label="Nome" type="text" />
                    <Input id="donor-email" label="Email" type="email" />
                    <InputPassword id="donor-password" label="Senha" />
                    <Input
                      id="donor-confirm-password"
                      type="password"
                      label="Confirmar Senha"
                    />
                  </>
                ) : (
                  <>
                    <Input id="ong-name" label="Nome da ONG" type="text" />
                    <Input id="ong-cnpj" label="CNPJ" type="cnpj" />
                    <Input id="ong-email" label="Email" type="email" />
                    <InputPassword id="ong-password" label="Senha" />
                    <Input
                      id="ong-confirm-password"
                      label="Confirmar Senha"
                      type="password"
                    />
                  </>
                )}
                <Button size="fullWidth" className={styles.sgupButton}>
                  Cadastrar
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
