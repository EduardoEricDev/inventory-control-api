import { z } from "zod";

export const EditCategorySchema = z.object({
    name: z.string().min(1, "Nome inválido"),
    category_id: z.uuid("Id inválido"),
});