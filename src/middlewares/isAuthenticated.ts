import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { Payload } from "../models/interfaces";

export function isAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	//Acessar token JWT
	const authToken = req.headers.authorization;

	if (!authToken) {
		return res.status(401).end();
	}

	const [, token] = authToken.split(" ");

	try {
		//Valida o token
		const { sub } = verify(token, process.env.JWT_SECRET as string) as Payload;
		req.user_id = sub;

		return next();
	} catch (error) {
        return res.status(401).end();
    }
}
