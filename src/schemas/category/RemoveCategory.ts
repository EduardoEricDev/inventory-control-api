import { z } from "zod";

export const RemoveCategorySchema = z.object({
	category_id: z.uuid("Id inválido"),
});