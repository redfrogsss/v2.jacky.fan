import FloatingArrow from "../FloatingArrow";

export default function HeroSection() {

    return (
        <section
            id="hero"
            className="`md:min-h-[900px] h-screen bg-base-300 text-base-content relative z-10"
        >
            <div className="cotainer mx-auto h-full z-10 absolute w-full">
                <div className="flex flex-col h-full justify-center items-center">
                    <div className="">
                        <h1 className="text-5xl md:text-7xl font-semibold pr-2 leading-snug mb-4 text-center font-dosis text-primary">Jacky FAN</h1>
                        <hr className="w-full block my-auto border-1.5" />

                        <p className="mt-4 text-md md:text-xl text-center typed drop-shadow-md">I build websites and eat computer bugs 😉</p>
                    </div>
                </div>
            </div>
            <FloatingArrow text="About Me" />
        </section>
    );
}