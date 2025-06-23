"use client";

import { useState } from "react";
import axios from "axios";
import { Input, InputPassword, Button } from "@/components";
import { signupNgoSchema, SignupNgoSchema } from "@/lib";
import styles from "./forms.module.css";

export default function SignupOngForm() {
  const [formData, setFormData] = useState<SignupNgoSchema>({
    name: "",
    cnpj: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof SignupNgoSchema, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validação em tempo real: validamos só o campo que mudou, com o form parcial
    const partialData = { ...formData, [name]: value };
    const result = signupNgoSchema.safeParse(partialData);

    if (!result.success) {
      // pega o erro específico do campo que mudou
      const issue = result.error.issues.find((i) => i.path[0] === name);
      setFormErrors((prev) => ({ ...prev, [name]: issue?.message || "" }));
    } else {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Valida tudo antes de enviar
    const result = signupNgoSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: typeof formErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof SignupNgoSchema;
        newErrors[field] = issue.message;
      });
      setFormErrors(newErrors);
      return; // não envia se tiver erro
    }

    try {
      const response = await axios.post("/api/auth/signup/ong", formData);
      console.log("Cadastro ONG:", response.data);
      // aqui você pode resetar o form ou mostrar mensagem de sucesso
    } catch (error) {
      console.error("Erro no cadastro da ONG:", error);
      // pode exibir erro global aqui se quiser
    }
  };

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit} noValidate>
      <Input
        id="ong-name"
        name="name"
        label="Nome"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={formErrors.name}
        required
      />
      <Input
        id="ong-cnpj"
        name="cnpj"
        label="CNPJ"
        inputMask="cnpj"
        placeholder=" "
        value={formData.cnpj}
        onChange={handleChange}
        error={formErrors.cnpj}
        required
      />
      <Input
        id="ong-email"
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
        required
      />
      <InputPassword
        id="ong-password"
        name="password"
        label="Senha"
        value={formData.password}
        onChange={handleChange}
        error={formErrors.password}
        required
      />
      <InputPassword
        id="ong-confirm-password"
        name="confirmPassword"
        label="Confirmar Senha"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={formErrors.confirmPassword}
        required
      />
      <Button className={styles.signupButton} size="fullWidth" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
