import prismaClient from "../../prisma";

interface RemoveProductRequest {
    product_id: string;
}

class RemoveProductService {
    async execute({product_id}: RemoveProductRequest) {
        const productRemoved = await prismaClient.product.delete({
            where: {
                id: product_id,
            }
        });

        return productRemoved;
    }
}

export { RemoveProductService };