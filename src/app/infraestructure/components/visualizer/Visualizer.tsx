import {RepositoriesInterface} from "../../repositories/repositories.interface.tsx";
import {SearchType} from "./Visualizer.interface.tsx";
import {Context, JSX, useEffect, useState} from "react";
import Search from "../forms/Search.tsx";
import ButtonPage from "../buttons/ButtonPage.tsx";
import {FilterContextType} from "./VisualizerContext.tsx";

export type VisualizerProps<T, C, I> = {
    Service: RepositoriesInterface<T>,
    search: SearchType[],
    context: Context<C>,
    Card: (props: { item: I }) => JSX.Element,
    classes?: string,
    skeletonClass: string
};
export default function Visualizer<T, C, I>({
                                                Service,
                                                search,
                                                context,
                                                Card,
                                                classes,
                                                skeletonClass
                                            }: VisualizerProps<T, C, I>): JSX.Element {
    const [data, setData] = useState<T | null>(null);
    const [skeleton, setSkeleton] = useState<boolean>(true);
    const [filters, setFilters] = useState<FilterContextType[] | null>(null);
    const changeSkeleton = (value: boolean, ms: number) => {
        setTimeout(() => {
            setSkeleton(value);
        }, ms);
    };
    const handleSearch = (values: T) => {
        if (values.results.length === 0) {
            alert('No results found');
            return;
        }
        changeSkeleton(true, 0);
        setData(values);
        changeSkeleton(false, 2000);
    };
    const handleFilters = (key: string, value: string) => {
        const newFilters = filters ?? [];
        const filter = newFilters.find((filter) => filter.key === key);
        if (filter) {
            filter.value = value;
        } else {
            newFilters.push({key, value, type: 'item'});
        }
        setFilters(newFilters);
    };

    const handlePage = (url: string) => {
        changeSkeleton(true, 0);
        Service.getPage(url).then(setData)
            .finally(() => {
                changeSkeleton(false, 2000);
            });
    };
    useEffect(() => {
        Service.getAll().then((data) => {
            setData(data);
        })
            .finally(() => {
                changeSkeleton(false, 2000);
            });
    }, []);
    return (
        <>
            <context.Provider value={{
                filters: filters ?? [], setFilters: handleFilters
            }}>
                <div className={'flex-col w-full gap-y-4 flex justify-center md:flex-row items-center md:gap-x-2'}>
                    {
                        search.map((s, i) => (
                            <Search<T> key={i} postSearch={Service.getParams} onSearch={handleSearch}
                                       queryParams={s.queryParams} placeholder={s.placeholder}/>
                        ))
                    }
                </div>
                <div className={'flex justify-center items-center gap-x-4 my-10 md:my-6 md:justify-end'}>
                    <ButtonPage classes={'p-4 w-full ease-in duration-300 hover:bg-slate-50 md:p-3 md:w-32'} onClick={handlePage} url={data?.info?.prev || ''}
                                text={'Previous'}/>
                    <ButtonPage classes={'p-4 w-full ease-in duration-300 md:p-3 md:w-32 bg-indigo-500 hover:bg-indigo-700 text-white '} onClick={handlePage}
                                url={data?.info?.next || ''}
                                text={'Next'}/>
                </div>
            </context.Provider>
            <ul className={'grid grid-cols-2 gap-6 md:grid-cols-3 justify-center ' + classes}>
                {
                    (skeleton) ?
                        Array.from({length: 20}).map((_, index) => (
                            <li key={index}
                                className={'animate-pulse bg-gray-200 dark:bg-gray-800 ' + skeletonClass}>
                            </li>
                        )) :
                        data?.results.map((item) => (
                            <Card key={item.id} item={item}/>
                        ))
                }
            </ul>
        </>

    )
        ;
}