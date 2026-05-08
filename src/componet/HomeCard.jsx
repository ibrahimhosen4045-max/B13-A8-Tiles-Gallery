'use client'

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import { Autoplay, FreeMode, Pagination,} from 'swiper/modules';
import { getFechData } from '@/lib/data';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

export default  function HomeCard() {
    const [datas, setDatas] = useState([])
    
    useEffect(()=> {
        const getData = async ()=> {
            const data = await  getFechData() 
            setDatas(data)
        }
        getData()
    },[])
    
  return (
    <div className=' container mx-auto w-11/12 py-10'>
        <div className='flex items-center justify-between'>
            <h1 className=' uppercase text-3xl font-semibold'>Our Products</h1>
            <Link href={'./allTiles'}>
            <button className='btn bg-white border-none hover:text-amber-400 hover:shadow-none uppercase'>View all <GoArrowRight /></button>
            </Link>
        </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1240: {
          slidesPerView: 4,
          spaceBetween: 30
        }
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {datas.slice(0, 8).map(item => <SwiperSlide className='py-10' key={item.id}>
            <div
                className='mx-3   bg-white  hover:shadow-xl transition duration-300 border border-gray-200 my-4 px-4 '
                >
                  <div className='py-4 flex flex-col items-center text-center gap-4'>
                      <Image className='w-full' src={item.image} alt='cource' width={500} height={300}></Image>
                    <p className=' uppercase text-gray-500'>{item.category}</p>
                    <h1 className='text-2xl uppercase font-semibold '>
                      {item.title}
                    </h1>
                    <p className='text-gray-500'>{item.currency}. {item.price}</p>
                    <Link href={`/tilesCard/${item.id}`} className='w-full'>
                    <button className=' group btn  hover:text-[#5C1621] bg-white hover:border-[#5C1621]  w-full uppercase py-6'>View Details <HiArrowUpRight className='group-hover:rotate-45'/></button>
                    </Link>
                  </div>
                </div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  );
}
