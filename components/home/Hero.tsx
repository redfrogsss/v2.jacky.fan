import FloatingArrow from "./FloatingArrow";

export default function Hero() {
    return (
        <section className="h-screen min-h-[900px] bg-base-200 relative">
            <div className="cotainer mx-auto h-full">
                <div className="flex flex-col h-full justify-center items-center">
                    <div className="">
                        <h1 className="text-7xl font-bold pr-2 leading-snug mb-4 text-center font-patrick_hand text-primary">Jacky FAN</h1>
                        <hr className="w-full block my-auto border-1.5" />
                        <p className="mt-4 text-xl text-center">I build websites and eat computer bugs.</p>
                    </div>
                </div>
            </div>
            <FloatingArrow text="About Me" />
        </section>
    );
}