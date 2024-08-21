import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import Magnifier3D from "../Magnifier3D";
import FadeInBottom from "../../animation/FadeInBottom";
import Image from "next/image";
import { SectionContainer, ActiveLink } from "@/components/basic";
import Link from "next/link";

interface AboutMeSectionProps {
    topTitle: string;
    leftTitle: string;
    rightTitle: string;
    contents: any;
    techs: {
        title: string;
        icon: any;
    }[];
    btnText: string;
    btnLink: string;
}

export default function AboutMeSection(props: AboutMeSectionProps) {

    const sentencesClass = `text-md md:text-xl mb-4 md:mb-8 leading-8`

    return (
        <SectionContainer id="about" extraClassName="min-h-[900px] md:mt-8 py-6 md:py-16">
            <FadeInBottom>
                <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-16">
                    <span className="text-sm md:text-lg flex font-light drop-shadow-sm">
                        <hr className="w-8 md:w-16 inline-block my-auto mr-2 border-base-content" />
                        {props.topTitle}
                    </span>
                    <span className="text-primary drop-shadow">{props.leftTitle}</span> {props.rightTitle}
                </h2>
            </FadeInBottom>

            <FadeInBottom>
                 <div className="prose max-w-none prose-p:text-base-content prose-p:text-md prose-p:md:text-xl prose-p:mb-4 prose-p:md:mb-8 prose-p:leading-8 prose-strong:text-primary prose-strong:font-normal">
                    {props.contents}
                 </div>
            </FadeInBottom>

            <FadeInBottom>
                <div className="rounded-md glass w-fit flex flex-row flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-8 pb-2 px-4">
                    {/* <div className="my-2 w-16 md:w-24 relative">
                        <Image src="/react.svg" alt="React" className="w-full aspect-square" width={64} height={64} />
                        <p className="text-center drop-shadow-sm">
                            ReactJS
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <Image src="/typescript.svg" alt="Typescript" className="w-full aspect-square" width={64} height={64} />
                        <p className="text-center drop-shadow-sm">
                            TypeScript
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <Image src="/html5.svg" alt="HTML5" className="w-full aspect-square" width={64} height={64} />
                        <p className="text-center drop-shadow-sm">
                            HTML5
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <Image src="/css.svg" alt="CSS" className="w-full aspect-square" width={64} height={64} />
                        <p className="text-center drop-shadow-sm">
                            CSS
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <Image src="/mysql.svg" alt="MySQL" className="w-full aspect-square" width={64} height={64} />
                        <p className="text-center drop-shadow-sm">
                            MySQL
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <Image src="/git.svg" alt="Git" className="w-full aspect-square" width={64} height={64} />
                        <p className="text-center drop-shadow-sm">
                            Git
                        </p>
                    </div> */}

                    {props.techs.map((tech, index) => (
                        <div key={index} className="my-2 w-16 md:w-24 relative">
                            <Image src={`${process.env.STRAPI_URL}${tech.icon.data.attributes.url}`} alt={tech.title} className="w-full aspect-square" width={64} height={64} />
                            {/* <img src={`${process.env.STRAPI_URL}${tech.icon.data.attributes.url}`} alt={`${tech.title}`} className="w-full aspect-square" width={64} height={64} /> */}
                            <p className="text-center drop-shadow-sm">
                                {tech.title}
                            </p>
                        </div>
                    ))}

                </div>
            </FadeInBottom>

            <FadeInBottom>
                <ActiveLink href={props.btnLink} className="btn btn-neutral">
                    {props.btnText}
                    <ArrowSmallDownIcon className="h-6 w-6 text-content -rotate-90" />
                </ActiveLink>
            </FadeInBottom>

            <Magnifier3D />
        </SectionContainer>
    );
}