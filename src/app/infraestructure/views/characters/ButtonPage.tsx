type ButtonPageProps = {
    onClick: (url: string) => void;
    url: string | null;
    text: string;
    className?: string;
};
export default function ButtonPage({
                                       onClick, text, url
                                   }: ButtonPageProps) {
    const handleClick = () => {
        onClick(url as string);
    };
    return (
        <button className={'disabled:opacity-50 p-3 !w-24 rounded shadow dark:bg-gray-800 dark:text-white'}
                onClick={handleClick}
                disabled={!url}>
            {text}
        </button>
    )
}