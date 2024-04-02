type TitleProps = {
    label: string;
    classes?: string;
};
export default function Title({
                                  label, classes
                              }: TitleProps) {
    return (
        <div className={'flex justify-center items-center'}>
            <span
                className={'text-3xl rounded text-center bg-indigo-50 border border-indigo-400 text-indigo-700 p-2 font-medium ' + classes}>
                    {'Visualizer Generic ' + label}
            </span>
        </div>
    )
}