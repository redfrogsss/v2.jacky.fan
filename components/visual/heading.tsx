export default function Heading({
    topTitle,
    leftTitle = "",
    rightTitle = "",
    colorReverse
}: {
    topTitle?: string;
    leftTitle?: string;
    rightTitle?: string;
    colorReverse?: boolean
}) {
    return (
        <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-16">
            {topTitle &&
                <span className="text-sm md:text-lg flex font-light drop-shadow-sm">
                    <hr className="w-8 md:w-16 inline-block my-auto mr-2 border-base-content" />
                    {topTitle}
                </span>
            }
            {colorReverse ? 
                <>{leftTitle} <span className="text-primary drop-shadow">{rightTitle}</span></>
            :
                <><span className="text-primary drop-shadow">{leftTitle}</span> {rightTitle}</>
            }
        </h2>
    );

}