'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { mobilesArray2 } from '@/app/_bin/Mobiles';

const SecondSlider = () => {
    return (
        <>
            <div className='p-5 sm:p-20'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {mobilesArray2.length > 0 ? mobilesArray2?.map(item => (
                        <>
                            <SwiperSlide>
                                <div className='w-full border shadow-md rounded-lg p-5 flex flex-col gap-2'>
                                    <Image src={item.src} alt='' />
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