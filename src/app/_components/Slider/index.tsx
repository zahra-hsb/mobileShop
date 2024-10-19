'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import av from '@/app/_public/a34.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

interface Mobile {
    id: number,
    name: string,
    src: StaticImageData,
    details: string,
    price: number
}


const dataArray: Mobile[] = [
    { id: 1, name: 'a34', src: av, details: '', price: 14000000 },
    { id: 2, name: 'a34', src: av, details: '', price: 14000000 },
    { id: 3, name: 'a34', src: av, details: '', price: 14000000 },
    { id: 4, name: 'a34', src: av, details: '', price: 14000000 },
    { id: 5, name: 'a34', src: av, details: '', price: 14000000 },
]

export default function Slider() {
    return (
        <>
            <div className='w-full h-auto flex p-20'>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {dataArray.length > 0 ?
                        dataArray?.map(item => (
                            <>
                                <SwiperSlide>
                                    <div key={item.id} className="w-full lg:flex lg:flex-row-reverse">
                                        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 shadow bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                                            <div className="mb-8">
                                                <p className="text-sm text-gray-600 flex items-center">
                                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                                    </svg>
                                                </p>
                                                <div className="text-gray-900 font-bold text-xl mb-2">
                                                    {item.name}
                                                </div>
                                                <p className="text-gray-700 text-base">
                                                    {item.details}
                                                </p>
                                            </div>
                                            <div className="flex items-center">
                                                {/* <Image  className="w-10 h-10 rounded-full mr-4" src={av} alt="Avatar of Jonathan Reinink" /> */}
                                                <div className="text-sm">
                                                    <p className="text-gray-900 leading-none">
                                                        {item.price}
                                                    </p>
                                                    <p className="text-gray-600"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <Image src={item.src} alt='' className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                                        </Image>
                                    </div >
                                </SwiperSlide>
                            </>
                        ))
                        :
                        <div>موردی برای نمایش وجود ندارد</div>
                    }

                </Swiper>
            </div>
        </>
    );
}
