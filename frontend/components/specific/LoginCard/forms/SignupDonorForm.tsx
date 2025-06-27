"use client";

import { useState } from "react";
import { Input, InputPassword, Button } from "@/components";
import { signupDonorSchema, SignupDonorSchema } from "@/lib";
import styles from "./forms.module.css";
import axios from "axios";

type SignupDonorFormProps = {
  onSuccess: () => void;
};

export default function SignupDonorForm({ onSuccess }: SignupDonorFormProps) {
  const [formData, setFormData] = useState<SignupDonorSchema>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof SignupDonorSchema, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const partialData = { ...formData, [name]: value };
    const result = signupDonorSchema.safeParse(partialData);

    if (!result.success) {
      const issue = result.error.issues.find((i) => i.path[0] === name);
      setFormErrors((prev) => ({ ...prev, [name]: issue?.message }));
    } else {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = signupDonorSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: typeof formErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof SignupDonorSchema;
        newErrors[field] = issue.message;
      });
      setFormErrors(newErrors);
      return;
    }

    try {
      const payload = {
        don_name: formData.name,
        don_email: formData.email,
        don_password: formData.password,
        don_password_confirmation: formData.confirmPassword, // necessário para o Laravel
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/donor/register",
        payload
      );
      console.log("Cadastro Doador:", response.data);
      onSuccess();
    } catch (error: any) {
      if (error.response?.data?.errors) {
        const serverErrors = error.response.data.errors;
        const formattedErrors: typeof formErrors = {};

        Object.keys(serverErrors).forEach((field) => {
          if (field === "don_email") {
            formattedErrors.email = "Este e-mail já está em uso.";
          } else if (field === "don_password") {
            formattedErrors.password = serverErrors[field][0];
          } else if (field === "don_name") {
            formattedErrors.name = serverErrors[field][0];
          }
        });

        setFormErrors(formattedErrors);
      } else {
        console.error("Erro inesperado:", error);
      }
    }
  };

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit} noValidate>
      <Input
        id="donor-name"
        name="name"
        label="Nome"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={formErrors.name}
      />
      <Input
        id="donor-email"
        name="email"
        label="Email"
        type="text"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
      />
      <InputPassword
        id="donor-password"
        name="password"
        label="Senha"
        value={formData.password}
        onChange={handleChange}
        error={formErrors.password}
      />
      <InputPassword
        id="donor-confirm-password"
        name="confirmPassword"
        label="Confirmar Senha"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={formErrors.confirmPassword}
      />
      <Button className={styles.signupButton} size="fullWidth" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
