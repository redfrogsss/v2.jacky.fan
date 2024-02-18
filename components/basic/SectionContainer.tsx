export default function SectionContainer({
    children,
    id = "",
    extraClassName = "",
    topSpacing = true,
    bottomSpacing = true
}: {
    children: React.ReactNode,
    id?: string,
    extraClassName?: string,
    topSpacing?: boolean,
    bottomSpacing?: boolean
}) {

    const getSpacing = () => {

        const desktopSpacing = 16, mobileSpacing = 12;

        if (topSpacing && bottomSpacing) {
            return `py-${mobileSpacing} md:py-${desktopSpacing}`;
        } else if (topSpacing) {
            return `pt-${mobileSpacing} md:pt-${desktopSpacing}`;
        } else if (bottomSpacing) {
            return `pb-${mobileSpacing} md:pt-${desktopSpacing}`;
        } else {
            return "";
        }
    }

    return (
        <section id={id} className={`relative overflow-x-clip ${extraClassName}`}>
            <div className={`container mx-auto ${getSpacing()} xl:pr-[30%] 2xl:pr-[20%]`}>
                {children}
            </div>
        </section>
    );
}