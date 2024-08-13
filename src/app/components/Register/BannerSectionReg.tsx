import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const BannerSectionCard = () => {
  return (
    <>
      <div className="relative w-[70%] mt-20 mx-auto">
        {/* Horizontal line */}
        <hr className="w-full border-[#E5E5E5] my-4" />

        {/* Container for text and search icon */}
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
          <div className="absolute top-0 right-0 flex items-center">
            <CiSearch className="w-10 h-10 text-white bg-[#FF0000] p-2 rounded-sm  hover:shadow-2xl cursor-pointer transition-shadow duration-200" />
          </div>
        </div>
        <div className=" flex justify-start items-center mt-4">
          <h1 className="text-4xl text-black text-bold font-sans">
            Register
          </h1>
        </div>
      </div>
    </>
  );
};

export default BannerSectionCard;
