import {Result} from "../../../domain/models/episodies/Result.ts";
import Visualizer from "../../components/Visualizer/Visualizer.tsx";
import {EpisodeService} from "../../../domain/services/episode.service.ts";
import Card from "../../components/Card/Card.tsx";
import CardHttp from "../../components/CardHttp/CardHttp.tsx";
import DialogGeneric from "../../components/Dialog/DialogGeneric.tsx";
import {useState} from "react";

export default function Episode() {
    const search = [
        {
            queryParams: '?name=',
            placeholder: 'Search by name'
        },
        {
            queryParams: '?episode=',
            placeholder: 'Search by episode'
        }
    ];
    const [episode, setEpisode] = useState<Result>({} as Result);
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = (item: Result) => {
        if (!item) return;
        setEpisode(item);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Visualizer<Result>
                schema={'episode'}
                classesCard={'p-2'}
                Service={EpisodeService} search={search}
                skeletonClass={'w-[302-px] h-[160px]'}
                classes={'md:grid-cols-4'}
                Card={Card}
                onClick={handleClick}
            >
                <DialogGeneric schema={'episode'} open={open} onHandleClose={handleClose}>
                    <>
                        <Card schema={'episode'}
                              classes={'!border-b-none shadow-none hover:!scale-100'}
                              item={episode}/>
                        <hr className={'my-4'}/>
                        <span className={'block text-xl font-bold my-4'}>
                            Characters
                        </span>
                        <ul className={'grid md:grid-cols-2 gap-4'}>
                            {episode?.characters?.map((character, i) => (
                                <CardHttp endpoint={character} schema={'character'} classes={'hover:!scale-100 !p-3'}
                                          key={i}/>
                            ))}
                        </ul>

                    </>
                </DialogGeneric>
            </Visualizer>
        </>
    )
}