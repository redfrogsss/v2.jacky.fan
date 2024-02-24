import FadeInBottom from "@/components/animation/FadeInBottom";
import { ActiveLink, Page, SectionContainer } from "@/components/basic";
import { Heading } from "@/components/visual";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Markdown from 'react-markdown';
import MDoverview from './overview.md';

export default function ProjectDescPage({ params }: { params: { slug: string } }) {

    const projectPageNmae = params.slug;
    
    const project = {
        id: 9,
        proj: "v2-jacky-fan",
        name: 'v2.Jacky.Fan',
        tech: 'NextJS',
        date: 'November 2023',
        desc: 'A personal website built with NextJS, Typescript, DaisyUI and TailwindCSS.',
        tags: ['Personal Website', 'Side Project'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/v2.jacky.fan',
        img: "/projects/v2jackyfan/01.webp",  // TODO: Add image
    }

    return (
        <Page>
            <SectionContainer extendRightSpacing={true} extraClassName="bg-base-300 -mt-1">
                <FadeInBottom>
                    <div className="mb-4 md:mb-8">
                        <ActiveLink href="javascript:history.back()" className="btn btn-outline w-fit">
                            <ArrowLeftIcon className="h-[1em]" />
                            Back
                        </ActiveLink>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-x-4 gap-y-8">
                        <div className="w-full lg:w-2/3">
                            <Heading topTitle="Side Project" leftTitle="v2.Jacky.Fan" />
                            <div className="flex flex-row flex-wrap gap-2 mb-4 lg:mb-8">
                                {project.tags.map(tag => <div className="badge badge-lg badge-primary badge-outline">{tag}</div>)}
                            </div>
                            <p className="mb-4 lg:mb-8">
                                {project.desc}
                            </p>
                            <div className="flex flex-row flex-wrap gap-2">
                                <Link href="" className="btn btn-primary">
                                    <LinkIcon className="h-[1em]" />
                                    GitHub
                                </Link>
                            </div>


                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="mockup-window border bg-base-300 my-auto shadow-xl transition-all proj-window-3d">
                                <div className="flex justify-center px-4 py-4 bg-base-200">
                                    <Image
                                        src={"/projects/v2jackyfan/01.webp"}
                                        width={500}
                                        height={0}
                                        alt="Project Name"
                                        className="object-contain"
                                    />
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
                    <article id="overview" className="prose text-md md:text-xl leading-6 md:leading-8 text-base-content">
                        <Markdown>
                            {MDoverview.toString()}
                        </Markdown>
                    </article>
                </FadeInBottom>
            </SectionContainer>
        </Page>
    );
} 