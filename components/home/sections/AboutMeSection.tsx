import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import Magnifier3D from "../Magnifier3D";
import FadeInBottom from "../../animation/FadeInBottom";
import Image from "next/image";
import { SectionContainer, ActiveLink } from "@/components/basic";
import Link from "next/link";

export default function AboutMeSection() {

    const sentencesClass = `text-md md:text-xl mb-4 md:mb-8 leading-8`

    return (
        <SectionContainer id="about" extraClassName="min-h-[900px] md:mt-16">
            <FadeInBottom>
                <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-16">
                    <span className="text-sm md:text-lg flex font-light drop-shadow-sm">
                        <hr className="w-8 md:w-16 inline-block my-auto mr-2 border-base-content" />
                        Know More
                    </span>
                    <span className="text-primary drop-shadow">About</span> Me
                </h2>
            </FadeInBottom>


            <FadeInBottom>
                <p className={sentencesClass}>I am a <span className="text-primary">Frontend Developer</span> with a passion for building <span className="text-primary">attractive and interactive</span> websites.</p>
            </FadeInBottom>

            <FadeInBottom>
                <p className={sentencesClass}>I graduated with a <span className="text-primary">Bachelor Degree in Computing</span> from <Link target="_blank" href="https://www.polyu.edu.hk/" className="underline hover:no-underline transition-all">The Hong Kong Polytechnic University</Link>.</p>
            </FadeInBottom>

            {/* <p className={sentencesClass}>I am passionate about Programming, Web Technology and Problem Solving.</p> */}

            <FadeInBottom>
                <p className={sentencesClass}>I love working on <span className="text-primary">Web Development</span> projects with these technologies:</p>
            </FadeInBottom>

            <FadeInBottom>
                <div className="rounded-md glass w-fit flex flex-row flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-8 pb-2 px-4">
                    <div className="my-2 w-16 md:w-24 relative">
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
                    </div>

                </div>
            </FadeInBottom>

            <FadeInBottom>
                <ActiveLink href="/about" className="btn btn-neutral">
                    Learn More About Me
                    <ArrowSmallDownIcon className="h-6 w-6 text-content -rotate-90" />
                </ActiveLink>
            </FadeInBottom>

            <Magnifier3D />
        </SectionContainer>
    );
}