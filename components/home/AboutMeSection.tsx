export default function AboutMeSection() {

    // Add animation transition from arrow to title
    return (
        <section className="min-h-[980px] max-w-screen bg-base-100">
            <div className="container mx-auto my-40">
                <h2 className="font-bold text-5xl mb-16"><span className="text-primary">About</span> Me</h2>
                <p className="text-2xl mb-8">Hello I am Jacky FAN, a <span className="text-primary">front end developer</span> in Hong Kong who focus on building high-quality websites.</p>
                <p className="text-2xl mb-8">I recently graduated with a <span className="text-primary">Bachelor Degree in Computing</span> from The Hong Kong Polytechnic University.</p>
                <p className="text-2xl">I am passionate about Programming, Web Technology and Problem Solving.</p>
            </div>
        </section>
    );
}