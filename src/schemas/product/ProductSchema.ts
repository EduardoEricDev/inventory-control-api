import { z } from "zod";

export const CreateProductSchema = z.object({
	name: z.string().min(1, "O nome do produto é obrigatório"),
	price: z.string().min(1, "O preço é obrigatório"),
	description: z.string().min(1, "A descrição é obrigatória"),
	category_id: z.uuid("ID de categoria inválido"),
	amount: z.string().min(1, "A quantidade é obrigatória"),
});