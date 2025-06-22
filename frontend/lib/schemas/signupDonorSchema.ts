import { z } from "zod";

export const signupDonorSchema = z
  .object({
    name: z.string().nonempty("Nome é obrigatório"),
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

export type SignupDonorSchema = z.infer<typeof signupDonorSchema>;
