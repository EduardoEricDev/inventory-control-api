import { Request, Response } from "express";
import { ListProductByCategoryIdService } from "../../services/product/ListProductByCategoryId";
import { ListProductByCategoryIdSchema } from "../../schemas";

class ListProductByCategoryIdController {
    async handle(req: Request, res: Response) {        
        const {category_id}  = ListProductByCategoryIdSchema.parse(req.query);
        const listProductByCategoryIdService = new ListProductByCategoryIdService();
        const products = await listProductByCategoryIdService.execute({category_id: category_id as string});

        return res.json(products);
    }
}

export { ListProductByCategoryIdController };