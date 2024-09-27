import {RepositoriesInterface} from "../../../repositories/repositories.interface.tsx";
import {Data} from "../../../../domain/models/Generic.ts";
import {SearchType} from "../Visualizer.interface.ts";

export interface VisualizerManagerProps<I> {
    Service: RepositoriesInterface<Data<I>>,
    search: SearchType[],
    skeletonClass: string;
    renderCard: (item: I, index: number, handleClick: (item: I) => void) => JSX.Element;
    renderDialog: (item: I, open: boolean, handleClose: () => void) => JSX.Element;
}