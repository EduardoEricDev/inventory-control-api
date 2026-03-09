import { Request, Response, NextFunction } from "express";

export function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	// Se for um erro lançado por nós (throw new Error)
	if (err instanceof Error) {
		return res.status(400).json({
			error: err.message,
		});
	}

	// Erros inesperados do servidor
	return res.status(500).json({
		status: "error",
		message: "Internal server error.",
	});
}
