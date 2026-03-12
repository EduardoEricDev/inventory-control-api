import prismaClient from "../../prisma";
import { RemoveCategoryRequest } from "../../schemas";

class RemoveCategoryService {
	async execute({ category_id }: RemoveCategoryRequest) {
		const categoryRemoved = await prismaClient.category.delete({
			where: {
				id: category_id,
			},
		});

        return categoryRemoved;
	}
}

export { RemoveCategoryService };
