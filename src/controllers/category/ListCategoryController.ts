import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";
import { ca } from "zod/v4/locales";

class ListCategoryController {
    async handle(req: Request, res: Response) {
        const listCategoryService = new ListCategoryService();
        const categories = await listCategoryService.execute();

        return res.json(categories);
    }
}

export { ListCategoryController };