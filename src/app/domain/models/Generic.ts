import {Info} from "./Info.ts";


export type Data<I> = {
    info: Info;
    results: I[];
};