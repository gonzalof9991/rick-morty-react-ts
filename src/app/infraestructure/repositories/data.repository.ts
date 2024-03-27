import {http} from "../http/http.ts";
import {Data} from "../../domain/models/Data.ts";


export const DataRepository = {
    getData: async () => {
        return await http.get<Data>('https://rickandmortyapi.com/api/character')
    },
    getPage: async (url: string) => {
        return await http.get<Data>(url)
    }
};