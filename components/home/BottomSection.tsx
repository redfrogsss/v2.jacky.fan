export default function BottomSection() {
    return (
        <section className="min-h-[200px] bg-base-100">
            <div className="container mx-auto py-10">
                <p className="flex flex-row justify-center text-xl">
                    <hr className="inline-block my-auto w-1/4 mr-4" />
                    That's all. Thanks for&nbsp;<span className="text-primary"> scrolling </span>&nbsp;and&nbsp;<span className="text-primary">visiting</span>&nbsp;my website.
                    <hr className="inline-block my-auto w-1/4 ml-4" />
                </p>
            </div>
        </section>
    );
}