import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import Magnifier3D from "./Magnifier3D";

export default function AboutMeSection() {

    const sentencesClass = `text-md md:text-xl mb-4 md:mb-8`

    // Add animation transition from arrow to title
    return (
        <section id="about" className="min-h-[900px] bg-base-100 relative overflow-x-clip">
            <div className="container mx-auto py-12 md:py-32">
                <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-16">
                    <span className="text-sm md:text-lg flex font-light">
                        <hr className="w-8 md:w-16 inline-block my-auto mr-2 border-base-content" />
                        Know More
                    </span>
                    <span className="text-primary">About</span> Me
                </h2>

                <p className={sentencesClass}>Hello I am Jacky FAN, a <span className="text-primary">front end developer</span> in Hong Kong who focus on building high-quality websites.</p>

                <p className={sentencesClass}>I recently graduated with a <span className="text-primary">Bachelor Degree in Computing</span> from The Hong Kong Polytechnic University.</p>

                {/* <p className={sentencesClass}>I am passionate about Programming, Web Technology and Problem Solving.</p> */}

                <p className={sentencesClass}>I enjoy working on <span className="text-primary">Web Development</span> projects, especially with these technologies:</p>

                <div className="rounded-md glass w-fit flex flex-row flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-8 pb-2 px-4">
                    <div className="my-2 w-16 md:w-24 relative">
                        <img src="/react.svg" alt="React" className="w-full aspect-square" />
                        <p className="text-center">
                            ReactJS
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <img src="/typescript.svg" alt="Typescript" className="w-full aspect-square" />
                        <p className="text-center">
                            TypeScript
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <img src="/html5.svg" alt="HTML5" className="w-full aspect-square" />
                        <p className="text-center">
                            HTML5
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <img src="/css.svg" alt="CSS" className="w-full aspect-square" />
                        <p className="text-center">
                            CSS
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <img src="/mysql.svg" alt="MySQL" className="w-full aspect-square" />
                        <p className="text-center">
                            MySQL
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <img src="/git.svg" alt="Git" className="w-full aspect-square" />
                        <p className="text-center">
                            Git
                        </p>
                    </div>

                    <div className="my-2 w-16 md:w-24 relative">
                        <img src="/docker.svg" alt="Docker" className="w-full aspect-square" />
                        <p className="text-center">
                            Docker
                        </p>
                    </div>

                </div>

                <a href="#work" className="btn btn-neutral">
                    Check out my projects
                    <ArrowSmallDownIcon className="h-6 w-6 text-content" />
                </a>

            </div>
            <Magnifier3D />
        </section >
    );
}