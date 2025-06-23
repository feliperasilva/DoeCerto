"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, ToggleUser, Logo } from "@/components";
import { LoginForm, SignupDonorForm, SignupOngForm } from "./forms";
import type { UserType } from "@/types";
import styles from "./LoginCard.module.css";

type PanelState = "initial" | "signup-donor" | "signup-ong";

export default function LoginCard() {
  const [panelState, setPanelState] = useState<PanelState>("initial");
  const [selectedUser, setSelectedUser] = useState<UserType>("donor");

  const handleSignupClick = () => {
    setPanelState(selectedUser === "donor" ? "signup-donor" : "signup-ong");
  };

  const handleBack = () => {
    setPanelState("initial");
  };

  return (
    <div className={styles.loginCardContainer}>
      {/* Panel 1: Login (agora desmontável) */}
      <AnimatePresence mode="wait">
        {panelState === "initial" && (
          <motion.div
            key="loginPanel"
            className={`${styles.panel} ${styles.panel1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.panelContent}>
              <h1 className={styles.loginTitle}>Entrar Agora</h1>
              <LoginForm />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel 2: Seletor / Retorno */}
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

      {/* Panel 3: Cadastro */}
      <AnimatePresence mode="wait">
        {(panelState === "signup-donor" || panelState === "signup-ong") && (
          <motion.div
            key={panelState}
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
              {panelState === "signup-donor" ? (
                <SignupDonorForm />
              ) : (
                <SignupOngForm />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
