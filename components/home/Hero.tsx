export default function Hero() {
    return (
        <section className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold typed pr-2">Hello, I'm <span className="text-primary">Jacky FAN</span></h1>
                    <p className="py-6">I write code and eat computer bugs.</p>
                    <button className="btn btn-primary">Checkout What I Did</button>
                </div>
            </div>
        </section>
    );
}