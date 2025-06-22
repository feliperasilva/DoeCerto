import { z } from "zod";

export const signupNgoSchema = z
  .object({
    name: z.string().nonempty("Nome da NGO é obrigatório"),
    cnpj: z
      .string()
      .nonempty("CNPJ é obrigatório")
      .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, "CNPJ inválido"),
    email: z.string().nonempty("Email é obrigatório").email("Email inválido"),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha deve ter no mínimo 8 caracteres"),
    confirmPassword: z.string().nonempty("Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type SignupNgoSchema = z.infer<typeof signupNgoSchema>;
