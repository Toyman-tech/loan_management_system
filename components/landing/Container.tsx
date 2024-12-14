'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image'
import React from 'react'

const images = [
  '/dsc5.png',
  '/dsc4.png',
  '/dsc2.png',

];

const Container = () => {
  return (
    <div className='flex  flex-row justify-center p-5'>
      {/* <div className='flex rounded-md border border-slate-50 '>
            <Image
                  src="/dsc5.png"
                  width={350}
                  height={44}
                  alt="The Dawn logo"
                //   className="block h-[208px]" 
                />
            </div> */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='relative'>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover h-[250px] "
              width={350}
              height={44}
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-center  text-white px-4">
              <h2 className="text-[25px] md:text-6xl items-center justify-center text-center font-bold  font-['Space
Grotesk']">Embark on a Journey of Islamic Excellence</h2>
              <p className="mt-2 items-center justify-center text-center text-sm md:text-lg font-['Lato']">The Dawn, a community of passionate young Muslims dedicated to learning, growing, and making a positive impact</p>
              {/* learn more  */}
              <div className='flex flex-row justify-between py-3 align-baseline'>
                <div className='flex flex-row gap-1 justify-center align-middle'>
                  <div className='flex justify-center align-middle'>
                    <Image
                       src="/butt.svg"
                       width={44}
                       height={44}
                       alt="The Dawn logo"
                    />
                  </div>
                  <div className='flex justify-center align-middle pt-2'>Learn More</div>
                </div>
                <div className="h-8 px-3 mt-1.5 bg-[#539a14] rounded-[833.88px] border border-[#539a14] justify-center items-center gap-1.5 inline-flex">
                  <div className="text-center text-white text-xs font-normal font-['Lato']">Join the Dawn</div>
                </div>
              </div>
            </div>


          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Container