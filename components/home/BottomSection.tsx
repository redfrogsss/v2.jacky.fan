export default function BottomSection() {
    return (
        <section className="min-h-[200px] bg-base-100">
            <div className="container mx-auto py-12 md:py-40">
                <div className="flex flex-row justify-center">
                    <hr className="hidden xl:inline-block my-auto w-1/6 mr-4 border-base-content" />
                    <p className="text-md md:text-xl">
                        That's all. Thanks for <span className="text-primary"> scrolling </span>and <span className="text-primary">visiting</span> my website.
                    </p>
                    <hr className="hidden xl:inline-block my-auto w-1/6 ml-4 border-base-content" />
                </div>
            </div>
        </section>
    );
}