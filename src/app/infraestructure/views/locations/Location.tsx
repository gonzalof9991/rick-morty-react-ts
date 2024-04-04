import {Data} from "../../../domain/models/locations/Data.ts";
import {SearchContext, SearchContextType} from "../../components/visualizer/VisualizerContext.tsx";
import {Result} from "../../../domain/models/locations/Result.ts";
import {LocationService} from "../../../domain/services/location.service.ts";
import Visualizer from "../../components/visualizer/Visualizer.tsx";
import Card from "./Card.tsx";

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
    ]
    return (
        <>
            <Visualizer<Data, SearchContextType, Result> Service={LocationService} search={search}
                                                         skeletonClass={'w-[302-px] h-[160px]'}
                                                         classes={'md:grid-cols-4'}
                                                         context={SearchContext} Card={Card}/>
        </>
    )
}