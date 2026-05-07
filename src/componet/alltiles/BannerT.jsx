import React from 'react';
import Image from 'next/image';
import bannerImage from '@/image/allbanner.jpg';
import Link from 'next/link';



const BannerT = () => {
  return (
    <section className="relative w-full h-70 md:h-75 lg:h-90 overflow-hidden">
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
      <div className="absolute inset-0  bg-linear-to-b  from-black/90  via-black/30 to-black/90">
        <div className='w-full h-full flex flex-col items-center justify-center text-center gap-5 text-white '>
          
          <div className='flex flex-col items-center gap-3  relative top-10 lg:top-20'>
            <h1 className='text-4xl md:text-5xl font-semibold '>Our Product</h1>
            <p className='text-lg'><Link href={'/'}><span className=' cursor-pointer hover:text-amber-400'>Home </span></Link>/ New Arrivals</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default BannerT;