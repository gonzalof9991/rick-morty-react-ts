import {Result} from "../../../domain/models/characters/Result.ts";
import {CharacterService} from "../../../domain/services/character.service.ts";
import Card from "../../components/Card/Card.tsx";
import DialogGeneric from "../../components/Dialog/DialogGeneric.tsx";
import CardHttp from "../../components/CardHttp/CardHttp.tsx";
import {Badge} from "@mui/material";
import {search} from "../constants.ts";
import {VisualizerManager} from "../../components/Visualizer/Manager";


export default function Character() {
    return (
        <>
            <VisualizerManager<Result>
                Service={CharacterService}
                search={search}
                skeletonClass={'w-[160px] h-[260px] md:w-[466px] md:h-[160px]'}
                renderCard={(item, i, handleClick) => (
                    <Card schema="character" item={item} key={i} onClick={() => handleClick(item)} />
                )}
                renderDialog={(item, open, handleClose) => (
                    <DialogGeneric schema="character" open={open} onHandleClose={handleClose}>
                        <>
                            <Card schema={'character'}
                                  classes={'md:!flex-col md:!gap-y-4 !border-b-none !p-3 !shadow-none hover:!scale-100'}
                                  item={item}/>
                            <hr className={'my-4'}/>

                            <Badge badgeContent={item?.episode?.length} color="primary" className={'my-4'}>
                            <span className={'text-xl font-medium dark:text-white'}>
                                Episodes
                            </span>
                            </Badge>
                            <ul className={'grid  md:grid-cols-2 gap-4'}>
                                {item?.episode?.map((episode, i) => (
                                    <CardHttp endpoint={episode} schema={'episode'} classes={'hover:!scale-100 !p-3'}
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