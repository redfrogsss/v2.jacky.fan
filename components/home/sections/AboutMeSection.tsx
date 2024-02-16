import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import Magnifier3D from "../Magnifier3D";
import FadeInBottom from "../../animation/FadeInBottom";
import Image from "next/image";

export default function AboutMeSection() {

    const sentencesClass = `text-md md:text-xl mb-4 md:mb-8 leading-8`

    return (
        <section id="about" className="md:min-h-[900px] relative overflow-x-clip">
            <div className="container mx-auto py-12 md:py-32 xl:pr-[30%] 2xl:pr-[20%]">
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
                    <p className={sentencesClass}>Hello I am Jacky FAN, a <span className="text-primary">Frontend Developer</span> in Hong Kong who focus on building web applications.</p>
                </FadeInBottom>

                <FadeInBottom>
                    <p className={sentencesClass}>I recently graduated with a <span className="text-primary">Bachelor Degree in Computing</span> from The Hong Kong Polytechnic University.</p>
                </FadeInBottom>

                {/* <p className={sentencesClass}>I am passionate about Programming, Web Technology and Problem Solving.</p> */}

                <FadeInBottom>
                    <p className={sentencesClass}>I enjoy working on <span className="text-primary">Web Development</span> projects, especially with these technologies:</p>
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
                    <a href="#work" className="btn btn-neutral">
                        Check out my projects
                        <ArrowSmallDownIcon className="h-6 w-6 text-content" />
                    </a>
                </FadeInBottom>

            </div>
            <Magnifier3D />
        </section >
    );
}