import {Result} from "../../../domain/models/characters/Result.ts";
import {CharacterService} from "../../../domain/services/character.service.ts";
import Visualizer from "../../components/Visualizer/Visualizer.tsx";
import Card from "../../components/Card/Card.tsx";
import DialogGeneric from "../../components/Dialog/DialogGeneric.tsx";
import {useState} from "react";
import CardHttp from "../../components/CardHttp/CardHttp.tsx";


export default function Character() {
    const search = [
        {
            queryParams: '?name=',
            placeholder: 'Search by name'
        },
        {
            queryParams: '?status=',
            placeholder: 'Search by status'
        },
        {
            queryParams: '?gender=',
            placeholder: 'Search by gender'
        }
    ]
    const [character, setCharacter] = useState<Result>({} as Result);
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = (item: Result) => {
        if (!item) return;
        setCharacter(item);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Visualizer<Result>
                schema={'character'}
                Service={CharacterService} search={search}
                skeletonClass={'w-[160px] h-[260px] md:w-[466px] md:h-[160px]'}
                Card={Card}
                onClick={handleClick}
            >
                <DialogGeneric schema={'character'} open={open} onHandleClose={handleClose}>
                    <>
                        <Card schema={'character'}
                              classes={'md:!flex-col md:!gap-y-4 !border-b-none shadow-none hover:!scale-100'}
                              item={character}/>
                        <hr className={'my-4'}/>
                        <span className={'block text-xl font-bold my-4'}>
                            Episodes
                        </span>
                        <ul className={'grid  md:grid-cols-2 gap-4'}>
                            {character?.episode?.map((episode, i) => (
                                <CardHttp endpoint={episode} schema={'episode'} classes={'hover:!scale-100 !p-3'}
                                          key={i}/>
                            ))}
                        </ul>

                    </>
                </DialogGeneric>
            </Visualizer>
        </>
    )
}