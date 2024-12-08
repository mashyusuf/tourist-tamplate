'use client';
import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import Container from '../componenets/container/Container';

export default function Popular_Things() {
  const tours = [
    { name: 'City Tours', tours: '100+ Tours', image: assets.p1 },
    { name: 'Cultural Tours', tours: '100+ Tours', image: assets.p2 },
    { name: 'Day Cruises', tours: '100+ Tours', image: assets.p3 },
    { name: 'Bus Tours', tours: '100+ Tours', image: assets.p4 },
    { name: 'Beach Tours', tours: '100+ Tours', image: assets.p5 },
    { name: 'Food Tours', tours: '100+ Tours', image: assets.p6 },
  ];

  return (
    <Container>
      <div className='flex justify-between items-center  mt-10 mb-10'>
        <h1 className='text-2xl font-bold text-[#05073C]'>Popular things to do</h1>
        <p className='text-xs font-semibold text-[#05073C] cursor-pointer hover:underline'>See all</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-5'>
        {tours.map((tour, index) => (
          <div
            key={index}
            className='relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
          >
            {/* Image Wrapper for Fixed Aspect Ratio */}
            <div className='w-full h-[220px] relative'>
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className='object-cover rounded-lg transition-transform duration-300 group-hover:scale-125'
              />
            </div>
            {/* Overlay and Text */}
            <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70'></div>
            <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center'>
              <p className='text-lg font-medium text-white group-hover:scale-110 transition-transform duration-300'>
                {tour.name}
              </p>
              <p className='text-sm text-white opacity-90'>{tour.tours}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
