import { Request, Response } from "express";
import { DetailCategoryService } from "../../services/category/DetailCategoryService";
import { DetailCategorySchema } from "../../schemas";

class DetailCategoryController {
    async handle(req: Request, res: Response) {
        const {category_id} = DetailCategorySchema.parse(req.params);
        const detailCategoryService = new DetailCategoryService();
        const category = await detailCategoryService.execute({category_id});

        return res.json(category);
    }
}

export { DetailCategoryController };