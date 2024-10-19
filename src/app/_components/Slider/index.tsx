'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import av from '@/app/_public/a34.webp'
import a53 from '@/app/_public/a53.webp'
import a14 from '@/app/_public/a14.webp'
import a51 from '@/app/_public/a51.webp'
import a24 from '@/app/_public/a24.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
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


const dataArray: Mobile[] = [
    {
        id: 1, name: 'گوشی موبايل سامسونگ گلکسی A34 5G (SM-A346E/DSN) ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام', src: av, details: `
        نوع پردازنده - CPU :

Mediatek Dimensity 1080 (6 نانومتر)

حافظه داخلی :

128 گیگابایت

حافظه RAM :

8 گیگابایت

سایز صفحه نمایش :

6.6 اینچ

دوربین پشت :

سه گانه 48 مگاپیکسل + 8 مگاپیکسل + 5 مگاپیکسل

ظرفیت باتری :

5000 میلی آمپر ساعت
        `, price: 14000000
    },
    {
        id: 2, name: 'گوشی موبايل سامسونگ مدل گلکسی A53 5G ظرفیت 256 گیگابایت - رم 8 گیگابایت', src: a53, details: `
        نوع پردازنده - CPU :

Exynos 1280 (5 نانومتر)

حافظه داخلی :

256 گیگابایت

حافظه RAM :

8 گیگابایت

سایز صفحه نمایش :

6.5 اینچ

دوربین پشت :

چهارگانه 64 مگاپیکسل + 12 مگاپیکسل + 5 مگاپیکسل + 5 مگاپیکسل

ظرفیت باتری :

5000 میلی آمپر ساعت`, price: 14000000
    },
    {
        id: 3, name: 'گوشی موبايل سامسونگ گلکسی A24 4G ظرفیت 128 گیگابایت رم 6 گیگابایت - ویتنام', src: a24, details: `نوع پردازنده - CPU :

Mediatek Helio G99 (6 نانومتری)

حافظه داخلی :

128 گیگابایت

حافظه RAM :

6 گیگابایت

سایز صفحه نمایش :

6.5 اینچ

دوربین پشت :

سه گانه 50 مگاپیکسل + 5 مگاپیکسل + 2 مگاپیکسل

ظرفیت باتری :

5000 میلی آمپر ساعت`, price: 14000000
    },
    {
        id: 4, name: 'گوشی موبايل سامسونگ مدل گلکسی A51 ظرفیت 128 گیگابایت - رم 6 گیگابایت', src: a51, details: `نوع پردازنده - CPU :

Exynos 9611 (10 نانومتر)

حافظه داخلی :

128 گيگابايت

حافظه RAM :

6 گیگابایت

سایز صفحه نمایش :

6.5 اینچ

دوربین پشت :

چهارگانه 48 مگاپیکسل + 12 مگاپیکسل + 5 مگاپیکسل + 5 مگاپیکسل

ظرفیت باتری :

4000 میلی آمپر ساعت`, price: 14000000
    },
    {
        id: 5, name: 'گوشی موبایل سامسونگ مدل Galaxy A14 ظرفیت 64 گیگابایت رم 4 گیگابایت', src: a14, details: `نوع پردازنده - CPU :

Mediatek MT6769 Helio G80 (12 nm) Version-A Exynos 850 (8nm) Version-B

حافظه داخلی :

64 گیگابایت

حافظه RAM :

4 گیگابایت

سایز صفحه نمایش :

6.6 اینچ

دوربین پشت :

سه گانه 50 مگاپیکسل + 5 مگاپیکسل + 2 مگاپیکسل

ظرفیت باتری :

5000 میلی‌ آمپر ساعت`, price: 14000000
    },
]

export default function Slider() {
    return (
        <>
            <div className='w-full h-auto flex p-10 sm:p-20'>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={10}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {dataArray.length > 0 ?
                        dataArray?.map(item => (
                            <>
                                <SwiperSlide>
                                    <div key={item.id} className="w-full border rounded-lg flex sm:flex-row-reverse flex-col-reverse">
                                        <div className="border-l border-gray-300 sm:border-t sm:border-gray-300 shadow-md  rounded-b sm:rounded-b-none sm:rounded-l-lg bg-gray-50 p-4 flex flex-col justify-between leading-normal w-full">
                                            <div className="mb-8">
                                                <p className="text-sm text-gray-600 flex items-center">
                                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                                    </svg>
                                                </p>
                                                <Link href={'/'} className="text-gray-900 hover:text-blue-500 font-bold text-xl mb-2">
                                                    {item.name}
                                                </Link>
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
                                        <Image src={item.src} alt='' className="h-48 sm:h-auto sm:w-48 flex-none bg-cover rounded-lg rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden" title="Woman holding a mug">
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
