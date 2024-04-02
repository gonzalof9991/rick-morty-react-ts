import {RepositoriesInterface} from "../../infraestructure/repositories/repositories.interface.tsx";
import {Data} from "../models/locations/Data.ts";
import {LocationRepository} from "../../infraestructure/repositories/location.repository.ts";

export const LocationService: RepositoriesInterface<Data> = {
    getAll: (): Promise<Data> => {
        return LocationRepository.getAll();
    },
    getPage: (url: string): Promise<Data> => {
        return LocationRepository.getPage(url);
    },
    getParams: (params: string): Promise<Data> => {
        return LocationRepository.getParams(params);
    }
};