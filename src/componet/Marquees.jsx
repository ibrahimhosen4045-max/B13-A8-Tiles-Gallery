import { getFechData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

import { HiOutlineArrowRight } from 'react-icons/hi'
import { HiArrowUpRight } from 'react-icons/hi2'



const Marquees = async () => {
  const datas = await getFechData()

  return (
    <div className='container mx-auto py-6'>
      <div className='flex items-center justify-between'>
        <h1 className='py-5 text-4xl font-semibold'>Hot selling Products</h1>
        <Link href={'/allTiles'}>
        <button className='btn border-none bg-white hover:text-[#5C1621]'>View all Card <HiOutlineArrowRight className='text-[16px]'/></button>
        </Link>
      </div>
      <Marquee 
        pauseOnHover={true} 
        speed={50}
        gradient={false}
        gradientWidth={80}
        className='flex gap-6 h-full'
      >
        {datas.slice(0,6).map(info => (
          <div 
            key={info.id}
            className='mx-3 w-[320px]  bg-white  hover:shadow-xl transition duration-300 border border-gray-200 my-4 px-4 '
          >
            <div className=' p-4 flex flex-col items-center text-center gap-4'>
                <Image className='w-full' src={info.image} alt='cource' width={500} height={300}></Image>
              <p className=' uppercase text-gray-500'>{info.category}</p>
              <h1 className='text-2xl uppercase font-semibold '>
                {info.title}
              </h1>

              <p className='text-gray-500'>{info.currency}. {info.price}</p>

              <button className=' group btn  hover:text-black bg-white  w-full uppercase py-6'>View Details <HiArrowUpRight className='group-hover:rotate-45'/></button>

            </div>
          </div>
        ))}
      </Marquee>

    </div>
  )
}

export default Marquees