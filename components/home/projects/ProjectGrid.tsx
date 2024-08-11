import FadeInBottom from "@/components/animation/FadeInBottom";
import { SectionContainer } from "@/components/basic";
import ProjectBlock from "@/components/home/projects/ProjectBlock";

async function getData() {
    const res = await fetch(`${process.env.STRAPI_URL}/api/projects?populate=*`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function ProjectGrid() {
    const { data } = await getData();
    const sortedData = data.sort((a: any, b: any) => new Date(a.attributes.date).getTime() - new Date().getTime());

    return (
        <SectionContainer extendRightSpacing={true} topSpacing={false}>
            <FadeInBottom>
                <div className="flex flex-wrap flex-row">
                    {sortedData.map((item: any, index: number) => (
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
    );
}
