import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { AppError } from "../errors/AppError";

export function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	//Erros lançados pelo zod na validação de dados recebidos do usuário
	if (err instanceof ZodError) {
		return res.status(400).json({
			message: "Validation error.",
			issues: z.treeifyError(err),
		});
	}

	// Se for um erro lançado por nós (throw new Error)
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			error: err.message,
		});
	}

	// Erros inesperados do servidor
	return res.status(500).json({
		status: "error",
		message: "Internal server error.",
	});
}
