import React from "react";
import Container from "../componenets/container/Container";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import { BsSearch } from "react-icons/bs";
import BannerPart from "../componenets/BannerPart";

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
        <BannerPart />
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
