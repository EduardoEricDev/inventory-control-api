import { Request, Response } from "express";
import { RemoveProductService } from "../../services/product/RemoveProductService";
import { RemoveProductSchema } from "../../schemas";

class RemoveProductController {
	async handle(req: Request, res: Response) {
		const { product_id } = RemoveProductSchema.parse(req.params);
		const removeProductService = new RemoveProductService();
		const productRemoved = await removeProductService.execute({ product_id });

        return res.json({message: "Produto removido com sucesso!"})
	}
}

export { RemoveProductController };
