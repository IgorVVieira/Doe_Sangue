import { inject, injectable } from "tsyringe";

import { Donor } from "../entities/Donor";
import { IDonorsRepository } from "../repositories/IDonorsRepository";

interface DonorRequest {
    name: string;
    email: string;
    blood: string;
}

@injectable()
export class CreateDonorService {
    constructor(@inject("DonorsRepository") private donorsRepository: IDonorsRepository) { }

    async execute({ name, email, blood }: DonorRequest): Promise<Donor | Error> {
        if (!await this.donorsRepository.findByEmail(email)) {
            const donor = await this.donorsRepository.create({
                name,
                email,
                blood,
            });

            return donor;
        }
        return new Error('Donor already exists');
    }
}
