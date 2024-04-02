import {Data} from "../models/characters/Data.ts";
import {CharacterRepository} from "../../infraestructure/repositories/character.repository.ts";
import {RepositoriesInterface} from "../../infraestructure/repositories/repositories.interface.tsx";


export const CharacterService: RepositoriesInterface<Data> = {
    getAll: (): Promise<Data> => {
        return CharacterRepository.getAll();
    },
    getPage: (url: string): Promise<Data> => {
        return CharacterRepository.getPage(url);
    },
    getParams: (params: string): Promise<Data> => {
        return CharacterRepository.getParams(params);
    }
};