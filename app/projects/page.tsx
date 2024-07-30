import FadeInBottom from "@/components/animation/FadeInBottom";
import { Page, SectionContainer } from "@/components/basic";
import ProjectBlock from "@/components/home/projects/ProjectBlock";
import { Heading } from "@/components/visual";

async function getData() {
  const res = await fetch("http://localhost:1337/api/projects?populate=*");

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
        <FadeInBottom>
          <Heading
            topTitle="Checkout"
            leftTitle="My"
            rightTitle="Projects"
            colorReverse={true}
          />

          <p className="text-md md:text-xl mb-4 md:mb-8 leading-8">
            I&apos;m passionate about diving into Web Development projects and
            constantly exploring new technologies to enhance my skills.
          </p>

          <p className="text-md md:text-xl mb-4 md:mb-8 leading-8">
            Free free to checkout my projects. 😉
          </p>
        </FadeInBottom>
      </SectionContainer>

      <SectionContainer extendRightSpacing={true} topSpacing={false}>
        <FadeInBottom>
          <div className="flex flex-wrap flex-row">{JSON.stringify(data)}</div>
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
