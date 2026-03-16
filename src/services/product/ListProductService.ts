import prismaClient from "../../prisma";

class ListProductService {
    async execute() {
        const produts = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                amount: true,
            },
            orderBy: {
                created_at: 'desc'
            },
        });

        return produts;
    }
}

export { ListProductService }