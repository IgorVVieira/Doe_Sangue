import { Router } from "express";
import { CreateDonorController } from "./controllers/CreateDonorController";

const routes = Router();

routes.post('/donors', new CreateDonorController().handle);

export default routes;