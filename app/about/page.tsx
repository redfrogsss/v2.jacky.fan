import FadeInBottom from "@/components/animation/FadeInBottom";
import { ActiveLink, Page, SectionContainer } from "@/components/basic";
import BgHeading from "@/components/visual/bgHeading";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
    return (
        <>
            <Page>
                <SectionContainer>
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
                            Hi There. My name is Jacky FAN. I build websites and eat computer bugs. 😉
                        </p>

                        <h2 className="font-bold text-xl md:text-3xl mt-8 md:mt-16 mb-4 md:mb-8">🤔 Who am I?</h2>
                        <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                            I&apos;m currently a Frontend Developer in Hong Kong with a passion for building attractive and interactive websites. With a background in Bachelor Degree in Computing, I bring a unique blend of skills ranging from HTML, CSS, Typescript, ReactJS to solving programming problems, or communicating with teammates.
                        </p>

                        <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                            I believe in the power of continuous learning and growth, and I&apos;m always excited to dive into new technologies and methodologies to expand my knowledge base.
                        </p>

                        <h2 className="font-bold text-xl md:text-3xl mt-8 md:mt-16 mb-4 md:mb-8">🌐 Languages & Tools</h2>

                        <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                            I&apos;m passionate about diving into Web Development projects and constantly exploring new technologies to enhance my skills. Here&apos;s a overview of the tech stack I&apos;ve been using in my projects:
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
                            💡 I&apos;m also interested in Mobile App Development.
                        </p>

                        <h2 className="font-bold text-xl md:text-3xl mt-8 md:mt-16 mb-4 md:mb-8">📽️ Projects</h2>
                        <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                            I&apos;ve had the fantastic opportunity to work on various projects, where I&apos;ve learned and honed my skills. Here are a few highlights:
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
                            <ActiveLink href="/projects" className="btn btn-neutral">
                                Checkout My Projects
                                <ArrowSmallDownIcon className="h-6 w-6 text-content -rotate-90" />
                            </ActiveLink>
                        </p>

                    </FadeInBottom>


                    {/* <FadeInBottom>
                    <h2 className="font-bold text-xl md:text-3xl mt-8 md:mt-16 mb-4 md:mb-8">💼 Experience</h2>

                    <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                        I&apos;ve been fortunate to work on different projects, where I&apos;ve learned and improved my skills. Here are some key highlights:
                    </p>

                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <time className="font-mono italic">July 2019</time>
                                <div className="text-lg font-black">IT Technician Trainee</div>
                                <div className="text-sm italic mb-2">CCC Tam Lee Lai Fun Memorial Secondary School</div>
                                I gained hands-on experience troubleshooting hardware and software issues, assisting with computer system upgrade, setting up information kiosk, and collaborating with team members to provide efficient technical support.
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic">June 2022</time>
                                <div className="text-lg font-black">Summer Intern</div>
                                <div className="text-sm italic mb-2">Consumer Council</div>
                                I contributed to various projects, gained practical experience in developing Intranet CMS enhancement and inventory management enhancement using PHP, while also conducting testing on Intranet features utilizing Selenium.
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <time className="font-mono italic">July 2023</time>
                                <div className="text-lg font-black">Frontend Developer</div>
                                <div className="text-sm italic mb-2">theOrigo Ltd.</div>
                                I implemented intuitive user interfaces and interactive web experiences using HTML, CSS, JavaScript amd JQuery, while also collaborating with design and backend teams to ensure seamless integration and functionality across multiple platforms.
                            </div>
                            <hr />
                        </li>
                    </ul>
                </FadeInBottom> */}


                </SectionContainer>
            </Page>
            <BgHeading title="About Me" />
        </>

    );
}