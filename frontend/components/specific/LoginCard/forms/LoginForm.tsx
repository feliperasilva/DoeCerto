"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input, InputPassword, Checkbox, Button } from "@/components";
import { loginSchema, type LoginSchema } from "@/lib";
import AuthService from "@/lib/auth";
import styles from "./forms.module.css";

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
      setAuthError(null);

      const res = await AuthService.loginAuto({
        email: data.email,
        password: data.password,
      });

      if (res.role === "donor") router.push("/donor/home");
      else if (res.role === "ong") router.push("/ong/home");
      else if (res.role === "admin") router.push("/admin/dashboard");
      else setAuthError("Role desconhecida.");

    } catch (error: any) {
      setAuthError(error || "Erro inesperado ao fazer login.");
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
