import {useState} from "react";
import {Data} from "../../../../domain/models/Generic.ts";
import Visualizer from "../Visualizer.tsx";
import {VisualizerManagerProps} from "./Manager.interface.ts";


const VisualizerManager = <I, >({
                                    Service,
                                    search,
                                    skeletonClass,
                                    renderCard,
                                    renderDialog
                                }: VisualizerManagerProps<I>) => {
    const [data, setData] = useState<Data<I> | undefined>(undefined);
    const [selectedItem, setSelectedItem] = useState<I | undefined>(undefined);
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = (item: I) => {
        if (!item) return;
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const listenData = (data: Data<I>) => {
        if (!data) return;
        setData(data);
    };

    return (
        <>
            <Visualizer<I>
                Service={Service}
                search={search}
                skeletonClass={skeletonClass}
                onClick={handleClick}
                onChangeData={listenData}
            >
                {
                    data?.results ?
                        data.results.map((item, i) => renderCard(item, i, handleClick))
                        : <span>No results found</span>
                }
            </Visualizer>

            {selectedItem && renderDialog(selectedItem, open, handleClose)}
        </>
    );
}

export default VisualizerManager;
