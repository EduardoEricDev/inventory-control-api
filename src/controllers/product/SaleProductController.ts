import { Request, Response } from "express";
import { SaleProductService } from "../../services/product/SaleProductService";
import { SaleProductSchema } from "../../schemas/product/SaleProductSchema";

class SaleProductController {
    async handle(req: Request, res: Response) {
        const { product_id } = req.params;

        const { amount } = SaleProductSchema.parse({
            ...req.body,
            product_id
        });

        const saleProductService = new SaleProductService();
        const productSale = await saleProductService.execute({ product_id, amount });

        return res.json(productSale);
    }
}

export { SaleProductController };