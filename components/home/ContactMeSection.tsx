export default function ContactMeSection() {
    return (
        <section className="min-h-[900px] bg-base-100 ">
            <div className="container mx-auto py-40">
                <h2 className="font-bold text-5xl mb-16">
                    <span className="text-lg flex font-light">
                        <hr className="w-16 inline-block my-auto mr-2" />
                        Feel Free to
                    </span>
                    <span className="text-primary">Contact</span> Me
                </h2>

                <p className="text-xl mb-8">Feel free to leave me a message and say Hello to me.</p>

                <p className="text-xl mb-8"></p>

                <div className="card w-2/3 bg-base-300 shadow-xl">
                    <div className="card-body">
                        <form action="#" className="">

                            <div className="form-control w-full max-w-xs mb-4">
                                <label className="label">
                                    <span className="label-text text-xl">What is your name?</span>
                                </label>
                                <input type="text" placeholder="Steve Jobs" className="input input-bordered w-full max-w-xs" required />
                                <label className="label">
                                    <span className="label-text-alt text-warning">This field is required.</span>
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs mb-4">
                                <label className="label">
                                    <span className="label-text text-xl">What is your Email?</span>
                                </label>
                                <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                                <label className="label">
                                    <span className="label-text-alt text-warning">This field is required.</span>
                                </label>
                            </div>

                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text text-xl">What is your message?</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Bio" required></textarea>
                                <label className="label">
                                    <span className="label-text-alt text-warning">This field is required.</span>
                                </label>
                            </div>

                            <button type="submit" className="btn btn-neutral">Submit</button>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}