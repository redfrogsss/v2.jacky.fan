'use client'

import FadeInBottom from "@/components/animation/FadeInBottom";
import { Page, SectionContainer } from "@/components/basic";
import { ProjectBanner, ProjectFilter, ProjectFilterBadge } from "@/components/home/projects";
import { Heading } from "@/components/visual";
import { LocomotiveScrollContext } from "@/contexts/LocomotiveScrollContext";
import useProjectInfo from "@/hooks/useProjectInfo";
import { useContext, useEffect, useState } from "react";

export default function ProjectPage() {

    const { data, loading } = useProjectInfo();
    const [filterBadges, setFilterBadges] = useState<string[]>([]);
    const [banners, setBanners] = useState<any[]>([]);
    const { locoScroll, setlocoScroll } = useContext(LocomotiveScrollContext);

    const getFilterBadges = () => {
        function flatten<T>(arr: T[][]): T[] {
            return arr.reduce((acc, val) => acc.concat(val), []);
        }

        function getUniqueValues<T>(arr: T[]): T[] {
            return Array.from(new Set(arr));
        }

        const arrayOfArrays = data.map(item => item.tags);
        const flattenedArray = flatten(arrayOfArrays);
        const uniqueValues = getUniqueValues(flattenedArray);

        uniqueValues.sort();
        setFilterBadges(uniqueValues);
    }

    const getBanners = () => {
        setBanners(
            data.map(item => {
                return {
                    name: item.name,
                    desc: item.desc,
                    img: item.img,
                    link: `/projects/${item.proj}`
                }
            }).reverse()
        );
    }

    useEffect(() => {
        getFilterBadges();
        getBanners();
        setTimeout(() => {
            try {
                locoScroll?.update();
            } catch (e) {
                return;
            }
        }, 300)
    }, [data]);

    return (
        <Page>
            <SectionContainer extraClassName="md:pb-10">
                <FadeInBottom>
                    <Heading topTitle="Checkout" leftTitle="My" rightTitle="Previous Projects" colorReverse={true} />

                    <p className="text-md md:text-xl mb-4 md:mb-8 leading-8">
                        I worked on different school projects and side projects, most of which involved web-related things.
                    </p>
                </FadeInBottom>

                <FadeInBottom>
                    <ProjectFilter filterBadges={filterBadges} />
                </FadeInBottom>
            </SectionContainer>

            {banners.map((item, index) => <ProjectBanner name={item.name} description={item.desc} link={item.link} key={index} posReverse={index % 2 == 0} img={item.img}/>)}
        </Page>
    );
}