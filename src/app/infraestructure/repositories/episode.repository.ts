import {http} from "../http/http.ts";
import {Data} from "../../domain/models/episodies/Data.ts";
import {RepositoriesInterface} from "./repositories.interface.tsx";


export const EpisodeRepository: RepositoriesInterface<Data> = {
    getAll: async () => {
        return await http.get<Data>('https://rickandmortyapi.com/api/episode')
    },
    getPage: async (url: string) => {
        return await http.get<Data>(url)
    },
    getParams: async (params: string) => {
        return await http.get<Data>(`https://rickandmortyapi.com/api/episode/${params}`)
    }
};