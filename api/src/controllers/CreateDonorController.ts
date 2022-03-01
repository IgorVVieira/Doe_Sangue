import { Request, Response } from "express";
import { CreateDonorService } from "../services/CreateDonorService";

import { container } from "tsyringe";

export class CreateDonorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, blood } = request.body;

        const createDonorService = container.resolve(CreateDonorService);

        try {
            const result = await createDonorService.execute({ name, email, blood });

            if (result instanceof Error) {
                return response.status(500).json({ 'error': result.message });
            }

            return response.json(result);
        } catch (error) {
            return response.status(500).json({ 'error': error.message });
        }
    }
}