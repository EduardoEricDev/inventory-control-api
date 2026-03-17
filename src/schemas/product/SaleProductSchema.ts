import { z } from "zod";

export const SaleProductSchema = z.object({
    product_id: z.uuid("ID de produto inválido"),
    amount: z.number().positive("A quantidade deve ser maior que zero"),
});