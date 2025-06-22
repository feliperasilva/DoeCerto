"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Input, InputPassword, Checkbox, Button } from "@/components";
import type { LoginFormData } from "@/types";
import { loginSchema } from "@/lib/schemas/loginSchema";
import styles from "./forms.module.css";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post("/api/auth/login", data);
      console.log("Usuário autenticado:", response.data);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const rememberMeValue = useWatch({ name: "rememberMe", control });

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="login-email"
        label="Email"
        type="email"
        autoComplete="email"
        {...register("email")}
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <InputPassword
        id="login-password"
        label="Senha"
        autoComplete="current-password"
        {...register("password")}
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}

      <div className={styles.checkboxAndLinkWrapper}>
        <Checkbox
          label="Lembrar-me"
          id="remember-me"
          checked={!!rememberMeValue}
          {...register("rememberMe")}
        />
        <a className={styles.forgotPasswordLink} href="#">
          Esqueceu sua senha?
        </a>
      </div>

      <Button size="fullWidth" type="submit">
        Entrar
      </Button>
    </form>
  );
}
