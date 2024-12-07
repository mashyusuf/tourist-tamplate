import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

export default function BannerPart() {
  return (
    <div className="bg-white rounded-full flex flex-wrap md:flex-nowrap py-3 px-4 items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-2 lg:space-x-1">
      <div className="flex gap-2 items-center justify-center">
        <div className="border-2 border-white rounded-full p-1">
          <Image src={assets.circle} alt="circle" width={50} height={50} />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold text-[#05073C]">Where</p>
          <p className="text-xs text-gray-400">Search destinations</p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div className="border-2 border-white rounded-full p-1">
          <Image src={assets.circle} alt="circle" width={50} height={50} />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold text-[#05073C]">When</p>
          <p className="text-xs text-gray-600">February 05 ~ March 14</p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div className="border-2 border-white rounded-full p-1">
          <Image src={assets.circle} alt="circle" width={50} height={50} />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold text-[#05073C]">Tour Type</p>
          <p className="text-xs text-gray-400">All Tour</p>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2 ml-5">
        <button className="btn bg-[#EB662B] px-2 rounded-2xl text-xs hover:bg-[#e96932] text-white">
          <BsSearch className="text-xs" /> Search
        </button>
      </div>
    </div>
  )
}
