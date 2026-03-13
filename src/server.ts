import express from "express";
import "express-async-errors";
import { router } from "./routes";
import { errorHandler } from "./middlewares/error-handler";
import path from "path";

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(errorHandler);

app.listen(port, () => {
	console.log(`🚀 Servidor rodando na porta ${port} - Inventory Control API`);
});