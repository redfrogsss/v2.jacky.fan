export default function BgHeading({ title = "" }: { title?: string }) {

    const displayTitle = title.split(" ");

    return (
        <div className="hidden xl:flex absolute inset-0 -z-10 items-center justify-end w-screen h-screen opacity-10 pointer-events-none pr-8">
            <span className="text-7xl 2xl:text-8xl text-primary block w-fit h-fit font-bold text-outlined text-right">{displayTitle.map((word, i) => <span className="block">{word}</span>)}</span>
        </div>
    );
}