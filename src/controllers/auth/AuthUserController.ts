import { Request, Response } from "express";
import { AuthRequestService } from "../../services/auth/AuthUserService";
import { AuthUserSchema } from "../../schemas";

class AuthRequestController {
	async handle(req: Request, res: Response) {
		const { email, password } = AuthUserSchema.parse(req.body);

		const authRequestService = new AuthRequestService();
		const auth = await authRequestService.execute({ email, password });

		return res.json(auth);
	}
}

export { AuthRequestController };
