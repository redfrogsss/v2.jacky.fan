import FadeInBottom from "@/components/animation/FadeInBottom";
import { Page, SectionContainer } from "@/components/basic";
import { Heading } from "@/components/visual";
import Image from "next/image";

export default function ProjectDescPage({ params }: { params: { slug: string } }) {

    const projectPageNmae = params.slug;

    return (
        <Page>
            <SectionContainer extendRightSpacing={true} extraClassName="bg-base-300">
                <FadeInBottom>
                    <div className="flex flex-col lg:flex-row gap-x-4 gap-y-8">
                        <div className="w-full lg:w-2/3">
                            <Heading topTitle="Side Project" leftTitle="v2.Jacky.Fan" />
                            <div className="flex flex-row flex-wrap gap-2 mb-4 lg:mb-8">
                                <div className="badge badge-lg badge-primary badge-outline">primary</div>
                                <div className="badge badge-lg badge-primary badge-outline">primary</div>
                                <div className="badge badge-lg badge-primary badge-outline">primary</div>
                                <div className="badge badge-lg badge-primary badge-outline">primary</div>
                                <div className="badge badge-lg badge-primary badge-outline">primary</div>
                                <div className="badge badge-lg badge-primary badge-outline">primary</div>
                                <div className="badge badge-lg badge-primary badge-outline">primary</div>
                            </div>
                            <p className="mb-4 lg:mb-8">
                                v2.jacky.fan is a personal website built with Next.js, Tailwind CSS, and Framer Motion.
                                v2.jacky.fan is a personal website built with Next.js, Tailwind CSS, and Framer Motion.
                                v2.jacky.fan is a personal website built with Next.js, Tailwind CSS, and Framer Motion.
                            </p>
                            <div className="flex flex-row flex-wrap gap-2">
                                <button className="btn btn-primary">GitHub</button>
                                <button className="btn btn-secondary">Secondary</button>
                                <button className="btn btn-outline">Default</button>
                            </div>


                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="mockup-window border bg-base-300 my-auto">
                                <div className="flex justify-center px-4 py-16 bg-base-200">
                                    {/* <figure> */}
                                    {/* <Image
                                        src={img}
                                        fill={true}
                                        alt="Project Name"
                                        className="object-contain"
                                    /> */}
                                    {/* </figure> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInBottom>
            </SectionContainer>

            <SectionContainer extendRightSpacing={true} topSpacing={true} bottomSpacing={false}>
                <FadeInBottom extraClassName="animation-delay-500">
                    <div role="tablist" className="tabs tabs-boxed w-fit mx-auto mb-8 md:mb-16">
                        <a role="tab" className="tab tab-active font-black">Overview</a>
                        <a role="tab" className="tab">Tech Spec</a>
                        <a role="tab" className="tab">Screenshots</a>
                    </div>
                </FadeInBottom>
            </SectionContainer>

            <SectionContainer topSpacing={false} extendRightSpacing={false}>
                <FadeInBottom extraClassName="animation-delay-500">
                    <div id="overview" className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis esse recusandae, nesciunt omnis tempora obcaecati reprehenderit mollitia in ratione dolores, nemo harum. Culpa veniam cumque obcaecati, accusamus dolorem quia.
                            Nulla reprehenderit nesciunt, itaque cum magnam mollitia repellat exercitationem. Quisquam natus ad quas dolorem, ea deserunt omnis repellendus soluta rem, optio maxime eius fuga culpa! Consequatur laboriosam deleniti distinctio provident!
                            Sed, explicabo magni! Placeat perferendis veritatis eaque sapiente autem maxime quaerat. Rem pariatur similique sed distinctio possimus officia maxime consequuntur laborum. Esse atque sapiente corporis officiis culpa aliquam numquam quis.
                            Dolorem aspernatur quo dicta vero totam praesentium reprehenderit minus tenetur voluptates perspiciatis alias laboriosam, iste eveniet, sapiente quos, fugit eligendi temporibus facilis aliquam? Quasi totam adipisci libero illum excepturi natus.
                            Magni necessitatibus aliquid ipsum neque dolores aliquam eius quidem quam nesciunt nihil architecto porro, sapiente, ut laudantium fuga totam at illum rerum. Facilis asperiores voluptatibus optio, cumque quos quaerat eum!
                            Porro earum atque delectus aliquid repudiandae quisquam, ratione ducimus cum necessitatibus cupiditate ipsa obcaecati, illo adipisci excepturi vitae quam facere incidunt. Nostrum maxime maiores temporibus eaque modi veniam aliquid molestias?
                            Quisquam sed voluptatibus sint dolore culpa sunt maiores doloremque? Minima dolorum, quas dolorem ullam, nostrum eaque sint reprehenderit, neque facere suscipit culpa exercitationem fugit. Cupiditate temporibus fugit nisi nostrum officiis!
                            Beatae rem, vel similique quia, mollitia exercitationem amet sint repudiandae dolorum fuga eaque molestiae fugiat eius numquam quae ducimus, minus natus deserunt consectetur voluptates? Ratione dolores placeat nesciunt modi molestias.
                            Labore doloribus, impedit aspernatur enim praesentium recusandae dolores! Laborum adipisci mollitia quis nulla veniam officia sint quaerat tempore, reiciendis iste quisquam ab obcaecati suscipit? Itaque, hic qui! Sunt, enim libero.
                            Sapiente repellat ipsum necessitatibus praesentium officiis id laudantium debitis repudiandae unde odit molestiae laborum delectus earum eos, maxime nemo suscipit velit nostrum quae tenetur, quod doloremque assumenda eligendi illo? Unde.</p>
                    </div>
                </FadeInBottom>
            </SectionContainer>
        </Page>
    );
} 