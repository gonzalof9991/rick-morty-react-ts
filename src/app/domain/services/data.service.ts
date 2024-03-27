import {Data} from "../models/Data.ts";
import {DataRepository} from "../../infraestructure/repositories/data.repository.ts";


export const DataService = {
    getData: (): Promise<Data> => {
        return DataRepository.getData();
    },
    getPage: (url: string): Promise<Data> => {
        return DataRepository.getPage(url);
    }
};