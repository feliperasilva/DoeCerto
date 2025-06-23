"use client";

import { useState } from "react";
import axios from "axios";
import { Input, InputPassword, Button } from "@/components";
import { signupDonorSchema, SignupDonorSchema } from "@/lib";
import styles from "./forms.module.css";

export default function SignupDonorForm() {
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

    // Validação em tempo real
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
      const response = await axios.post("/api/auth/signup/donor", formData);
      console.log("Cadastro Doador:", response.data);
    } catch (error) {
      console.error("Erro no cadastro do doador:", error);
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
