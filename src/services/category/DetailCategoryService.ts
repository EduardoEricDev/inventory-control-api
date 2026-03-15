import prismaClient from "../../prisma";

interface DetailCategoryRequest {
    category_id: string;
}

class DetailCategoryService {
    async execute({category_id}: DetailCategoryRequest) {
        const category = await prismaClient.category.findFirst({
            where: {
                id: category_id,
            },
            select: {
                id: true,
                name: true,
            }
        });

        return category;
    }
}

export { DetailCategoryService };