import {createContext} from "react";

export type FilterContextType = {
    key: string;
    type: string;
    value: string;
    description?: string;
}
export type SearchContextType = {
    filters: FilterContextType[];
    setFilters: (key: string, value: string) => void;
};
export const SearchContext = createContext<SearchContextType>({} as SearchContextType);