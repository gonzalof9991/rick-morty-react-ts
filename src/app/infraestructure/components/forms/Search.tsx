import React, {useState} from "react";

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
    const handleSearch = () => {
        const joined = `${queryParams}${value.toLowerCase()}`;
        postSearch(joined)
            .then(onSearch)
            .finally(() => setValue(''));
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    return (
        <div className="flex justify-center items-center">
            <input type="text" className="p-2 border border-gray-300 rounded" value={value} onChange={handleChange}
                   onKeyPress={(e) => {
                       if (e.key === 'Enter') {
                           handleSearch();
                       }
                   }}
                   placeholder={placeholder ?? 'Search'}/>
        </div>
    )
}