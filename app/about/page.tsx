import { Navbar, Footer } from "@/components";
import FadeInBottom from "@/components/animation/FadeInBottom";
import LocomotiveScrollWrappper from '@/components/animation/LocomotiveScrollWrapper'

export default function AboutPage() {
    return (
        <main className="relative">
            <Navbar />

            <LocomotiveScrollWrappper>
                <section className="md:min-h-[900px] relative overflow-x-clip">
                    <div className="container mx-auto py-12 md:py-32 xl:pr-[30%] 2xl:pr-[20%]">
                        <FadeInBottom>
                            <h1 className="font-bold text-3xl md:text-5xl mb-8 md:mb-16">
                                <span className="text-sm md:text-lg flex font-light drop-shadow-sm">
                                    <hr className="w-8 md:w-16 inline-block my-auto mr-2 border-base-content" />
                                    Know More
                                </span>
                                <span className="text-primary drop-shadow">About</span> Me
                            </h1>

                        </FadeInBottom>

                        <FadeInBottom>
                            <p className="text-md md:text-xl mb-4 md:mb-8 leading-8">
                                Hi There. My name is Jacky FAN, and I build websites and eat computer bugs. 😉
                            </p>

                            <h2 className="font-bold text-xl md:text-3xl mt-8 md:mt-16 mb-4 md:mb-8">🤔 Who am I?</h2>
                            <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                                I'm currently a Frontend Developer in Hong Kong with a passion for building attractive and interactive websites. With a background in Bachelor Degree in Computing, I bring a unique blend of skills ranging from HTML, CSS, Typescript, ReactJS to solving programming problems, or communicating with teammates.
                            </p>

                            <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                                I believe in the power of continuous learning and growth, and I'm always excited to dive into new technologies and methodologies to expand my knowledge base.
                            </p>

                            <h2 className="font-bold text-xl md:text-3xl mt-8 md:mt-16 mb-4 md:mb-8">🌐 Languages & Tools</h2>

                            <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                                I'm passionate about diving into Web Development projects and constantly exploring new technologies to enhance my skills. Here's a overview of the tech stack I've been using in my projects:
                            </p>

                            <ul className="list-disc text-md md:text-xl ps-8 !leading-8 mb-4 md:mb-8">
                                <li>
                                    JavaScript
                                </li>
                                <li>
                                    TypeScript
                                </li>
                                <li>
                                    ReactJS
                                </li>
                                <li>
                                    JQuery
                                </li>
                                <li>
                                    CSS3
                                </li>
                                <li>
                                    HTML5
                                </li>
                                <li>
                                    etc.
                                </li>
                            </ul>


                            <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                                💡 I'm also interested in Mobile App Development.
                            </p>

                            <h2 className="font-bold text-xl md:text-3xl mt-8 md:mt-16 mb-4 md:mb-8">📽️ Projects</h2>
                            <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                                I've had the fantastic opportunity to work on various projects, where I've learned and honed my skills. Here are a few highlights:
                            </p>

                            <ul className="list-disc text-md md:text-xl ps-8 !leading-8 mb-4 md:mb-8">
                                <li><a className="underline text-blue-500 hover:text-blue-700 transition-all" href="https://github.com/redfrogsss/nuxt-blog">Nuxt Blog</a> - My personal blog</li>
                                <li><a className="underline text-blue-500 hover:text-blue-700 transition-all" href="https://github.com/redfrogsss/v2.jacky.fan">v2.jacky.fan</a> - My personal website</li>
                                <li><a className="underline text-blue-500 hover:text-blue-700 transition-all" href="https://github.com/redfrogsss/CRS">CRS Web</a> - Web-based Conversational Recommender System</li>
                                <li><a className="underline text-blue-500 hover:text-blue-700 transition-all" href="https://github.com/redfrogsss/selfremind">selfremind</a> - Selfhosted To-do List Manager</li>
                                <li><a className="underline text-blue-500 hover:text-blue-700 transition-all" href="https://github.com/redfrogsss/RedStream">RedStream</a> - Movie Streaming Website</li>
                                <li><a className="underline text-blue-500 hover:text-blue-700 transition-all" href="https://github.com/redfrogsss/gdsc-portfolio">gdsc-portfolio</a> - Simple Portfolio Website</li>
                                <li><a className="underline text-blue-500 hover:text-blue-700 transition-all" href="https://github.com/redfrogsss/attendance-system-java">attendance-system</a> - Student Attendance System</li>
                            </ul>

                            <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                                <a href="#!" className="underline text-blue-500 hover:text-blue-700 transition-all">View All of My Project Here</a>
                            </p>

                            <h2 className="font-bold text-xl md:text-3xl mt-8 md:mt-16 mb-4 md:mb-8">📫 Contact Me</h2>

                            <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                                Please feel free to reach me through any of these platforms:
                            </p>

                            <ul className="list-disc text-md md:text-xl ps-8 !leading-8 mb-4 md:mb-8">
                                <li><a href="https://github.com/redfrogsss" className="underline text-blue-500 hover:text-blue-700 transition-all">GitHub</a></li>
                                <li><a href="mailto:contact@jacky.fan" className="underline text-blue-500 hover:text-blue-700 transition-all">Email</a></li>
                                <li><a href="https://jacky.fan" className="underline text-blue-500 hover:text-blue-700 transition-all">Website</a></li>
                                <li><a href="https://www.linkedin.com/in/jacky-fan-dev/" className="underline text-blue-500 hover:text-blue-700 transition-all">LinkedIn</a></li>
                            </ul>
                            
                        </FadeInBottom>
                    </div>
                </section>
                
                <Footer />
            </LocomotiveScrollWrappper>
        </main>
    );
}