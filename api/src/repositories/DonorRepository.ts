import { Repository, getRepository } from "typeorm";
import { ICreateDonorDto } from "../dtos/ICreateDonorDto";
import { Donor } from "../entities/Donor";
import { IDonorsRepository } from "./IDonorsRepository";

export class DonorRepository implements IDonorsRepository {
    private reposository: Repository<Donor>;

    constructor() {
        this.reposository = getRepository(Donor);
    }

    async create(data: ICreateDonorDto): Promise<Donor> {
        const donor = this.reposository.create(data);

        await this.reposository.save(donor);

        return donor;
    }

    async index(): Promise<Donor[]> {
        return await this.reposository.find();
    }

    async findById(id: string): Promise<Donor> {
        return await this.reposository.findOne({
            id,
        });
    }

    async delete(donor: Donor): Promise<void> {
        await this.reposository.remove(donor);
    }

    async save(donor: Donor): Promise<Donor> {
        return this.reposository.save(donor);
    }

}