import 'swiper/css';
import PreviousWorkSlider from './PreviousWorksSlider';
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import FadeInBottom from '../animation/FadeInBottom';

export default function WorkSection() {
    return (
        <section id="work" className="md:min-h-[980px] bg-base-100 pt-10 relative">
            <div className="container mx-auto pt-0 md:pt-12">
                <FadeInBottom>
                    <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-16 drop-shadow">
                        <span className="text-sm md:text-lg flex font-light drop-shadow-sm">
                            <hr className="w-8 md:w-16 inline-block my-auto mr-2 border-base-content" />
                            Checkout
                        </span>
                        My <span className="text-primary">Previous Projects</span>
                        <CursorArrowRaysIcon className="w-6 h-6 md:h-10 md:w-10 text-base-content inline ml-2" />
                    </h2>
                </FadeInBottom>

                <FadeInBottom>
                    <p className="text-md md:text-xl mb-4 md:mb-8">I have worked on different projects for school and in my free time, and most of them have involved things related to the web.</p>
                </FadeInBottom>
            </div>

            <FadeInBottom>
                <PreviousWorkSlider />
            </FadeInBottom>
        </section>
    );
}