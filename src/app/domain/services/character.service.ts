import {Data} from "../models/Data.ts";
import {CharacterRepository} from "../../infraestructure/repositories/character.repository.ts";


export const CharacterService = {
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