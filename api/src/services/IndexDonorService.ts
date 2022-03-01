import { inject, injectable } from "tsyringe"
import { IDonorsRepository } from "../repositories/IDonorsRepository";
import { Donor } from "../entities/Donor";

@injectable()
export class IndexDonorService {
    constructor(@inject("DonorsRepository") private donorsRepository: IDonorsRepository) { }

    async execute(): Promise<Donor[]> {
        return await this.donorsRepository.index();
    }
}