import FloatingArrow from "./FloatingArrow";

export default function Hero() {
    return (
        <section className="hero min-h-screen bg-base-200 relative">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="artboard artboard-horizontal phone-3 bg-slate-400">736×414</div>
                <div>
                    <h1 className="text-5xl font-bold typed pr-2 leading-snug">Hello, I'm <span className="text-primary font-patrick_hand">Jacky FAN</span></h1>
                    <p className="py-2">I write code and eat computer bugs.</p>
                </div>
            </div>
            <FloatingArrow />
        </section>
    );
}