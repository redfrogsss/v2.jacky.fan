'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PreviousWorkItem from './PreviousWorkItem';
import useProjectInfo from '@/hooks/useProjectInfo';

export default function PreviousWorkSlider() {
    const { data, error, loading } = useProjectInfo();

    const displaySlides = () => {
        return data.reverse().map((item, index) => {
            return (
                <SwiperSlide key={index} className='py-16'>
                    <PreviousWorkItem item={item} />
                </SwiperSlide>
            );
        });
    }

    return (

        <div className="mx-auto h-full w-full">
            <Swiper
                initialSlide={0}
                slidesPerView={2.5}
                centeredSlides={true}
                spaceBetween={0}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className=""
            >
                {displaySlides()}
            </Swiper>
        </div>
    );
}