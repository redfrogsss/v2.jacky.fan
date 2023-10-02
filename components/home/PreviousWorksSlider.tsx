'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PreviousWorkItem from './PreviousWorkItem';
import useProjectInfo from '@/hooks/useProjectInfo';

import { useEffect, useState } from 'react';
import { useBreakPoint } from '@/hooks/useBreakPoint';

export default function PreviousWorkSlider() {
    const { data } = useProjectInfo();

    const { breakpoint } = useBreakPoint();

    const displaySlides = () => {
        const projects = [...data].reverse();
        return projects.map((item, index) => {
            return (
                <SwiperSlide key={index} className='py-16'>
                    <PreviousWorkItem item={item} />
                </SwiperSlide>
            );
        });
    }

    const [slidesPerView, setSlidesPerView] = useState(2.5);

    useEffect(() => {
        // console.log(breakpoint);
        if (breakpoint == "sm") {
            setSlidesPerView(1);
        } else if (breakpoint == "md") {
            setSlidesPerView(1.5);
        } else if (breakpoint == "lg") {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(2.5);
        }

    }, [breakpoint])

    return (

        <div className="mx-auto h-full w-screen">
            <Swiper
                initialSlide={0}
                slidesPerView={slidesPerView}
                centeredSlides={true}
                spaceBetween={0}
                className=""
                slideToClickedSlide={true}
                loop={true}
            >
                {displaySlides()}
            </Swiper>
        </div>
    );
}