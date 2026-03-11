import { email, z } from "zod";

export const AuthUserSchema = z.object({
	email: z.email("Email inválido"),
	password: z.string().min(1, "Senha inválida"),
});

export type AuthRequest = z.infer<typeof AuthUserSchema>;
