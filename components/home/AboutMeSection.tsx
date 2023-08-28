export default function AboutMeSection() {

    // Add animation transition from arrow to title
    return (

        <section className="min-h-[980px] max-w-screen bg-base-100">
            <div className="container mx-auto my-40">
                <h2 className="font-bold text-4xl mb-16"><span className="text-primary">About</span> Me</h2>
                <p className="text-xl mb-8">I am a <span className="text-primary">passionate web developer</span> who focus on learning and building high-quality websites.</p>
                <p className="text-xl mb-8">I am also a <span className="text-primary">fresh graduate</span> who just completed my university degree in 2023.</p>
                <p className="text-xl">I am passionate about Programming, Web Technology and Problem Solving.</p>
            </div>
        </section>
    );
}