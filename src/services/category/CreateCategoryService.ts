import prismaClient from "../../prisma";
import { CategoryRequest } from "../../schemas";

class CreateCategoryService {
	async execute({ name }: CategoryRequest) {
		const category = await prismaClient.category.create({
			data: {
				name: name,
			},
			select: {
				id: true,
				name: true,
			},
		});

        return category;
	}
}

export { CreateCategoryService };
