import { Request, Response } from "express";
import { EditCategoryService } from "../../services/category/EditCategoryService";
import { EditCategorySchema } from "../../schemas";

class EditCategoryController {
	async handle(req: Request, res: Response) {
		const { name, category_id } = EditCategorySchema.parse({
			name: req.body.name,
			category_id: req.params.category_id,
		});
		const editCategoryService = new EditCategoryService();
		const categoryEdited = await editCategoryService.execute({
			name,
			category_id,
		});

		return res.json(categoryEdited);
	}
}

export { EditCategoryController };
