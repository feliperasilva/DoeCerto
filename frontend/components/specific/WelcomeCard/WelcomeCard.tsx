import React from "react";
import styles from "./WelcomeCard.module.css";
import Image from "next/image";
import { Button } from "@/components";

export default function WelcomeCard() {
  return (
    <div className={styles.welcomeCard}>
      <div className={styles.welcomeCardImage}>
        <Image
          src="/welcomedonate.svg"
          alt="Welcome"
          width={500}
          height={500}
          className={styles.welcomeCardImageIcon}
          priority
        />
      </div>
      <div className={styles.welcomeCardContent}>
        <div className={styles.welcomeCardContentWrapper}>
          <h1 className={styles.welcomeCardTitle}>
            Seja bem-vindo ao{" "}
            <span className={styles.welcomeCardTitleEmphasized}>DoeCerto</span>!
          </h1>
          <p className={styles.welcomeCardDescription}>
            {" "}
            Junte-se ao DoeCerto e transforme solidariedade em ação: conecte-se
            com ONGs confiáveis, encontre causas que fazem sentido para você e
            faça sua doação de forma rápida, segura e personalizada. Doe no seu
            tempo, do seu jeito, e faça a diferença hoje mesmo!{" "}
          </p>
          <Button
            href="/login"
            size="medium"
            className={styles.welcomeCardButton}
          >
            Começar
          </Button>
        </div>
      </div>
    </div>
  );
}
