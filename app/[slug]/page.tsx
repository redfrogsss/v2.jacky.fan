import FadeInBottom from "@/components/animation/FadeInBottom";
import { ActiveLink, Page, SectionContainer } from "@/components/basic";
import BgHeading from "@/components/visual/bgHeading";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import type { Metadata } from 'next';
import { getRichTextBlocks } from "@/helpers/strapi";
import { redirect } from 'next/navigation'

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const url = params.slug;

    const endpoint = `${process.env.STRAPI_URL}/api/pages?populate=*&filters[url][$eqi]=/${url}`;
    const { data } = await fetch(endpoint).then((res) => res.json())

    if (!data || !data[0] || !data[0].attributes?.pageTitle) return {
        title: "Jacky FAN",
    };

    return {
        title: `${data[0].attributes.pageTitle} - Jacky FAN`,
    }
}

async function getData(url: string) {
    const res = await fetch(`${process.env.STRAPI_URL}/api/pages?populate=*&filters[url][$eqi]=/${url}`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

function getContents(data: any) {

    if (!data) return <></>

    return data.map((block: any) => {
        if (block.__component === "page.page-rich-text") {

            const classes = [
                "prose max-w-none", // prose class
                "prose-p:text-md prose-p:md:text-xl prose-p:md:8 prose-p:!leading-8 prose-p:text-base-content ", // p class
                "prose-h2:text-xl prose-h2:md:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:md:mt-16 prose-h2:mb-4 prose-h2:md:mb-8", // h2 class
                "prose-h3:text-lg prose-h3:md:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:md:mt-16 prose-h3:mb-4 prose-h3:md:mb-8", // h3 class
                "prose-ul:list-disc prose-ul:text-md prose-ul:md:text-xl prose-ul:ps-8 prose-ul:!leading-8 prose-ul:mb-4 prose-ul:md:mb-8 prose-ul:text-base-content ", // ul class
                "prose-li:m-0 prose-li:p-0", // li class
                "prose-a:link prose-a:link-primary"  // a class
            ].join(" ");

            return <FadeInBottom>
                <div className={classes}>
                    {block.content.map((c: any) => getRichTextBlocks(c))}
                </div>
            </FadeInBottom>;
        }

        return <></>
    });

}

async function checkPageExist (params: { slug: string }) {

    if (!params?.slug) {
        redirect("/404");
    }

    const { data } = await getData(params.slug);

    if (data.length == 0) {
        redirect("/404?from=" + params.slug);
    }
}

export default async function AboutPage({ params }: { params: { slug: string } }) {

    await checkPageExist(params);

    const { data } = await getData(params.slug);

    return (
        <>
            <Page>
                <SectionContainer>
                    <FadeInBottom>
                        <h1 className="font-bold text-3xl md:text-5xl mb-8 md:mb-16">
                            <span className="text-sm md:text-lg flex font-light drop-shadow-sm">
                                <hr className="w-8 md:w-16 inline-block my-auto mr-2 border-base-content" />
                                {data[0].attributes.topTitle}
                            </span>
                            <span className="text-primary drop-shadow">{data[0].attributes.leftTitle}</span> {data[0].attributes.rightTitle}
                        </h1>

                    </FadeInBottom>

                    {getContents(data[0].attributes.Contents)}

                </SectionContainer>
            </Page>
            <BgHeading title={ data[0].attributes.pageTitle } />
        </>

    );
}