import Image from "next/image";
import styles from "./Logo.module.css";

export type LogoProps = {
  type?: "primary" | "secondary";
};

export default function Logo({ type = "primary" }: LogoProps) {
  return (
    <div
      className={[styles.logo, type === "secondary" && styles.logoSecondary]
        .filter(Boolean)
        .join(" ")}
    >
      <Icon type={type} />
      <span className={styles.logoText}>DoeCerto</span>
    </div>
  );
}

function Icon({ type }: { type: LogoProps["type"] }) {
  const src = type === "secondary" ? "/doecertowhite.svg" : "/doecerto.svg";
  const width = type === "secondary" ? 48 : 32;
  const height = type === "secondary" ? 48 : 32;

  return (
    <Image
      src={src}
      alt="Logo DoeCerto"
      width={width}
      height={height}
      priority
      className={styles.image}
    />
  );
}
