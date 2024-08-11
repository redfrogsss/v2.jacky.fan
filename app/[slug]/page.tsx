import { Page, SectionContainer } from "@/components/basic";
import BgHeading from "@/components/visual/bgHeading";
import { getContents } from "@/helpers/strapi";
import type { Metadata } from 'next';
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


async function checkPageExist(params: { slug: string }) {

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
                    {getContents(data[0].attributes.Contents)}
                </SectionContainer>
            </Page>
            <BgHeading title={data[0].attributes.pageTitle} />
        </>

    );
}