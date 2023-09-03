import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";

export default function AboutMeSection() {

    // Add animation transition from arrow to title
    return (
        <section className="max-w-screen h-screen min-h-[900px] bg-base-100 relative">
            <div className="container mx-auto py-40">

                <h2 className="font-bold text-5xl mb-16">
                    <span className="text-lg flex font-light">
                        <hr className="w-16 inline-block my-auto mr-2" />
                        Know More
                    </span>
                    <span className="text-primary">About</span> Me
                </h2>

                <p className="text-2xl mb-8">Hello I am Jacky FAN, a <span className="text-primary">front end developer</span> in Hong Kong who focus on building high-quality websites.</p>

                <p className="text-2xl mb-8">I recently graduated with a <span className="text-primary">Bachelor Degree in Computing</span> from The Hong Kong Polytechnic University.</p>

                <p className="text-2xl mb-8">I am passionate about Programming, Web Technology and Problem Solving.</p>

                <button className="btn btn-neutral">
                    Check out my projects
                    <ArrowSmallDownIcon className="h-6 w-6 text-base-content" />
                </button>

            </div>
        </section >
    );
}