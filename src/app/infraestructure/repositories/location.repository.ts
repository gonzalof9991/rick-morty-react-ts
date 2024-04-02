import {http} from "../http/http.ts";
import {Data} from "../../domain/models/locations/Data.ts";
import {RepositoriesInterface} from "./repositories.interface.tsx";


export const LocationRepository: RepositoriesInterface<Data> = {
    getAll: async () => {
        return await http.get<Data>('https://rickandmortyapi.com/api/location')
    },
    getPage: async (url: string) => {
        return await http.get<Data>(url)
    },
    getParams: async (params: string) => {
        return await http.get<Data>(`https://rickandmortyapi.com/api/location/${params}`)
    }
};