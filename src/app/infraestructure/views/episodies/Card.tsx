import {Result} from "../../../domain/models/episodies/Result.ts";

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
                    }>{
                        item.episode
                    }</span>
                    <span className={
                        'block  text-xs p-1 rounded  font-medium bg-orange-50 border border-orange-200 text-orange-800'
                    }>{
                        'Characters ' + item.characters.length
                    }</span>

                </div>
                {
                    itemCard('Air date:', item.air_date)
                }
                {
                    itemCard('Created:', item.created)
                }
            </div>
        </li>
    )
}