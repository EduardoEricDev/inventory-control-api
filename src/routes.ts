import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthRequestController } from "./controllers/user/AuthUserController";

const router = Router();

// Rota de teste
// router.get("/teste", (request: Request, response: Response) => {
// 	return response.json({ ok: true });
// });

// Rota de teste de middleware de erro
// router.get("/teste", (request: Request, response: Response) => {
// 	throw new Error("teste de middleware");
// });

// Rota de cadastro de usuário
router.post("/users", new CreateUserController().handle);
//Rota de autenticação de usuário
router.post("/session", new AuthRequestController().handle);

export { router };
