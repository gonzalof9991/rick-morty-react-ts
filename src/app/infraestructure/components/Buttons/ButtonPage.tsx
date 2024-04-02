type ButtonPageProps = {
    onClick: (url: string) => void;
    url: string | null;
    text: string;
    className?: string;
};
export default function ButtonPage({
                                       onClick, text, url, className
                                   }: ButtonPageProps) {
    const handleClick = () => {
        onClick(url as string);
    };
    return (
        <button className={'disabled:opacity-50 p-1 !w-24 rounded shadow dark:bg-gray-800 dark:text-white ' + className}
                onClick={handleClick}
                disabled={!url}>
            {text}
        </button>
    )
}