import {useEffect, useState} from "react";
import {Data} from "../../../domain/models/Data.ts";
import {CharacterService} from "../../../domain/services/character.service.ts";
import Card from "./Card.tsx";
import ButtonPage from "../../components/buttons/ButtonPage.tsx";
import Search from "../../components/forms/Search.tsx";

export default function Character() {
    const [data, setData] = useState<Data | null>(null);
    const [skeleton, setSkeleton] = useState<boolean>(true);

    const changeSkeleton = (value: boolean, ms: number) => {
        setTimeout(() => {
            setSkeleton(value);
        }, ms);
    };
    const handleSearch = (characters: Data) => {
        if (characters.results.length === 0) {
            alert('No results found');
            return;
        }
        changeSkeleton(true, 0);
        setData(characters);
        changeSkeleton(false, 2000);
    };
    const handlePage = (url: string) => {
        changeSkeleton(true, 0);
        CharacterService.getPage(url).then(setData)
            .finally(() => {
                changeSkeleton(false, 2000);
            });
    };
    useEffect(() => {
        CharacterService.getAll().then((data) => {
            setData(data);
        })
            .finally(() => {
                changeSkeleton(false, 1000);
            });
    }, []);
    return (
        <>
            <div className={'flex justify-center items-center gap-x-4 mb-4'}>
                <Search<Data> postSearch={CharacterService.getParams} onSearch={handleSearch} queryParams={'?name='}
                              placeholder={'Search by name'}/>
                <Search<Data> postSearch={CharacterService.getParams} onSearch={handleSearch} queryParams={'?status='}
                              placeholder={'Search by status'}/>
                <Search<Data> postSearch={CharacterService.getParams} onSearch={handleSearch} queryParams={'?gender='}
                              placeholder={'Search by gender'}/>
                <ButtonPage onClick={handlePage} url={data?.info?.prev || ''} text={'Previous'}/>
                <ButtonPage onClick={handlePage} url={data?.info?.next || ''} text={'Next'}/>
            </div>
            <ul className={'grid grid-cols-3 gap-6'}>
                {
                    (skeleton) ?
                        Array.from({length: 20}).map((_, index) => (
                            <li key={index}
                                className={'animate-pulse bg-gray-200 dark:bg-gray-800 w-[370px] h-[160px] '}>
                            </li>
                        )) :
                        data?.results.map((character) => (
                            <Card key={character.id} character={character}/>
                        ))
                }
            </ul>

        </>
    )
}