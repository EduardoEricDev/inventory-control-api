import prismaClient from "../../prisma";
import { EditCategoryRequest } from "../../schemas";

class EditCategoryService {
	async execute({ name, category_id }: EditCategoryRequest) {
		const categoryEdited = await prismaClient.category.update({
			where: {
				id: category_id,
			},
			data: {
                name: name,
            },
		});

        return categoryEdited;
	}
}

export { EditCategoryService };
