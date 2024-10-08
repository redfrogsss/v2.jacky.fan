import { ArrowLongDownIcon } from "@heroicons/react/24/outline";

interface FloatingArrowProps {
    text: string;
    link: string;
}

export default function FloatingArrow(props: FloatingArrowProps) {

    return (
        <a
            href={props.link}
            className="flex flex-col justify-center items-center absolute bottom-[10%] transition-all w-fit z-20 left-0 right-0 mx-auto animate-bounce"
            aria-label={props.text}
        >
            <span className="btn btn-circle btn-outline btn-sm border-0 mx-auto">
                <ArrowLongDownIcon className="h-6 w-6 text-base-content hover:text-base-300" />
            </span>
        </a>
    );

}