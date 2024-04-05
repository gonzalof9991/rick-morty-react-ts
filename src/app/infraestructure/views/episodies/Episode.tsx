import {Result} from "../../../domain/models/episodies/Result.ts";
import Visualizer from "../../components/visualizer/Visualizer.tsx";
import Card from "./Card.tsx";
import {EpisodeService} from "../../../domain/services/episode.service.ts";

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
    ]
    return (
        <>
            <Visualizer<Result> Service={EpisodeService} search={search}
                                skeletonClass={'w-[302-px] h-[160px]'}
                                classes={'md:grid-cols-4'}
                                Card={Card}/>
        </>
    )
}