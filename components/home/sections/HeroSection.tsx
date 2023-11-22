import FloatingArrow from "../FloatingArrow";
import FadeInBottom from "../../animation/FadeInBottom";

export default function HeroSection() {

    return (
        <section
            id="hero"
            className="`md:min-h-[900px] h-screen bg-base-300 relative z-10"
        >
            <div className="cotainer mx-auto h-full z-10 absolute w-full">
                <div className="flex flex-col h-full justify-center items-center">
                    <div className="">
                        {/* <FadeInBottom triggerPoint="0%"> */}
                        <h1 className="text-5xl md:text-7xl font-medium pr-2 leading-snug mb-4 text-center font-dosis text-primary drop-shadow">Jacky FAN</h1>
                        <hr className="w-full block my-auto border-1.5" />
                        {/* </FadeInBottom> */}

                        {/* <FadeInBottom triggerPoint="0%" extraClassName="animation-delay-500"> */}
                        <p className="mt-4 text-md md:text-xl text-center typed drop-shadow-md">I build websites and eat computer bugs 😉</p>
                        {/* </FadeInBottom> */}
                    </div>
                </div>
            </div>
            <FloatingArrow text="About Me" />
        </section>
    );
}