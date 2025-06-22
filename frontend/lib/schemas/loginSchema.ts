import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("Email é obrigatório").email("Email inválido"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "Senha deve ter no mínimo 8 caracteres"),
  rememberMe: z
    .string()
    .default("Lembre-me")
    .transform((value) => (value === "true" ? true : false))
    .optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
