type HeaderProps = {
    title: string;
    className?: string;
};
export default function Header({
                                   title, className
                               }: HeaderProps) {
    return (
        <header>
            <span>
                <h1 className={'text-4xl font-bold text-center ' + className}>
                    {title}
                </h1>
            </span>
        </header>
    )
}