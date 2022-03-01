import "reflect-metadata";
import express from "express";
import cors from "cors";

import "./shared/container";
import routes from "./routes";
import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
