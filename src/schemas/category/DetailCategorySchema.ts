import z from "zod";

export const DetailCategorySchema = z.object({
    category_id: z.uuid("Id de categoria inválido"),
});