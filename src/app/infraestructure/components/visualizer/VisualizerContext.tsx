import {createContext} from "react";

export type ContextGenericType<T> = {
    filters: T[];
    setFilters: (key: string, value: string) => void;
}

export type FilterContextType = {
    key: string;
    type: string;
    value: string;
    description?: string;
}

export const SearchContext = createContext<ContextGenericType<FilterContextType>>({} as ContextGenericType<FilterContextType>);