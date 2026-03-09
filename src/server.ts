import express from "express";
import "express-async-errors";
import { router } from "./routes";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

app.use(errorHandler);

app.listen(port, () => {
	console.log(`🚀 Servidor rodando na porta ${port} - Inventory Control API`);
});