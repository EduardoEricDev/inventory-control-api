import { z } from "zod";

export const CreateUserSchema = z.object({
	name: z.string().min(3, "Nome muito curto"),
	email: z.email("Email inválido"),
	password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type UserRequest = z.infer<typeof CreateUserSchema>;