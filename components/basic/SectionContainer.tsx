export default function SectionContainer({
    children,
    id = "",
    extraClassName = "",
    topSpacing = true,
    bottomSpacing = true,
    extendRightSpacing = false
}: {
    children?: React.ReactNode,
    id?: string,
    extraClassName?: string,
    topSpacing?: boolean,
    bottomSpacing?: boolean
    extendRightSpacing?: boolean
}) {

    const getSpacing = () => {

        if (topSpacing && bottomSpacing) {
            return `py-12 md:py-16`;
        } else if (topSpacing) {
            return `pt-12 md:pt-16`;
        } else if (bottomSpacing) {
            return `pb-12 md:pb-16`;
        } else {
            return "";
        }
    }

    const getRightSpacing = () => {
        if (!extendRightSpacing) {
            return "xl:pr-[30%] 2xl:pr-[20%]";
        } else {
            return "";
        }
    }

    return (
        <section id={id} className={`relative overflow-x-clip ${extraClassName}`}>
            <div className={`container mx-auto ${getSpacing()} ${getRightSpacing()}`}>
                {children}
            </div>
        </section>
    );
}