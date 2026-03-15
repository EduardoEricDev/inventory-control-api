import prismaClient from "../../prisma";

interface ListProductByCategoryIdRequest {
    category_id?: string;
}

class ListProductByCategoryIdService {
    async execute({ category_id }: ListProductByCategoryIdRequest) {
        const findProductsByCategoryId = await prismaClient.product.findMany({
            where: {
                ...(category_id && { category_id }),
            }, select: {
                id: true,
                price: true,
                description: true,
                banner: true,
                amount: true,
                category_id: true,
            }
        });

        return findProductsByCategoryId;
    }
}

export { ListProductByCategoryIdService };