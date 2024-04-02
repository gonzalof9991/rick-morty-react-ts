import {http} from "../http/http.ts";
import {Data} from "../../domain/models/characters/Data.ts";
import {RepositoriesInterface} from "./repositories.interface.tsx";


export const CharacterRepository: RepositoriesInterface<Data> = {
    getAll: async () => {
        return await http.get<Data>('https://rickandmortyapi.com/api/character')
    },
    getPage: async (url: string) => {
        return await http.get<Data>(url)
    },
    getParams: async (params: string) => {
        return await http.get<Data>(`https://rickandmortyapi.com/api/character/${params}`)
    }
};