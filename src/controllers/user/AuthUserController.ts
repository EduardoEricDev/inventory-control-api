import { Request, Response } from "express";
import { AuthRequestService } from "../../services/user/AuthUserService";
import { AuthRequest } from "../../models/interfaces";

class AuthRequestController {
	async handle(req: Request, res: Response) {
		const { email, password }: AuthRequest = req.body;

		const authRequestService = new AuthRequestService();
		const auth = await authRequestService.execute({ email, password });

		return res.json(auth);
	}
}

export { AuthRequestController };
