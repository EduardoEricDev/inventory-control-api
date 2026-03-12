import { z } from "zod";

export const CreateCategorySchema = z.object({
	name: z.string().min(1, "Nome inválido"),
});

export type CategoryRequest = z.infer<typeof CreateCategorySchema>;