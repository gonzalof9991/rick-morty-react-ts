import {Result} from "../../../domain/models/locations/Result.ts";

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
        <li className={'dark:bg-gray-800 flex gap-x-2 p-2 shadow cursor-pointer transition-all ease-linear hover:scale-105'}>
            <div className={'pt-2'}>
                <span className={'block dark:text-white'}>{
                    item?.name?.length > 14 ? item?.name?.slice(0, 14) + '...' : item?.name
                }</span>
                <div className={'flex gap-x-2'}>
                    <span className={
                        'block  text-xs p-1 rounded  font-medium bg-slate-50 border border-slate-200 text-slate-800'
                        + (item.type === 'Planet' ? 'bg-green-50 border-green-400 text-green-800' : '')
                    }>{
                        item.type
                    }</span>
                    <span className={
                        'block  text-xs p-1 rounded  font-medium bg-orange-50 border border-orange-200 text-orange-800'
                    }>{
                        'Residents ' + item.residents.length
                    }</span>

                </div>
                {
                    itemCard('Dimension:', item.dimension)
                }
                {
                    itemCard('Created:', item.created)
                }
            </div>
        </li>
    )
}