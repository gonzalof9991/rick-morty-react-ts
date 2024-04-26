import {Gender, Location, Species, Status} from "../../../domain/models/characters/Result.ts";

export type CardSchema = 'location' | 'character' | 'episode';

type CardProps = {
    schema: CardSchema;
    classes?: string;
    item: {
        id: number;
        name: string;
        status?: Status;
        species?: Species;
        type?: string;
        gender?: Gender;
        origin?: Location;
        location?: Location;
        image?: string;
        episode?: string[] | string;
        url: string;
        created: Date;
        // Episodies
        air_date?: string;
        characters?: string[];
        // Locations
        dimension?: string;
        residents?: string[];
    };
    onClick?: () => void;
};
export default function Card({schema, item, classes, onClick}: CardProps) {
    const renderImage = () => {
        if (schema !== 'character') {
            return null;
        }
        return <figure>
            <img alt={item.name} className={'w-full h-full md:w-40'} src={item.image}/>
        </figure>
    };
    const renderCharacter = () => {
        if (schema !== 'character') {
            return null;
        }
        return (
            <div className={'flex flex-wrap items-baseline gap-2 md:gap-x-2 md:flex-row'}>

                            <span className={
                                'block h-full text-xs p-1 rounded border  font-medium'
                                + (item.status === 'Alive' ? ' bg-green-50 border-green-400 text-green-800' : '')
                                + (item.status === 'Dead' ? ' bg-red-50 border-red-200 text-red-800' : '')
                                + (item.status === 'unknown' ? ' bg-gray-50 border-gray-200 text-gray-800' :
                                    'bg-slate-50 text-slate-800')
                            }>{
                                item.status
                            }</span>


                <span className={
                    'block h-full  text-xs p-1 rounded border  font-medium'
                    + (item.gender === 'Male' ? ' bg-blue-50 border-blue-200 text-blue-800' : '')
                    + (item.gender === 'Female' ? ' bg-pink-50 border-pink-200 text-pink-800' : '')
                }>{
                    item.gender
                }</span>


                <span className={
                    'block h-full text-xs p-1 rounded border font-medium bg-slate-50 text-slate-800'
                    + (item.species === 'Alien' ? ' bg-indigo-50 border-indigo-200 text-indigo-800' : '')
                    + (item.species === 'Human' ? ' bg-yellow-50 border-yellow-200 text-yellow-800' : '')

                }>{
                    item.species
                }</span>


                <span className={
                    'block h-full  text-xs p-1 rounded  font-medium bg-orange-50 border border-orange-200 text-orange-800'
                }>{
                    'Episodes ' + item?.episode?.length
                }</span>

                {
                    renderItem('Last known location:', item?.location?.name)
                }

                {
                    renderItem('Origin:', item?.origin?.name)
                }
            </div>

        );
    }
    const renderEpisode = () => {
        if (schema !== 'episode') {
            return null;
        }
        return (
            <>
                <div className={'flex gap-x-2'}>
                    <span className={
                        'block  text-xs p-1 rounded  font-medium bg-slate-50 border border-slate-200 text-slate-800'
                    }>{
                        item.episode
                    }</span>
                    <span className={
                        'block  text-xs p-1 rounded  font-medium bg-orange-50 border border-orange-200 text-orange-800'
                    }>{
                        'Characters ' + item?.characters?.length
                    }</span>

                </div>
                {
                    renderItem('Air date:', item.air_date)
                }
                {
                    renderItem('Created:', item.created)
                }
            </>

        );
    };
    const renderLocation = () => {
        if (schema !== 'location') {
            return;
        }
        return (
            <>
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
                        'Residents ' + item?.residents?.length
                    }</span>

                </div>
                {
                    renderItem('Dimension:', item.dimension)
                }
                {
                    renderItem('Created:', item.created)
                }
            </>
        );
    }
    const renderItem =
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
        <li
            onClick={() => {
                onClick && onClick();
            }}
            className={'dark:bg-gray-800 flex flex-col gap-x-2 shadow cursor-pointer transition-all ease-linear hover:scale-105 md:flex-row ' + classes
            }>
            {
                renderImage()
            }
            <div className={'pt-2 p-3 md:p-0'}>
                <span className={'block dark:text-white'}>{
                    item.name?.length > 14 ? item.name?.slice(0, 14) + '...' : item.name
                }</span>
                {
                    renderCharacter()
                }

                {
                    renderEpisode()
                }

                {
                    renderLocation()
                }

            </div>

        </li>
    )
}