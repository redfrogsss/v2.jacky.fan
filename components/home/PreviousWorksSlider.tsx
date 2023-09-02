'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PreviousWorkItem from './PreviousWorkItem';

export default function PreviousWorkSlider() {

    const displaySlides = () => {
        // show 6 dummy slides
        const dummy = [1, 2, 3, 4, 5, 6];
        return dummy.map((item, index) => {
            if (index === 10) {
                return (
                    <>
                    </>
                )
            } else {
                return (
                    <SwiperSlide key={index} className='py-10'>
                        <PreviousWorkItem item={item} />
                    </SwiperSlide>
                );
            }
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