"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const ClientSwiper = () => {
    return (
        <div className="bg-accent-color py-8 relative">
            <span className='absolute top-0 bottom-0 left-0 w-[10%] bg-blur-blue z-10'></span>
            <span className='absolute top-0 bottom-0 right-0 w-[10%] right-blur-blue z-10'></span>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                loop={true} // Ensures the slider loops infinitely
                autoplay={{
                    delay: 0, // Set delay to 0 for continuous sliding
                    disableOnInteraction: false, // Autoplay continues after user interactions
                    waitForTransition: false // Allows continuous sliding without waiting for a transition
                }}
                speed={5000} // Set a speed to control the rate of sliding (higher value for slower sliding)
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 8,
                        spaceBetween: 30,
                    },
                    1500: {
                        slidesPerView: 8,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <Image className="w-[120px] h-[60px]" src="/jsw-steel.png" alt="JSW Steel - Edge Sense" width={150} height={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-[120px] h-[60px]" src="/adani.png" alt="Adani - Edge Sense" width={150} height={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-[120px] h-[60px]" src="/ashok-leyland.png" alt="Ashok Leyland - Edge Sense" width={150} height={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-[120px] h-[60px]" src="/schreiber.png" alt="Schreiber - Edge Sense" width={150} height={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-[120px] h-[60px]" src="/dabur.png" alt="Dabur - Edge Sense" width={150} height={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-[120px] h-[60px]" src="/cipla.png" alt="Cipla - Edge Sense" width={150} height={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-[120px] h-[60px]" src="/isro.png" alt="Isro - Edge Sense" width={150} height={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-[120px] h-[60px]" src="/wockhardt.png" alt="Wockhardt - Edge Sense" width={150} height={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-[120px] h-[60px]" src="/cipla.png" alt="Cipla - Edge Sense" width={150} height={150} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ClientSwiper;
