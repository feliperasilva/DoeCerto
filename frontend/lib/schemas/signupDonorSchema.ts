import { z } from "zod";

export const signupDonorSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(5, "O nome deve ter no mínimo 5 caracteres")
      .max(25, "O nome deve ter no máximo 25 caracteres"),
    email: z
      .string()
      .trim()
      .min(5, "O email deve ter no mínimo 5 caracteres")
      .email("Formato de email inválido"),
    password: z
      .string()
      .trim()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(/[A-Z]/, "A senha deve conter letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter letra minúscula")
      .regex(/[0-9]/, "A senha deve conter um número"),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
  });

export type SignupDonorSchema = z.infer<typeof signupDonorSchema>;
