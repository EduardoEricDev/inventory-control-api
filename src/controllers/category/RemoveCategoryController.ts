import { Request, Response } from "express";
import { RemoveCategoryService } from "../../services/category/RemoveCategoryService";
import { RemoveCategorySchema } from "../../schemas";

class RemoveCategoryController {
    async handle(req: Request, res: Response) {
        const { category_id } = RemoveCategorySchema.parse({category_id: req.params.category_id});
        const removeCategoryService = new RemoveCategoryService();
        const categoryRemoved = removeCategoryService.execute({category_id});

        return res.json({message: "Categoria removida com sucesso!"});
    }
}

export { RemoveCategoryController };