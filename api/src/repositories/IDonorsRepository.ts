import { ICreateDonorDto } from "../dtos/ICreateDonorDto";
import { Donor } from "../entities/Donor";

export interface IDonorsRepository {
    create(data: ICreateDonorDto): Promise<Donor>;
    index(): Promise<Donor[]>;
    findById(id: string): Promise<Donor>;
    findByEmail(email: string): Promise<Donor>;
    delete(donor: Donor): Promise<void>;
    save(donor: Donor): Promise<Donor>;
}