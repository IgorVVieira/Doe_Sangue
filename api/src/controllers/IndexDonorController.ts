import { Request, Response } from "express";
import { container } from "tsyringe";
import { IndexDonorService } from "../services/IndexDonorService";

export class IndexDonorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const indexDonorService = container.resolve(IndexDonorService);

        const donors = await indexDonorService.execute();

        return response.json(donors);
    }
}