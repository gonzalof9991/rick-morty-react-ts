import {Result} from "../../../domain/models/characters/Result.ts";

type CardProps = {
    item: Result;
};
export default function Card(
    {item}: CardProps
) {
    const itemCard =
        (label: string, value: any) => {
            return (
                <div className={'flex flex-col mt-2 text-sm'}>
                    <span className={'dark:text-gray-500 font-medium'}>
                        {label}
                    </span>
                    <span className={'dark:text-white text-xs'}>{
                        value
                    }</span>
                </div>
            )
        };
    return (
        <li className={'dark:bg-gray-800 flex gap-x-2 shadow cursor-pointer transition-all ease-linear hover:scale-105'}>
            <figure>
                <img alt={item.name} className={'w-40'} src={item.image}/>
            </figure>
            <div className={'pt-2'}>
                <span className={'block dark:text-white'}>{
                    item?.name?.length > 20 ? item?.name?.slice(0, 20) + '...' : item?.name
                }</span>
                <div className={'flex gap-x-2'}>
                    <span className={
                        'block  text-xs p-1 rounded  font-medium'
                        + (item.status === 'Alive' ? ' bg-green-50 text-green-800' : '')
                        + (item.status === 'Dead' ? ' bg-red-50 text-red-800' : '')
                        + (item.status === 'unknown' ? ' bg-gray-50 text-gray-800' :
                            'bg-slate-50 text-slate-800')
                    }>{
                        item.status
                    }</span>
                    <span className={
                        'block  text-xs p-1 rounded  font-medium'
                        + (item.gender === 'Male' ? ' bg-blue-50 text-blue-800' : '')
                        + (item.gender === 'Female' ? ' bg-pink-50 text-pink-800' : '')
                    }>{
                        item.gender
                    }</span>
                    <span className={
                        'block  text-xs p-1 rounded  font-medium bg-slate-50 text-slate-800'
                        + (item.species === 'Alien' ? ' bg-indigo-50 text-indigo-800' : '')
                        + (item.species === 'Human' ? ' bg-yellow-50 text-yellow-800' : '')

                    }>{
                        item.species
                    }</span>

                </div>
                {
                    itemCard('Last known location:', item.location.name)
                }
                {
                    itemCard('Origin:', item.origin.name)
                }
            </div>
        </li>
    )
}