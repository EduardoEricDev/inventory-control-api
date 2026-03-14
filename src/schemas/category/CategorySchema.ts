import { z } from "zod";

export const CreateCategorySchema = z.object({
	name: z.string().min(1, "Nome inválido"),
});