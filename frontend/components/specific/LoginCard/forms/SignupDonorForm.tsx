"use client";

import { useState } from "react";
import axios from "axios";
import { Input, InputPassword, Button } from "@/components";
import type { SignupDonorFormData } from "@/types";
import styles from "./forms.module.css";
import { s } from "framer-motion/client";

export default function SignupDonorForm() {
  const [formData, setFormData] = useState<SignupDonorFormData>({
    name: "",
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
      const response = await axios.post("/api/auth/signup/donor", formData);
      console.log("Cadastro Doador:", response.data);
    } catch (error) {
      console.error("Erro no cadastro do doador:", error);
    }
  };

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit}>
      <Input
        id="donor-name"
        name="name"
        label="Nome"
        type="text"
        autoComplete="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        id="donor-email"
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputPassword
        id="donor-password"
        name="password"
        label="Senha"
        autoComplete="new-password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <InputPassword
        id="donor-confirm-password"
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
