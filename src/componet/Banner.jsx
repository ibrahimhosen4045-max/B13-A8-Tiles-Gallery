import React from 'react';
import Image from 'next/image';
import bannerImage from '@/image/banner1.jpg';
import bannerImage1 from '@/image/banner2.jpg';


const Banner = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src={bannerImage1}
        alt="Discover Your Perfect Aesthetic - Tiles Gallery"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
        quality={90}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Discover Your Perfect Aesthetic
        </h1>
        <button className="btn btn-primary px-8 py-3 rounded-md text-lg transition-transform hover:scale-105">
          Browse Now
        </button>
      </div>
    </section>
  );
};

export default Banner;