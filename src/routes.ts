import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthRequestController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";

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
//Rota de buscar os dados do usuário logado
router.get("/me", isAuthenticated, new DetailUserController().handle);

export { router };
