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

    const partialData = { ...formData, [name]: value };
    const result = signupNgoSchema.safeParse(partialData);

    if (!result.success) {
      const issue = result.error.issues.find((i) => i.path[0] === name);
      setFormErrors((prev) => ({ ...prev, [name]: issue?.message || "" }));
    } else {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = signupNgoSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: typeof formErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof SignupNgoSchema;
        newErrors[field] = issue.message;
      });
      setFormErrors(newErrors);
      return;
    }

    try {
      const payload = {
        ong_name: formData.name,
        ong_email: formData.email,
        ong_password: formData.password,
        ong_password_confirmation: formData.confirmPassword,
        ong_cnpj: formData.cnpj,
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/api/ongs", // <-- Rota correta do OngController
        payload
      );

      console.log("Cadastro ONG:", response.data);

      // Reset do formulário
      setFormData({
        name: "",
        cnpj: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setFormErrors({});
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        const backendErrors = error.response.data.errors;

        const newErrors: typeof formErrors = {};
        Object.keys(backendErrors).forEach((field) => {
          const frontendField =
            field === "ong_password_confirmation"
              ? "confirmPassword"
              : field === "ong_password"
              ? "password"
              : field === "ong_email"
              ? "email"
              : field === "ong_name"
              ? "name"
              : field === "ong_cnpj"
              ? "cnpj"
              : (field as keyof SignupNgoSchema);

          newErrors[frontendField as keyof SignupNgoSchema] =
            backendErrors[field][0];
        });

        setFormErrors(newErrors);
      } else {
        console.error("Erro inesperado no cadastro da ONG:", error);
      }
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
