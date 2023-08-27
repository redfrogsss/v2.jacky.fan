import 'swiper/css';
import PreviousWorkSlider from './PreviousWorksSlider';

export default function Works() {
    return (
        <section className="min-h-screen max-w-screen bg-base-100 pt-10 relative">
            <div className="container mx-auto my-20">
                <h2 className="font-bold text-4xl mb-2">Check Out My <span className="text-primary">Previous Works</span></h2>
                <p>I have done various projects for school and hobbies. Most of them are related to Web.</p>
            </div>
            <PreviousWorkSlider />
        </section>
    );
}