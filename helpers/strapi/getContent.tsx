import FadeInBottom from "@/components/animation/FadeInBottom";
import { getRichTextBlocks } from "./getRichTextBlocks";
import { Heading } from "@/components/visual";
import Link from "next/link";
import { ActiveLink, SectionContainer } from "@/components/basic";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import { ProjectGrid } from "@/components/home/projects";
import { ContactForm, Letter3D } from "@/components/home";

function getContents(data: any) {

    if (!data) return <></>

    return data.map((block: any) => {
        if (block.__component === "page.page-rich-text") {

            const classes = [
                "prose max-w-none", // prose class
                "prose-p:text-md prose-p:md:text-xl prose-p:md:8 prose-p:!leading-8 prose-p:text-base-content", // p class
                "prose-h2:text-xl prose-h2:md:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:md:mt-16 prose-h2:mb-4 prose-h2:md:mb-8", // h2 class
                "prose-h3:text-lg prose-h3:md:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:md:mt-16 prose-h3:mb-4 prose-h3:md:mb-8", // h3 class
                "prose-ul:list-disc prose-ul:text-md prose-ul:md:text-xl prose-ul:ps-8 prose-ul:!leading-8 prose-ul:mb-4 prose-ul:md:mb-8 prose-ul:text-base-content ", // ul class
                "prose-li:m-0 prose-li:p-0", // li class
                "prose-a:link prose-a:link-primary"  // a class
            ].join(" ");

            return <SectionContainer>
                <FadeInBottom>
                    <div className={classes}>
                        {block.content.map((c: any) => getRichTextBlocks(c))}
                    </div>
                </FadeInBottom>
            </SectionContainer>
        }

        if (block.__component === "page.page-heading") {
            return <SectionContainer bottomSpacing={false}>
                <FadeInBottom>
                    <Heading topTitle={block.topTitle} leftTitle={block.leftTitle} rightTitle={block.rightTitle} colorReverse={block.colorReverse} />
                </FadeInBottom>
            </SectionContainer>
        }

        if (block.__component === "page.button") {
            if (block.external) {
                return <SectionContainer topSpacing={false} bottomSpacing={false}>
                    <FadeInBottom>
                        <Link href={block.url} className="btn btn-neutral">
                            {block.name}
                            <ArrowSmallDownIcon className="h-6 w-6 text-content -rotate-90" />
                        </Link>
                    </FadeInBottom>
                </SectionContainer>
            } else {
                return <SectionContainer>
                    <FadeInBottom>
                        <ActiveLink href={block.url} className="btn btn-neutral">
                            {block.name}
                            <ArrowSmallDownIcon className="h-6 w-6 text-content -rotate-90" />
                        </ActiveLink>
                    </FadeInBottom>
                </SectionContainer>
            }
        }

        if (block.__component === "page.project-grid") {
            return <ProjectGrid />
        }

        if (block.__component === "page.contact-form") {
            return <SectionContainer>
                <FadeInBottom>
                    <p className="font-bold text-xl md:text-3xl mt-8 md:mt-16 mb-4 md:mb-8">{block.title}</p>
                    <div className="card w-full bg-base-300 shadow-xl">
                        <div className="card-body">
                            <ContactForm />
                        </div>
                    </div>
                </FadeInBottom>
            </SectionContainer>
        }

        if (block.__component === "page.3-d-letter") {
            if (block.enable) {
                return <Letter3D />
            } else {
                return <></>
            }
        }


        return <></>
    });

}

export { getContents }