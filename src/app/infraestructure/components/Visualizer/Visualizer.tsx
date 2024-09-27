import {RepositoriesInterface} from "../../repositories/repositories.interface.tsx";
import {SearchType} from "./Visualizer.interface.ts";
import React, {JSX, useEffect, useState} from "react";
import Search from "../forms/Search.tsx";
import ButtonPage from "../Buttons/ButtonPage.tsx";
import {FilterContextType, SearchContext} from "./VisualizerContext.tsx";
import {Data} from "../../../domain/models/Generic.ts";


export type VisualizerProps<I> = {
    Service: RepositoriesInterface<Data<I>>,
    search: SearchType[],
    classes?: string,
    skeletonClass: string
    onClick?: (item: I) => void,
    children: React.ReactNode,
    onChangeData?: (data: Data<I>) => void
};
export default function Visualizer<I>(props: VisualizerProps<I>): JSX.Element {
    const {
        Service,
        search,
        children,
        classes,
        skeletonClass,
        onChangeData
    } = props;
    const [data, setData] = useState<Data<I>>({info: {count: 0, pages: 0, next: '', prev: null}, results: []});
    const [skeleton, setSkeleton] = useState<boolean>(true);
    const [filters, setFilters] = useState<FilterContextType[] | null>(null);
    const renderSearch = () => {
        return search.map((s, i) => (
            <Search<Data<I>> key={i} postSearch={Service.getParams} onSearch={handleSearch}
                             queryParams={s.queryParams} placeholder={s.placeholder}/>
        ))
    }
    const changeSkeleton = (value: boolean, ms: number) => {
        setTimeout(() => {
            setSkeleton(value);
        }, ms);
    };
    const handleSearch = (values: Data<I>) => {
        if (values.results.length === 0) {
            alert('No results found');
            return;
        }
        changeSkeleton(true, 0);
        setData(values);
        changeSkeleton(false, 2000);
        if (onChangeData) onChangeData(values);
    };
    const handleFilters = (key: string, value: string) => {
        setFilters(prevFilters => {
            const newFilters = [...(prevFilters ?? [])];
            const filter = newFilters.find(f => f.key === key);
            if (filter) {
                filter.value = value;
            } else {
                newFilters.push({key, value, type: 'item'});
            }
            return newFilters;
        });
    };

    const handlePage = (url: string) => {
        changeSkeleton(true, 0);
        Service.getPage(url).then(setData)
            .finally(() => {
                changeSkeleton(false, 2000);
                if (onChangeData) onChangeData(data);
            });
    };


    useEffect(() => {
        const getData = async () => {
            try {
                const result = await Service.getAll();
                setData(result);
                if (onChangeData) onChangeData(result);
            } finally {
                changeSkeleton(false, 2000);
            }
        };
        getData().finally();
    }, []);
    return (
        <>
            <SearchContext.Provider value={{
                filters: filters ?? [], setFilters: handleFilters
            }}>
                <div className={'flex-col w-full gap-y-4 flex justify-center md:flex-row items-center md:gap-x-2'}>
                    {
                        renderSearch()
                    }
                </div>
                <div className={'flex justify-center items-center gap-x-4 my-10 md:my-6 md:justify-end'}>
                    <ButtonPage classes={'p-4 w-full ease-in duration-300 hover:bg-slate-50 md:p-3 md:w-32'}
                                onClick={handlePage} url={data?.info?.prev || ''}
                                text={'Previous'}/>
                    <ButtonPage
                        classes={'p-4 w-full ease-in duration-300 md:p-3 md:w-32 bg-indigo-500 hover:bg-indigo-700 text-white '}
                        onClick={handlePage}
                        url={data?.info?.next || ''}
                        text={'Next'}/>
                </div>
            </SearchContext.Provider>
            <ul className={'grid grid-cols-2 gap-6 md:grid-cols-3 justify-center ' + classes}>
                {
                    (skeleton) ?
                        Array.from({length: 20}).map((_, index) => (
                            <li key={index}
                                className={'animate-pulse bg-gray-200 dark:bg-gray-800 ' + skeletonClass}>
                            </li>
                        )) :
                        children
                }
            </ul>

        </>

    )
        ;
}