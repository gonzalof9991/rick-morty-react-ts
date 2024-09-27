import {Result} from "../../../domain/models/episodies/Result.ts";
import {EpisodeService} from "../../../domain/services/episode.service.ts";
import Card from "../../components/Card/Card.tsx";
import CardHttp from "../../components/CardHttp/CardHttp.tsx";
import DialogGeneric from "../../components/Dialog/DialogGeneric.tsx";
import {Badge} from "@mui/material";
import {VisualizerManager} from "../../components/Visualizer/Manager";

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
    return (
        <>

            <VisualizerManager<Result>
                Service={EpisodeService}
                search={search}
                skeletonClass={'w-[160px] h-[260px] md:w-[466px] md:h-[160px]'}
                renderCard={(item, i, handleClick) => (
                    <Card schema="episode" item={item} key={i} onClick={() => handleClick(item)}/>
                )}
                renderDialog={(item, open, handleClose) => (
                    <DialogGeneric schema="episode" open={open} onHandleClose={handleClose}>
                        <>
                            <Card schema={'episode'}
                                  classes={'md:!flex-col md:!gap-y-4 !border-b-none !p-3 !shadow-none hover:!scale-100'}
                                  item={item}/>
                            <hr className={'my-4'}/>

                            <Badge badgeContent={item?.characters?.length} color="primary" className={'my-4'}>
                            <span className={'text-xl font-medium dark:text-white'}>
                                Characters
                            </span>
                            </Badge>
                            <ul className={'grid  md:grid-cols-2 gap-4'}>
                                {item?.characters?.map((episode, i) => (
                                    <CardHttp endpoint={episode} schema='character' classes={'hover:!scale-100 !p-3'}
                                              key={i}/>
                                ))}
                            </ul>

                        </>
                    </DialogGeneric>
                )}
            />
        </>
    )
}