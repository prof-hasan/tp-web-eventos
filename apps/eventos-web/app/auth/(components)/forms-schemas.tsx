import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const signupSchema = z.object({
  name: z.string(),
  email: z.string({
    message: "Email inválido",
  }).email(),
  password: z.string({
    message: "Senha deve ter no mínimo 6 caracteres",
  }).min(6),
});