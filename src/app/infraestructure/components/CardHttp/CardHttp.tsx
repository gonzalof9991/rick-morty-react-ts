import {useCallback, useEffect, useState} from "react";
import Card, {CardSchema} from "../Card/Card.tsx";

export interface CardHttpProps {
    endpoint: string;
    schema: string;
    classes?: string;
}

export default function CardHttp<T>(props: CardHttpProps) {
    const {endpoint, schema, classes} = props;
    const [data, setData] = useState<T>({} as T);
    const [skeleton, setSkeleton] = useState<boolean>(true);
    const getData = useCallback(async () => {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            setData(data);
            setSkeleton(false);
        } catch (error) {
            console.error(error);
        }
    }, [endpoint]);
    useEffect(() => {
        getData().finally();
    }, [getData]);

    return (
        <>
            {skeleton ? (
                <div className={'w-[160px] h-[260px] md:w-[466px] md:h-[160px] bg-gray-300 animate-pulse'}></div>
            ) : (
                <Card schema={schema as CardSchema} item={data} classes={classes}/>
            )}
        </>
    )
}