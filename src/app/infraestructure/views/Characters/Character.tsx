import {Data} from "../../../domain/models/characters/Data.ts";
import {SearchContext, SearchContextType} from "../../components/Visualizer/VisualizerContext.tsx";
import {Result} from "../../../domain/models/characters/Result.ts";
import {CharacterService} from "../../../domain/services/character.service.ts";
import Card from "./Card.tsx";
import Visualizer from "../../components/Visualizer/Visualizer.tsx";

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
    return (
        <>
            <Visualizer<Data, SearchContextType, Result> Service={CharacterService} search={search}
                                                         skeletonClass={'w-[410px] h-[160px]'}
                                                         context={SearchContext} Card={Card}/>
        </>
    )
}