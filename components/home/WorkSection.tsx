import 'swiper/css';
import PreviousWorkSlider from './PreviousWorksSlider';
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";

export default function WorkSection() {
    return (
        <section className="min-h-[980px] max-w-screen bg-base-100 pt-10 relative">
            <div className="container mx-auto my-20">
                <h2 className="font-bold text-5xl mb-16">
                    Check Out My <span className="text-primary">Previous Projects</span>
                    <CursorArrowRaysIcon className="h-10 w-10 text-base-content inline mb-1 ml-2" />
                </h2>
                <p className="text-2xl">I've worked on different projects for school and in my free time, and most of them have involved things related to the web.</p>
            </div>
            <PreviousWorkSlider />
        </section>
    );
}