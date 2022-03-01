import { container } from "tsyringe";

import { DonorsRepository } from "../../repositories/DonorsRepository";
import { IDonorsRepository } from "../../repositories/IDonorsRepository";

container.registerSingleton<IDonorsRepository>(
    "DonorsRepository",
    DonorsRepository
);