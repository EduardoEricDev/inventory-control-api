import { z } from "zod";

export const EditProductSchema = z.object({
	product_id: z.uuid("ID de produto inválido"),
	name: z.string().min(1, "O nome do produto é obrigatório"),
	price: z.string().min(1, "O preço é obrigatório"),
	description: z.string().min(1, "A descrição é obrigatória"),
	amount: z.string().min(1, "A quantidade é obrigatória"),
	category_id: z.string().uuid("ID de categoria inválido"),
});