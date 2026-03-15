import z from "zod";

export const ListProductByCategoryIdSchema = z.object({
    category_id: z.uuid("Id de categoria inválido!").optional(),
});