// @/lib/schemas/loginSchema.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("Email é obrigatório").email("Email inválido"),
  password: z.string().nonempty("Senha é obrigatória"),
  rememberMe: z.boolean().optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
