import { Request, Response } from "express";
import { EditProductService } from "../../services/product/EditProductService";
import { EditProductSchema } from "../../schemas";

class EditProductController {
	async handle(req: Request, res: Response) {
		const { product_id } = req.params;
		const { name, price, description, amount, category_id } = EditProductSchema.parse({ ...req.body, product_id });
        
        // Verificamos se foi enviado um novo arquivo de imagem
        const banner = req.file ? req.file.filename : undefined;

        const editProductService = new EditProductService();
        const productEdited = await editProductService.execute({
            product_id,
            name,
            price: parseFloat(price),
            description,
            banner,
            amount: parseInt(amount),
            category_id
        });

        return res.json(productEdited);
	}
}

export { EditProductController };
