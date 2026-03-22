import express, { Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { router } from "./routes";
import { errorHandler } from "./middlewares/error-handler";
import path from "path";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

// Documentação Swagger (Acessível em http://localhost:3333/api/docs)
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas da API com prefixo de versão
app.use("/v1", router);

// Servir arquivos estáticos (Banners dos produtos)
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

// Middleware de Erro
app.use(errorHandler);

app.get("/terms", (req: Request, res: Response) => {
	return res.json({ message: "Termos de serviço" });
});

app.listen(port, () => {
	console.log(`🚀 Servidor rodando na porta ${port} - Inventory Control API`);
});
