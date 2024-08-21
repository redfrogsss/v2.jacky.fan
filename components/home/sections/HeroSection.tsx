import FloatingArrow from "../FloatingArrow";

export default function HeroSection({ title, desc, arrowText = "", arrowLink = "" }: { title: string, desc: string, arrowText: string, arrowLink: string }) {

    return (
        <section
            id="hero"
            className="`md:min-h-[900px] h-screen bg-base-300 text-base-content relative z-10"
        >
            <div className="cotainer mx-auto h-full z-10 absolute w-full">
                <div className="flex flex-col h-full justify-center items-center">
                    <div className="">
                        <h1 className="text-5xl md:text-7xl font-semibold pr-2 leading-snug mb-4 text-center font-dosis text-primary">{title}</h1>
                        <hr className="w-full block my-auto border-1.5" />

                        <p className="mt-4 text-md md:text-xl text-center typed drop-shadow-md">{desc}</p>
                    </div>
                </div>
            </div>
            <FloatingArrow text={arrowText} link={arrowLink} />
        </section>
    );
}