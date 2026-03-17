import prismaClient from "../../prisma";

interface SaleProductRequest {
    product_id: string;
    amount: number;
}

class SaleProductService {
    async execute({ product_id, amount }: SaleProductRequest) {
        // Busca o produto
        const product = await prismaClient.product.findFirst({
            where: {
                id: product_id,
            }
        });
        if (!product) {
            throw new Error("Produto não encontrado.");
        }

        // Impedir estoque negativo
        if (product.amount < amount) {
            throw new Error("Quantidade em estoque insuficiente.");
        }

        // Atualizar subtraindo
        const productSale = await prismaClient.product.update({
            where: {
                id: product_id,
            },
            data: {
                amount: product.amount - amount
            },
            select: {
                id: true,
                name: true,
                amount: true
            }
        });

        return productSale;
    }
}

export { SaleProductService };