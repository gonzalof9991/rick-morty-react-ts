import React, {useContext, useEffect, useState} from "react";
import {buildUrl, replaceQueryParams} from "../../../shared/utils/UrlUtils.tsx";
import {SearchContext} from "../Visualizer/VisualizerContext.tsx";

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
    const updateFilters = () => {
        const key = replaceQueryParams(queryParams);
        setFilters(key, value);
    }
    const handleSearch = () => {
        updateFilters();
        let search = '';
        if (filters.length === 0) {
            search = queryParams + value;
        } else {
            search = buildUrl(filters);
        }
        console.log(search, 'search');
        postSearch(search)
            .then(onSearch);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        console.log(value, 'value');
        updateFilters();
    }, [value]);
    return (
        <div className="flex justify-center items-center">
            <input type="text" className="p-3 border border-gray-100 rounded shadow-xs"
                   value={value}
                   onChange={handleChange}
                   onKeyPress={(e) => {
                       if (e.key === 'Enter') {
                           handleSearch();
                       }
                   }}
                   placeholder={placeholder ?? 'Search'}/>
        </div>
    )
}