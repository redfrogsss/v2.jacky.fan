import FadeInBottom from "@/components/animation/FadeInBottom";
import { Page, SectionContainer } from "@/components/basic";
import { ContactForm, Letter3D } from "@/components/home";
import { Heading } from "@/components/visual";

export default function ContactPage() {
    return (
        <Page>
            <SectionContainer>
                <FadeInBottom>
                    <Heading topTitle="Feel Free to" leftTitle="Contact" rightTitle="Me" />
                </FadeInBottom>

                <FadeInBottom>

                    <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">
                        Please feel free to reach me through any of these platforms:
                    </p>

                    <ul className="list-disc text-md md:text-xl ps-8 !leading-8 mb-4 md:mb-8">
                        <li><a href="https://github.com/redfrogsss" className="underline text-blue-500 hover:text-blue-700 transition-all">GitHub</a></li>
                        <li><a href="mailto:contact@jacky.fan" className="underline text-blue-500 hover:text-blue-700 transition-all">Email</a></li>
                        <li><a href="https://jacky.fan" className="underline text-blue-500 hover:text-blue-700 transition-all">Website</a></li>
                        <li><a href="https://www.linkedin.com/in/jacky-fan-dev/" className="underline text-blue-500 hover:text-blue-700 transition-all">LinkedIn</a></li>
                    </ul>

                    <p className="text-md md:text-xl mb-4 md:mb-8 !leading-8">or, you can also fill in this contact form too:</p>
                </FadeInBottom>

                <FadeInBottom>
                    <p className="font-bold text-xl md:text-3xl mt-8 md:mt-16 mb-4 md:mb-8">📫 Contact Me</p>
                    <div className="card w-full bg-base-300 shadow-xl">
                        <div className="card-body">
                            <ContactForm />
                        </div>
                    </div>
                </FadeInBottom>

                <Letter3D />
            </SectionContainer>
        </Page>
    );
}