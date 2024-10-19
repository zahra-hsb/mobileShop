'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


interface Mobile {
    id: number,
    name: string,
    src: StaticImageData,
    details: string,
    price: number
}

interface SecondSliderProps {
    mobilesArray2: Mobile[]
}

const SecondSlider = ({ mobilesArray2 }: SecondSliderProps) => {
    return (
        <>
            <div className='p-5 sm:p-20'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper"
                >
                    {mobilesArray2.length > 0 ? mobilesArray2?.map(item => (
                        <>
                            <SwiperSlide>
                                <div className='w-full border shadow-md rounded-lg p-5 flex flex-col gap-2'>
                                    <Image src={item.src} alt='' className='' />
                                    <Link href={'#'} className='text-lg font-bold hover:text-blue-500'>{item.name}</Link>
                                    {/* <p>{item.details}</p> */}
                                    <p>{item.price}</p>
                                    <button className='text-lg bg-blue-800 text-white px-5 py-1 rounded-lg'>خرید</button>
                                </div>
                            </SwiperSlide>
                        </>
                    ))
                        :
                        <div>موردی برای نمایش وجود ندارد</div>
                    }
                </Swiper>
            </div>
        </>
    )
}

export default SecondSlider