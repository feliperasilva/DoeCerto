"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import api from "@/services/api"; // usa instância com baseURL configurada
import { Input, InputPassword, Checkbox, Button } from "@/components";
import { loginSchema, type LoginSchema } from "@/lib";
import styles from "./forms.module.css";
import axios from "axios";

export default function LoginForm() {
  const router = useRouter();
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        {
          don_email: data.email,
          don_password: data.password,
        }
      );

      // 3. Redireciona se tudo estiver certo
      if (response.data.ok) {
        setAuthError(null);
        router.push("/home");
      } else {
        setAuthError("Erro ao autenticar. Tente novamente.");
      }
    } catch (error: any) {
      console.error("Erro no login:", error);
      const msg =
        error.response?.data?.error ===
        "The provided credentials are incorrect."
          ? "Credenciais inválidas. Verifique seu email e senha."
          : "Erro inesperado ao fazer login.";
      setAuthError(msg);
    }
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {authError && <p className={styles.authError}>{authError}</p>}

      <Input
        id="login-email"
        label="Email"
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <InputPassword
        id="login-password"
        label="Senha"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register("password")}
      />

      <div className={styles.checkboxAndLinkWrapper}>
        <Checkbox
          label="Lembrar-me"
          id="remember-me"
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
