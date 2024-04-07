'use client'

import FadeInBottom from "@/components/animation/FadeInBottom";
import { ActiveLink, SectionContainer } from "@/components/basic";
import Image from "next/image";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

export default function Tabs({data} : {data: any[]}) {

    const [activeTab, setActiveTab] = useState<number>(0);
    const tabEl = useRef<HTMLDivElement>(null);


    const selectTab = (e: React.MouseEvent<Element, MouseEvent>, i: number) => {
        e.preventDefault();
        setActiveTab(i);

        window.dispatchEvent(new Event('resize'));  // force window resize so locoscroll could update page's height
    }
    
    useEffect(()=>{
        const onImgLoad = () => {
            window.dispatchEvent(new Event("resize"));
        }

        // update page height for locoscroll when img loaded
        tabEl.current?.querySelectorAll("img").forEach(img => {
            img.addEventListener("load", onImgLoad)
        });

        return () => tabEl.current?.querySelectorAll("img").forEach(img => {
            img.removeEventListener("load", onImgLoad);
        });

    }, [tabEl]);

    return (
        <div ref={tabEl}>
            <SectionContainer extendRightSpacing={true} topSpacing={true} bottomSpacing={false}>
                <FadeInBottom extraClassName="animation-delay-500">
                    <div role="tablist" className="tabs tabs-boxed w-fit mx-auto mb-8 md:mb-16">
                        {data.map((item, i) =>
                            <a role="tab" className={`tab${i == activeTab ? " tab-active font-black" : ""}`} key={i} onClick={(e) => selectTab(e, i)}>{item.name ?? ""}</a>
                        )}
                    </div>
                </FadeInBottom>
            </SectionContainer>

            <SectionContainer topSpacing={false} extendRightSpacing={false}>
                <FadeInBottom extraClassName="animation-delay-500">
                    {data.map((item, i) =>
                        <article id={item.name?.toString().toLowerCase().replace(" ", "-")} className={`prose text-md md:text-xl leading-6 md:leading-8 text-base-content${activeTab == i ? "" : " hidden"}`} key={i}>
                            <Markdown>
                                {item.md}
                            </Markdown>
                        </article>
                    )}
                </FadeInBottom>
            </SectionContainer>
        </div>
    );
}