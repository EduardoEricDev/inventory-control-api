import { Request, Response } from "express";
import { DetailProductService } from "../../services/product/DetailProductService";
import { DetailProductSchema } from "../../schemas";

class DetailProductController {
    async handle(req: Request, res: Response) {
        const { product_id } = DetailProductSchema.parse(req.params);
        const detailProductService = new DetailProductService();
        const product = await detailProductService.execute({product_id});

        return res.json(product);
    }
}

export { DetailProductController };