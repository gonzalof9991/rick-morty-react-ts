import {FilterContextType} from "../../infraestructure/views/Characters/CharacterContext.tsx";

export const buildUrl = (urls: FilterContextType[]) => {
    const url = urls.reduce((acc, filter) => {
        return acc + `${filter.key}=${filter.value}&`
    }, '?')
    if (url === '?') {
        return ''
    }
    if (url.endsWith('&')) {
        return url.slice(0, -1)
    }
    return url;
}


export const replaceQueryParams = (query: string): string => {
    let newQuery = query.replace('?', '');
    newQuery = newQuery.replace('=', '');
    return newQuery;
}