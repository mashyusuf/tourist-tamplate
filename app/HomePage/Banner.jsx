import React from "react";
import Container from "../componenets/container/Container";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import { BsSearch } from "react-icons/bs";

export default function Banner() {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-100 to-white pt-20 md:pt-0">
  <Container>
    <div className="min-h-screen flex flex-col md:flex-col lg:flex-row items-center justify-center lg:space-x-8 p-4">
      {/* Text Container */}
      <div className="text-center lg:text-left flex-1 md:mb-8 lg:mb-0">
        <p className="text-xs font-semibold text-[#05073C] mb-4">
          One site, 300,000+ experiences you will remember
        </p>
        <h1 className="md:text-5xl text-3xl font-bold text-[#05073C] leading-tight mb-6">
          Your Adventure <br /> Travel Experts <br /> In World!
        </h1>
        {/* Search Section */}
        <div className="bg-white rounded-full flex flex-wrap md:flex-nowrap py-3 px-4 items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-2 lg:space-x-1">
          <div className="flex gap-2 items-center">
            <Image src={assets.circle} alt="circle" width={50} height={50} />
            <div className="flex flex-col">
              <p className="text-xs font-semibold text-[#05073C]">Where</p>
              <p className="text-xs text-gray-400">Search destinations</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={assets.circle} alt="circle" width={50} height={50} />
            <div className="flex flex-col">
              <p className="text-xs font-semibold text-[#05073C]">When</p>
              <p className="text-xs text-gray-600">February 05 ~ March 14</p>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <Image src={assets.circle} alt="circle" width={50} height={50} />
            <div className="flex flex-col">
              <p className="text-xs font-semibold text-[#05073C]">Tour Type</p>
              <p className="text-xs text-gray-400">All Tour</p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2 ml-5">
          <button className="btn bg-[#EB662B] px-2  rounded-2xl text-xs hover:bg-[#e96932] text-white "><BsSearch className="text-xs" />Search</button>
          </div>

        </div>
      </div>

      {/* Image Container */}
      <div className="flex flex-1 justify-center items-center space-x-4 mt-8 -mb-28 md:-mb-80">
        {/* Inner Container */}
        <div className="flex flex-col space-y-4">
          <Image
            src={assets.image1}
            alt="image1"
            width={340}
            height={420}
            className="w-[200px] h-[240px] sm:w-[300px] sm:h-[360px] md:w-[340px] md:h-[280px] lg:w-[340px] lg:h-[420px]"
          />
          <Image
            src={assets.image2}
            alt="image2"
            width={340}
            height={235}
            className="w-[200px] h-[240px] sm:w-[300px] sm:h-[360px] md:w-[340px] md:h-[180px] lg:w-[340px] lg:h-[235px]"
          />
        </div>
        <Image
          src={assets.image3}
          alt="image3"
          width={340}
          height={750}
          className="w-[200px] mt-10 md:mt-20 h-[540px] sm:w-[300px] sm:h-[360px] md:w-[340px] md:h-[550px] lg:w-[340px] lg:h-[750px]"
        />
      </div>
    </div>
  </Container>
</div>

    </>
  );
}
