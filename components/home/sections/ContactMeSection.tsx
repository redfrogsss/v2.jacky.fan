import Letter3D from '../Letter3D';
import ContactForm from "../ContactForm";
import FadeInBottom from '../../animation/FadeInBottom';
import { SectionContainer } from '@/components/basic';

export default function ContactMeSection() {
    return (
        <SectionContainer>
            <FadeInBottom>
                <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-16">
                    <span className="text-sm md:text-lg flex font-light drop-shadow-sm">
                        <hr className="w-8 md:w-16 inline-block my-auto mr-2 border-base-content" />
                        Feel Free to
                    </span>
                    <span className="text-primary drop-shadow">Contact</span> Me
                </h2>
            </FadeInBottom>

            <FadeInBottom>
                <p className="text-md md:text-xl mb-4 md:mb-8 leading-8">Feel free to leave me a message and say Hello to me.</p>
            </FadeInBottom>

            <FadeInBottom>
                <div className="card w-full bg-base-300 shadow-xl">
                    <div className="card-body">
                        <ContactForm />
                    </div>
                </div>
            </FadeInBottom>
            <Letter3D />
        </SectionContainer>
    );
}