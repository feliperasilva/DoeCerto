"use client";

import { useState } from "react";
import axios from "axios";
import { Input, InputPassword, Button } from "@/components";
import type { SignupNgoFormData } from "@/types";
import styles from "./forms.module.css";

export default function SignupOngForm() {
  const [formData, setFormData] = useState<SignupNgoFormData>({
    name: "",
    cnpj: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Endpoint a implementar
      const response = await axios.post("/api/auth/signup/ong", formData);
      console.log("Cadastro ONG:", response.data);
    } catch (error) {
      console.error("Erro no cadastro da ONG:", error);
    }
  };

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit}>
      <Input
        id="ong-name"
        name="name"
        label="Nome da ONG"
        type="text"
        autoComplete="organization"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        id="ong-cnpj"
        name="cnpj"
        label="CNPJ"
        type="cnpj"
        autoComplete="off"
        value={formData.cnpj}
        onChange={handleChange}
        required
      />
      <Input
        id="ong-email"
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputPassword
        id="ong-password"
        name="password"
        label="Senha"
        autoComplete="new-password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <InputPassword
        id="ong-confirm-password"
        name="confirmPassword"
        label="Confirmar Senha"
        autoComplete="new-password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <Button className={styles.signupButton} size="fullWidth" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
