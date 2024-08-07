import FadeInBottom from "../../animation/FadeInBottom";

export default function BottomSection() {
    return (
        <section className="lg:min-h-[200px] bg-base-100">
            <FadeInBottom>
                <div className="container mx-auto py-12 lg:py-30">
                    <div className="flex flex-row justify-center">
                        <hr className="hidden xl:inline-block my-auto w-1/6 mr-4 border-base-content" />
                        <p className="text-md md:text-xl leading-8">
                            Thanks for <span className="text-primary"> scrolling </span>and <span className="text-primary">visiting</span> my website.
                        </p>
                        <hr className="hidden xl:inline-block my-auto w-1/6 ml-4 border-base-content" />
                    </div>
                </div>
            </FadeInBottom>
        </section>
    );
}