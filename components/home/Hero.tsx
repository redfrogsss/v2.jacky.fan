export default function Hero() {
    return (
        <section className="hero min-h-screen bg-base-200 relative">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                <div className="artboard artboard-horizontal phone-3">736×414</div>
                <div>
                    <h1 className="text-5xl font-bold typed pr-2 leading-snug">Hello, I'm <span className="text-primary font-patrick_hand">Jacky FAN</span></h1>
                    <p className="py-2">I write code and eat computer bugs.</p>
                </div>
            </div>
            <a href="#!" className="flex flex-col justify-center items-center absolute bottom-12 transition-all floating">
                <p>About Me</p>
                <span className="btn btn-circle btn-outline btn-sm border-0 mx-auto">
                    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>

            </a>
        </section>
    );
}