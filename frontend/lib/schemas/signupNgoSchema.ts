import { z } from "zod";

export const signupNgoSchema = z
  .object({
    name: z
      .string()
      .min(5, "O nome deve ter no mínimo 5 caracteres")
      .max(50, "O nome deve ter no máximo 50 caracteres"),
    cnpj: z
      .string()
      .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "CNPJ inválido")
      .nonempty("CNPJ é obrigatório"),
    email: z
      .string()
      .min(5, "O email deve ter no mínimo 5 caracteres")
      .max(254, "O email deve ter no máximo 254 caracteres")
      .email("Formato de email inválido"),
    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(/[A-Z]/, "A senha deve conter letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter uma letra minúscula")
      .regex(/[0-9]/, "A senha deve conter um número"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
  });

export type SignupNgoSchema = z.infer<typeof signupNgoSchema>;
