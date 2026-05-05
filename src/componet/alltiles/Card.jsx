
import Image from 'next/image'
import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

const Card = ({item}) => {
  
  return (
    <div
    className='mx-3 w-[320px]  bg-white  hover:shadow-xl transition duration-300 border border-gray-200 my-4 px-4 '
    >
      <div className=' p-4 flex flex-col items-center text-center gap-4'>
          <Image className='w-full' src={item.image} alt='cource' width={500} height={300}></Image>
        <p className=' uppercase text-gray-500'>{item.category}</p>
        <h1 className='text-2xl uppercase font-semibold '>
          {item.title}
        </h1>
        <p className='text-gray-500'>{item.currency}. {item.price}</p>
        <button className=' group btn  hover:text-black bg-white  w-full uppercase py-6'>View Details <HiArrowUpRight className='group-hover:rotate-45'/></button>
      </div>
    </div>
  )
}

export default Card
