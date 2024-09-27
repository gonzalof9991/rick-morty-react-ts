import {Result} from "../../../domain/models/locations/Result.ts";
import {LocationService} from "../../../domain/services/location.service.ts";
import Card from "../../components/Card/Card.tsx";
import CardHttp from "../../components/CardHttp/CardHttp.tsx";
import DialogGeneric from "../../components/Dialog/DialogGeneric.tsx";
import {search} from "../constants.ts";
import {Badge} from "@mui/material";
import {VisualizerManager} from "../../components/Visualizer/Manager";

export default function Location() {
    return (
        <>

            <VisualizerManager<Result>
                Service={LocationService}
                search={search}
                skeletonClass={'w-[160px] h-[260px] md:w-[466px] md:h-[160px]'}
                renderCard={(item, i, handleClick) => (
                    <Card schema="location" item={item} key={i} onClick={() => handleClick(item)}/>
                )}
                renderDialog={(item, open, handleClose) => (
                    <DialogGeneric schema="episode" open={open} onHandleClose={handleClose}>
                        <>
                            <Card schema={'location'}
                                  classes={'md:!flex-col md:!gap-y-4 !border-b-none !p-3 !shadow-none hover:!scale-100'}
                                  item={item}/>
                            <hr className={'my-4'}/>

                            <Badge badgeContent={item?.residents?.length} color="primary" className={'my-4'}>
                            <span className={'text-xl font-medium dark:text-white'}>
                                Residents
                            </span>
                            </Badge>
                            <ul className={'grid  md:grid-cols-2 gap-4'}>
                                {item?.residents?.map((episode, i) => (
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