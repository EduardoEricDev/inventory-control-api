import prismaClient from "../../prisma";

interface EditCategoryRequest {
	name: string;
	category_id: string;
}

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
