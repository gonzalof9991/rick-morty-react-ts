import {Result} from "../../../domain/models/locations/Result.ts";
import {LocationService} from "../../../domain/services/location.service.ts";
import Visualizer from "../../components/Visualizer/Visualizer.tsx";
import Card from "../../components/Card/Card.tsx";
import CardHttp from "../../components/CardHttp/CardHttp.tsx";
import DialogGeneric from "../../components/Dialog/DialogGeneric.tsx";
import {useState} from "react";

export default function Location() {
    const search = [
        {
            queryParams: '?name=',
            placeholder: 'Search by name'
        },
        {
            queryParams: '?type=',
            placeholder: 'Search by type'
        },
        {
            queryParams: '?dimension=',
            placeholder: 'Search by dimension'
        }
    ];
    const [location, setLocation] = useState<Result>({} as Result);
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = (item: Result) => {
        if (!item) return;
        setLocation(item);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Visualizer<Result>
                schema={'location'}
                classesCard={'p-2'}
                Service={LocationService} search={search}
                skeletonClass={'w-[302-px] h-[160px]'}
                classes={'md:grid-cols-4'}
                Card={Card}
                onClick={handleClick}
            >
                <DialogGeneric schema={'episode'} open={open} onHandleClose={handleClose}>
                    <>
                        <Card schema={'location'}
                              classes={'!border-b-none shadow-none hover:!scale-100'}
                              item={location}/>
                        <hr className={'my-4'}/>
                        <span className={'block text-xl font-bold my-4'}>
                            Residents
                        </span>
                        <ul className={'grid  md:grid-cols-2 gap-4'}>
                            {location?.residents?.map((resident, i) => (
                                <CardHttp endpoint={resident} schema={'character'} classes={'hover:!scale-100 !p-3'}
                                          key={i}/>
                            ))}
                        </ul>

                    </>
                </DialogGeneric>
            </Visualizer>
        </>
    )
}