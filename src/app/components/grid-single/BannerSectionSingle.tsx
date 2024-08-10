import React from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const BannerSectionCard = () => {
  return (
    <>
      <div className="relative w-[70%] mt-20 mx-auto">
        {/* Horizontal line */}
        <hr className="w-full border-[#E5E5E5] my-4" />

        <div className="flex justify-between items-center mt-4 ">
          {/* Left side: Text */}
          <div className="flex items-center space-x-1 text-sm text-bold ">
            <Link href="#" className=" hover:text-[#FF0000] hover:underline">
              Home
            </Link>
            /
            <Link href="#" className=" hover:text-[#FF0000] hover:underline">
              Library
            </Link>
            /
            <Link href="#" className=" hover:text-[#FF0000] hover:underline">
              Data
            </Link>
          </div>

          {/* Right side: Search icon */}
          <div className="absolute top-0 right-0 flex items-center">
            <FaSearch className="w-10 h-10 text-white bg-[#FF0000] p-2 rounded-sm  hover:shadow-2xl cursor-pointer transition-shadow duration-200" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 px-4 lg:px-0">
          <div className="flex items-center mb-4 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl text-black font-bold font-sans lg:mr-5">
              Furniture For Sale
            </h1>
            <span className="text-xs lg:text-sm text-white px-2 py-1 rounded-sm bg-[#FF0000]">
              OFFER
            </span>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <div className="text-2xl lg:text-4xl text-[#FF0000] mb-1">$80</div>
            <div className="text-gray-600 text-sm lg:text-base">ID: 3479</div>
          </div>
        </div>

        <div className="text-gray-500 flex flex-wrap">
          <FaMapMarkerAlt className="mr-1 mt-1" />
          <span className="hover:underline cursor-pointer">Manhattan, NY</span>
        </div>
      </div>
    </>
  );
};

export default BannerSectionCard;
