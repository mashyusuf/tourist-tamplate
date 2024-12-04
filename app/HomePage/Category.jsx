import React from 'react'
import Container from '../componenets/container/Container'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

export default function Category() {
  return (
    <Container>
      <div className='grid grid-cols-3 mt-10 items-center gap-4 md:flex md:justify-around pt-20 md:mt-64 justify-center'>
        <div className='group p-5 bg-gray-200 border-2 border-white rounded-xl hover:scale-95 transform transition duration-300'>
          <Image src={assets.amazon} width={96} height={96} alt='amazon' className='w-full h-full object-contain' />
        </div>
        <div className='group p-5 bg-gray-200 border-2 border-white rounded-xl hover:scale-95 transform transition duration-300'>
          <Image src={assets.amd} width={96} height={96} alt='amd' className='w-full h-full object-contain' />
        </div>
        <div className='group p-5 bg-gray-200 border-2 border-white rounded-xl hover:scale-95 transform transition duration-300'>
          <Image src={assets.drop} width={96} height={96} alt='drop' className='w-full h-full object-contain' />
        </div>
        <div className='group p-5 bg-gray-200 border-2 border-white rounded-xl hover:scale-95 transform transition duration-300'>
          <Image src={assets.logi} width={96} height={96} alt='logi' className='w-full h-full object-contain' />
        </div>
        <div className='group p-5 bg-gray-200 border-2 border-white rounded-xl hover:scale-95 transform transition duration-300'>
          <Image src={assets.spotify} width={96} height={96} alt='spotify' className='w-full h-full object-contain' />
        </div>
        <div className='group p-5 bg-gray-200 border-2 border-white rounded-xl hover:scale-95 transform transition duration-300'>
          <Image src={assets.amazon} width={96} height={96} alt='amazon' className='w-full h-full object-contain' />
        </div>
      </div>
    </Container>
  )
}
