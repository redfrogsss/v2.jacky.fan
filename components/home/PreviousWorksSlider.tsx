'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
                    <SwiperSlide key={index} className='pt-10'>
                        <div className="card w-full min-h-96 bg-base-200 shadow-xl relative">
                            <figure className="mx-auto mt-[-2.5rem] relative w-fit">
                                <img src="https://plchldr.co/i/568x378" alt="Shoes" className="rounded-xl" />
                                <h2 className="absolute top-2 text-xl">Project {item}</h2>
                                <p className="absolute bottom-2 left-2">React</p>
                                <p className="absolute bottom-2 right-2">27 August 2023</p>
                            </figure>
                            <div className="card-body items-center text-center py-6">
                                <p>A random project with some good propose.</p>
                                <div className="flex justify-between w-full">
                                    <div className="flex items-center gap-2 max-w-1/2 flex-wrap">
                                        <div className="badge badge-outline">default</div>
                                        <div className="badge badge-outline">default</div>
                                        <div className="badge badge-outline">default</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="btn btn-info btn-sm">Info</button>
                                        <button className="btn btn-neutral btn-sm">View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            }
        });
    }

    return (

        <div className="mx-auto h-full w-1/2">
            <Swiper
                initialSlide={0}
                slidesPerView={"auto"}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="!overflow-visible"
            >
                {displaySlides()}
            </Swiper>
        </div>
    );
}