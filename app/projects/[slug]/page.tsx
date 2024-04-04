'use client'

import FadeInBottom from "@/components/animation/FadeInBottom";
import { ActiveLink, Page, SectionContainer } from "@/components/basic";
import { Heading } from "@/components/visual";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { projectInfos } from "@/hooks/useProjectInfo";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Tabs from "@/components/Tabs";
import { LinkIcon } from "@heroicons/react/24/outline";
import { LocomotiveScrollPositionContext } from "@/contexts/LocomotiveScrollPositionContext";

export default function ProjectDescPage({ params }: { params: { slug: string } }) {

    const projectPageNmae = params.slug;
    const [projectData, setProjectData] = useState<any | undefined>(undefined);
    const [docs, setDocs] = useState<any[]>([]);
    const {scrollPos, setScrollPos} = useContext(LocomotiveScrollPositionContext);

    const updateDocs = async (docs : any) => {
        if (!docs) return;

        let newDocsState = [];

        for (let i = 0; i < docs.length; i++) {
            try {
                let md = await fetch(docs[i].link);
                let mdText = await md.text();
                
                newDocsState.push({...docs[i], md: mdText});
            } catch (error) {
                console.error("md not found");
            }
        }
        
        setDocs(newDocsState);
        window.dispatchEvent(new Event('resize'));  // force window resize so locoscroll could update page's height

        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));  // force window resize so locoscroll could update page's height
        }, 1000);
    }

    useEffect(()=>{
        setProjectData(projectInfos.filter(proj => proj.proj == projectPageNmae)[0] ?? undefined);
    }, [])

    useEffect(()=> {
        updateDocs(projectData?.docs);
    }, [projectData])

    // debug 
    // useEffect(()=>{console.log(projectData)}, [projectData])
    // useEffect(()=>{console.log(docs)}, [docs])

    return (
        <Page>
            <SectionContainer extendRightSpacing={true} extraClassName="bg-base-300 -mt-1">
                <FadeInBottom>
                    <div className="mb-4 md:mb-8">
                        <ActiveLink href="/projects" className="btn btn-outline w-fit">
                            <ArrowLeftIcon className="h-[1em]" />
                            Back
                        </ActiveLink>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-x-4 gap-y-8">
                        <div className="w-full lg:w-2/3">
                            <Heading topTitle="My Project" leftTitle={projectData?.name} />
                            <div className="flex flex-row flex-wrap gap-2 mb-4 lg:mb-8">
                                {projectData?.tags.map((tag: any, i: number) => <div className="badge badge-lg badge-primary badge-outline" key={i}>{tag}</div>)}
                                
                            </div>
                            <p className="mb-4 lg:mb-8">
                                {projectData?.desc}
                            </p>
                            <div className="flex flex-row flex-wrap gap-2">
                                { projectData?.links.map((link: any, i: number) => <Link href={link.link} target="_blank" className={`btn ${i == 0 ? "btn-primary" : i == 1 ? "btn-secondary" : "btn-outline" }`} key={i}>
                                    <LinkIcon className="h-[1em]" />
                                    {link.name}
                                </Link>) }
                            </div>

                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="mockup-window border bg-base-300 my-auto shadow-xl transition-all proj-window-3d">
                                <div className="flex justify-center px-4 py-4 bg-base-200">
                                    <figure>
                                    <Image
                                        src={projectData?.img}
                                        width={500}
                                        height={0}
                                        alt="Project Name"
                                        className="object-contain"
                                    />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInBottom>
            </SectionContainer>

            <Tabs data={docs} />

        </Page>
    );
} 