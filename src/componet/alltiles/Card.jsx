
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

const Card = ({item}) => {
  
  return (
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
  )
}

export default Card
