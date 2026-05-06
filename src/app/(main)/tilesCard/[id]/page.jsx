import { getFechData } from '@/lib/data'
import React, { use } from 'react'
import bannerImage from '@/image/allbanner.jpg';
import Image from 'next/image';
import { FaFire } from 'react-icons/fa';
import { RxDividerHorizontal } from 'react-icons/rx';
import { IoMdAdd } from 'react-icons/io';

const Details = async ({params}) => {
    const {id} = await params
    
    const detail = await getFechData()
    const filterInfo = detail.filter(item => item.id === id)
    
  return (
    <div className='bg-gray-100'>
      {filterInfo.map(info => 
      <div key={info.id}>
      <section  className="relative w-full h-[40vh] md:h-[45vh] lg:h-[35vh] overflow-hidden">
            {/* Optimized Background Image */}
            <Image
              src={bannerImage}
              alt="Discover Your Perfect Aesthetic - Tiles Gallery"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
              quality={90}
            />
      
            {/* Overlay for better text readability */}
            <div className="absolute inset-0  bg-black/70 ">
              <div className='w-full h-full flex flex-col items-center justify-center text-center gap-5 text-white '>
                
                <div className='flex flex-col items-center gap-3  relative top-10'>
                  <h1 className='text-5xl font-semibold capitalize'>{info.roomType}</h1>
                  <p className='text-lg capitalize cursor-pointer'>All / {info.roomType} Tiles</p>
                </div>
              </div>
              
            </div>
        </section>
        <div className='flex items-center gap-4 container w-11/12 mx-auto py-15'>
            <div className='w-1/2 '>
                <Image src={info.image} alt='sourch' width={600} height={600}  className=' object-cover '/>
            </div>
            <div className='w-1/2 space-y-13 '>
                <div className=' space-y-3'>
                  <h1 className='text-3xl font-bold uppercase'>{info.title}</h1>
                  <h1 className='text-red-500 uppercase flex items-center gap-3'><FaFire /> Best Salling</h1>
                  <p className='font-extralight text-sm leading-6 ' >{info.description}</p>
                </div>
                <div className='space-y-3 font-extralight'>
                  
                <h1 className='flex items-center'><span className='w-50 block uppercase'>Price :</span> <span className='text-xl text-[#5C1621]'>{info.currency} {info.price}</span></h1>
                <h1 className='flex items-center'><span className='w-50 block uppercase'>Tiles size :</span> <span className='border-2 border-[#5C1621] px-2 py-1'>{info.dimensions}</span></h1>
                <h1 className='flex items-center'><span className='w-50 block uppercase'>Product Type :</span> <span>{info.roomType} Tiles</span></h1>
                <h1 className='flex items-center'><span className='w-50 block uppercase'>Material :</span> <span>{info.material}</span></h1>
                
                <h1 className='flex items-center'><span className='w-50 block uppercase'>Availability :</span> <span className='text-green-500'>In Stock</span></h1>
                <h1 className='flex items-center'><span className='w-50 block uppercase'>Quantity :</span> <div className='flex items-center border-2 border-[#5C1621] '>
                  <span></span><RxDividerHorizontal className='m-1.5 '/> <span className='px-3 border-l-2 border-r-2'>1</span> <span><IoMdAdd className='m-1.5 '/></span>
                </div></h1>
                <h1 className='flex items-center'><span className='w-50 block uppercase'>Subtotal :</span> <span>100</span></h1>
                </div>
                <div className='flex gap-3 w-full'>
                  <button className='btn w-1/2'>ADD TO CART</button>
                  <button className='btn w-1/2'>BUY IT NOW</button>
                </div>
            </div>
        </div>
        </div>
        )}
    </div>
  )
}

export default Details
