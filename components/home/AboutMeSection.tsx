import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";

export default function AboutMeSection() {

    // Add animation transition from arrow to title
    return (
        <section className="min-h-[900px] bg-base-100 relative">
            <div className="container mx-auto py-40">

                <h2 className="font-bold text-5xl mb-16">
                    <span className="text-lg flex font-light">
                        <hr className="w-16 inline-block my-auto mr-2" />
                        Know More
                    </span>
                    <span className="text-primary">About</span> Me
                </h2>

                <p className="text-xl mb-8">Hello I am Jacky FAN, a <span className="text-primary">front end developer</span> in Hong Kong who focus on building high-quality websites.</p>

                <p className="text-xl mb-8">I recently graduated with a <span className="text-primary">Bachelor Degree in Computing</span> from The Hong Kong Polytechnic University.</p>

                {/* <p className="text-xl mb-8">I am passionate about Programming, Web Technology and Problem Solving.</p> */}

                <p className="text-xl mb-8">I enjoy working on <span className="text-primary">Web Development</span> projects, especially with these technologies:</p>

                <div className="rounded-md glass w-fit flex flex-row gap-4 mb-8 pb-2 px-4">
                    <div className="w-30">
                        <img src="/react.svg" alt="React" className="w-24 h-24" />
                        <p className="text-center">
                            ReactJS
                        </p>
                    </div>

                    <div className="w-30">
                        <img src="/typescript.svg" alt="Typescript" className="w-24 h-24" />
                        <p className="text-center">
                            TypeScript
                        </p>
                    </div>

                    <div className="w-30">
                        <img src="/html5.svg" alt="HTML5" className="w-24 h-24" />
                        <p className="text-center">
                            HTML5
                        </p>
                    </div>

                    <div className="w-30">
                        <img src="/css.svg" alt="CSS" className="w-24 h-24" />
                        <p className="text-center">
                            CSS
                        </p>
                    </div>

                    <div className="w-30">
                        <img src="/mysql.svg" alt="MySQL" className="w-24 h-24" />
                        <p className="text-center">
                            MySQL
                        </p>
                    </div>

                    <div className="w-30">
                        <img src="/git.svg" alt="Git" className="w-24 h-24" />
                        <p className="text-center">
                            Git
                        </p>
                    </div>

                    <div className="w-30">
                        <img src="/docker.svg" alt="Docker" className="w-24 h-24" />
                        <p className="text-center">
                            Docker
                        </p>
                    </div>

                </div>

                <button className="btn btn-neutral">
                    Check out my projects
                    <ArrowSmallDownIcon className="h-6 w-6 text-base-content" />
                </button>

            </div>
        </section >
    );
}