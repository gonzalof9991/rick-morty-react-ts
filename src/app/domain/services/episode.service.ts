import {RepositoriesInterface} from "../../infraestructure/repositories/repositories.interface.tsx";
import {Data} from "../models/episodies/Data.ts";
import {EpisodeRepository} from "../../infraestructure/repositories/episode.repository.ts";

export const EpisodeService: RepositoriesInterface<Data> = {
    getAll: (): Promise<Data> => {
        return EpisodeRepository.getAll();
    },
    getPage: (url: string): Promise<Data> => {
        return EpisodeRepository.getPage(url);
    },
    getParams: (params: string): Promise<Data> => {
        return EpisodeRepository.getParams(params);
    }
};