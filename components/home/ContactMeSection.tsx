import Letter3D from './Letter3D';
import ContactForm from "./ContactForm";

export default function ContactMeSection() {
    return (
        <section className="min-h-[900px] bg-base-100 relative overflow-x-clip">
            <div className="container mx-auto py-12 md:py-32">
                <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-16">
                    <span className="text-sm md:text-lg flex font-light drop-shadow-sm">
                        <hr className="w-8 md:w-16 inline-block my-auto mr-2 border-base-content" />
                        Feel Free to
                    </span>
                    <span className="text-primary drop-shadow">Contact</span> Me
                </h2>

                <p className="text-md md:text-xl mb-4 md:mb-8">Feel free to leave me a message and say Hello to me.</p>

                <div className="card w-full xl:w-2/3 bg-base-300 shadow-xl">
                    <div className="card-body">
                        <ContactForm />
                    </div>
                </div>

            </div>

            <Letter3D />
        </section>
    );
}