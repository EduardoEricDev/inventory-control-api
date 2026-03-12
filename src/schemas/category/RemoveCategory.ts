import { z } from "zod";

export const RemoveCategorySchema = z.object({
	category_id: z.uuid("Id inválido"),
});

export type RemoveCategoryRequest = z.infer<typeof RemoveCategorySchema>;