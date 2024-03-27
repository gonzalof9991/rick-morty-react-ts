import {Result} from "../../../domain/models/Result.ts";

type CardProps = {
    character: Result;
};
export default function Card(
    {character}: CardProps
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
                <img alt={character.name} className={'w-40'} src={character.image}/>
            </figure>
            <div className={'pt-2'}>
                <span className={'block dark:text-white'}>{
                    character.name
                }</span>
                <div className={'flex gap-x-2'}>
                    <span className={
                        'block  text-xs p-1 rounded  font-medium'
                        + (character.status === 'Alive' ? ' bg-green-50 text-green-800' : '')
                        + (character.status === 'Dead' ? ' bg-red-50 text-red-800' : '')
                        + (character.status === 'unknown' ? ' bg-gray-50 text-gray-800' :
                            'bg-slate-50 text-slate-800')
                    }>{
                        character.status
                    }</span>
                    <span className={
                        'block  text-xs p-1 rounded  font-medium'
                        + (character.species === 'Alien' ? ' bg-indigo-50 text-indigo-800' : '')
                        + (character.species === 'Human' ? ' bg-yellow-50 text-yellow-800' :
                            'bg-slate-50 text-slate-800')

                    }>{
                        character.species
                    }</span>

                </div>
                {
                    itemCard('Last known location:', character.location.name)
                }
                {
                    itemCard('Origin:', character.origin.name)
                }
            </div>
        </li>
    )
}