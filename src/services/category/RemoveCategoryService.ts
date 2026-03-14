import prismaClient from "../../prisma";

interface RemoveCategoryRequest {
	category_id: string;
}

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
