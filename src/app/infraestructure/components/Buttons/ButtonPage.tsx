type ButtonPageProps = {
    onClick: (url: string) => void;
    url: string | null;
    text: string;
    classes?: string;
};
export default function ButtonPage({
                                       onClick, text, url, classes
                                   }: ButtonPageProps) {
    const handleClick = () => {
        onClick(url as string);
    };
    return (
        <button className={'disabled:opacity-50 disabled:cursor-not-allowed p-1 !w-24 rounded shadow dark:bg-gray-800 dark:text-white ' + classes}
                onClick={handleClick}
                disabled={!url}>
            {text}
        </button>
    )
}