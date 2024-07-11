import 'swiper/css';
import PreviousWorkSlider from '../PreviousWorksSlider';
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import FadeInBottom from '../../animation/FadeInBottom';
import { SectionContainer, ActiveLink } from "@/components/basic";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";

export default function WorkSection() {
    return (
        <>
            <SectionContainer id="projects" bottomSpacing={false}>
                <FadeInBottom>
                    <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-16 drop-shadow">
                        <span className="text-sm md:text-lg flex font-light drop-shadow-sm">
                            <hr className="w-8 md:w-16 inline-block my-auto mr-2 border-base-content" />
                            Checkout
                        </span>
                        My <span className="text-primary">Projects</span>
                        <CursorArrowRaysIcon className="w-6 h-6 md:h-10 md:w-10 text-base-content inline ml-2" />
                    </h2>
                </FadeInBottom>

                <FadeInBottom>
                    <p className="text-md md:text-xl mb-4 md:mb-8 leading-8">I&amp;m passionate about diving into various projects and constantly exploring new technologies to enhance my skills.</p>
                </FadeInBottom>
            </SectionContainer>

            <FadeInBottom>
                <PreviousWorkSlider />
            </FadeInBottom>
        </>
    );
}