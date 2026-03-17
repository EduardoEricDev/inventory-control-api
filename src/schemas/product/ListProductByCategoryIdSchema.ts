import z from "zod";

export const ListProductByCategoryIdSchema = z.object({
    category_id: z.uuid("ID de categoria inválido!").optional(),
});