import z from "zod";

export const DetailProductSchema = z.object({
    product_id: z.uuid("ID de produto inválido!"),
});