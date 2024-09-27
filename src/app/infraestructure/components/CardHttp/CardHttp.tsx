import {useCallback, useEffect, useState} from "react";
import Card, {CardSchema, ItemProps} from "../Card/Card.tsx";
import {Skeleton} from "@mui/material";

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
                <Skeleton variant="rectangular" width={'full'} height={140}/>
            ) : (
                <Card schema={schema as CardSchema} item={data as ItemProps} classes={classes}/>
            )}
        </>
    )
}