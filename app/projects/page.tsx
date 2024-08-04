import FadeInBottom from "@/components/animation/FadeInBottom";
import { Page, SectionContainer } from "@/components/basic";
import ProjectBlock from "@/components/home/projects/ProjectBlock";
import ProjectPageHead from "@/components/projects/ProjectPageHead";
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata( { params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const endpoint = `${process.env.STRAPI_URL}/api/project-page-setting?populate=*`;
  const { data } = await fetch(endpoint).then((res) => res.json())

  if (!data || !data.attributes?.metaTitle) return {
    title: "Jacky FAN"
  };

  return {
    title: data.attributes.metaTitle,
  }
}

async function getData() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/projects?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProjectPage() {
  const { data } = await getData();

  return (
    <Page>
      <SectionContainer extraClassName="md:pb-10" bottomSpacing={false}>
        <ProjectPageHead />
      </SectionContainer>

      <SectionContainer extendRightSpacing={true} topSpacing={false}>
        <FadeInBottom>
          <div className="flex flex-wrap flex-row">
            {data.map((item: any, index: number) => (
              <div
                className="w-full md:w-1/2 xl:w-1/3 grow-0 shrink p-3"
                key={index}
              >
                <ProjectBlock
                  name={item.attributes.title}
                  description={item.attributes.desc}
                  link={`/projects/${item.attributes.alias}`}
                  key={index}
                  img={`${process.env.STRAPI_URL}${item.attributes.img.data.attributes.url}`}
                />
              </div>
            ))}
          </div>
        </FadeInBottom>
      </SectionContainer>
    </Page>
  );
}
