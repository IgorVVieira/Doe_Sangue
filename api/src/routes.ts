import { Router } from "express";
import { CreateDonorController } from "./controllers/CreateDonorController";
import { IndexDonorController } from "./controllers/IndexDonorController";

const routes = Router();

routes.get('/donors', new IndexDonorController().handle);
routes.post('/donors', new CreateDonorController().handle);

export default routes;