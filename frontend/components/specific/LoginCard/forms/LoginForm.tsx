"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Input, InputPassword, Checkbox, Button } from "@/components";
import { loginSchema, type LoginSchema } from "@/lib";
import styles from "./forms.module.css";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    console.log("Dados validados:", data);
    // Aqui no futuro você chama a API real de login
    // const response = await axios.post("/api/auth/login", data);
    // console.log("Usuário autenticado:", response.data);
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
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
