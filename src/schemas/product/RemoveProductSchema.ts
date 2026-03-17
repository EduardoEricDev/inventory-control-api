import z from "zod";

export const RemoveProductSchema = z.object({
    product_id: z.uuid("ID de produto inválido!"),
});