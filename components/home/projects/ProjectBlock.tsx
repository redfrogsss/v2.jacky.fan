import { ActiveLink } from "@/components/basic";
import Image from "next/image";

export default function ProjectBlock({
    name = "Project Name",
    description = "Description",
    link = "#",
    img = "",
}: {
    name: string;
    description: string;
    link: string;
    img: string;
}) {
    return (
        <ActiveLink href={link}>
            <div className="border-2 border-content-base rounded-2xl bg-base-200 p-4 hover:bg-base-300 transition-all">
                {/* <p className="text-sm my-2">Web App</p> */}
                <div className="relative w-full aspect-video">
                    <Image
                        src={img}
                        alt="alt"
                        layout='fill'
                        objectFit='contain' />
                </div>
                <h3 className="text-md md:text-xl text-center mt-4 font-bold">{name}</h3>
                <p className="text-sm md:text-md text-center mt-4">{description}</p>
            </div>
        </ActiveLink>
        
    );
}