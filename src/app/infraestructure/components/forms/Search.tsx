import React, {useContext, useEffect, useRef, useState} from "react";
import {buildUrl, replaceQueryParams} from "../../../shared/utils/UrlUtils.tsx";
import {SearchContext} from "../Visualizer/VisualizerContext.tsx";
import {useDebounce} from "./hooks/UseDebounce.tsx";

type SearchProps<T> = {
    onSearch: (data: T) => void;
    postSearch: (value: string) => Promise<T>;
    queryParams: string;
    placeholder?: string;
};
export default function Search<T, >(
    {
        onSearch, postSearch, queryParams, placeholder
    }: SearchProps<T>
) {
    const [value, setValue] = useState<string>('');
    const {filters, setFilters} = useContext(SearchContext);
    const debouncedValue = useDebounce(value, 500);
    const isFirstRender = useRef(true);
    const updateFilters = () => {
        const key = replaceQueryParams(queryParams);
        setFilters(key, value);
    }
    const handleSearch = () => {
        //updateFilters();
        let search = '';
        if (filters.length === 0) {
            search = queryParams + value;
        } else {
            search = buildUrl(filters);
        }
        postSearch(search)
            .then(onSearch);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        updateFilters();
        handleSearch();
    }, [debouncedValue]);
    return (

        <input type="text" className="w-full p-6 md:w-max md:p-3 border border-gray-200 rounded shadow-xs"
               value={value}
               onChange={handleChange}
               placeholder={placeholder ?? 'Search'}/>

    )
}