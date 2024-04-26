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
            <DialogTitle>
                This is a {schema} dialog
            </DialogTitle>
            <DialogContent>

                {children}
            </DialogContent>

        </Dialog>
    )
}