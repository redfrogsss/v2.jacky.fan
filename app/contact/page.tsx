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
                    <p className="text-md md:text-xl mb-4 md:mb-8 leading-8">Feel free to leave me a message and say Hello to me.</p>

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