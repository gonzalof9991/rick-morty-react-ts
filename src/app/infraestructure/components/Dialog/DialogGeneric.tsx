import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import {JSX} from "react";
import {CardSchema} from "../Card/Card.tsx";

export interface DialogProps {
    schema: CardSchema,
    classes?: string,
    children?: JSX.Element,
    open: boolean,
    onHandleClose?: () => void
}

export default function DialogGeneric(props: DialogProps) {
    const {schema, children, onHandleClose, open} = props;
    return (
        <Dialog fullWidth={true} maxWidth={'lg'} open={open} onClose={onHandleClose}>
            <DialogTitle className={'dark:bg-gray-800'}>
                <span className={'dark:text-white'}>
                    This is a {schema} dialog
                </span>
            </DialogTitle>
            <DialogContent className={'dark:bg-gray-800'}>

                {children}
            </DialogContent>

        </Dialog>
    )
}