import React from "react";
import MoreOptions from "./MoreOptions";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <>
      <div className="relative url(/hero-background-icons.jpg) z-20 flex items-center justify-center   ">
        <div className="pt-5 pl-1 pr-4 lg:pr-0  lg:w-[80%] w-[85%]">
          <h1
            className={`text-center  text-3xl md:text-4xl font-light mb-6 mt-12 sm:mt-16 md:mt-0`}
          >
            <Link
              href="#"
              className="inline-block hover:underline underline  hover:text-[#FF0000] hover:transition hover:duration-700"
            >
              Buy
            </Link>
            <span className="mx-1 sm:mx-2">,</span>
            <Link
              href="#"
              className="inline-block underline hover:underline hover:text-[#FF0000] hover:transition hover:duration-700"
            >
              Sell
            </Link>
            <span className="mx-1 sm:mx-2">or</span>
            <Link
              href="#"
              className="inline-block underline
                   hover:underline hover:text-[#FF0000] hover:transition hover:duration-700"
            >
              Find
            </Link>
            <span className="mx-1 sm:mx-2">What You Need</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 ">
              <div className="text-[#FF0000]">
                <label
                  className="block text-[#FF0000] text-md md:text-xl mb-2"
                  htmlFor="what"
                >
                  <span className="text-[#FF0000]">What?</span>
                </label>
                <input
                  type="text"
                  id="what"
                  placeholder="What are you looking for?"
                  className="w-full border border-gray-300 p-2 rounded text-md"
                />
              </div>
              <div>
                <label
                  className="block text-[#FF0000] text-md md:text-xl mb-2"
                  htmlFor="where"
                >
                  <span className="text-[#FF0000]">Where?</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="where"
                    placeholder="Enter Location"
                    className="w-full border border-gray-300 text-md p-2 rounded"
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center h-full w-10 text-black">
                    <FaMapMarkerAlt className="text-[#FF0000]" />
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="block text-[#FF0000] text-md md:text-xl mb-2"
                  htmlFor="category"
                >
                  <span className="text-[#FF0000]">Category?</span>
                </label>
                <select
                  id="category"
                  className="w-full border text-md md:text-lg border-gray-300 p-2 rounded"
                >
                  <option>Select Category</option>
                  <option>Electronics</option>
                  <option>Furniture</option>
                  <option>Vehicles</option>
                  <option>Real Estate</option>
                </select>
              </div>
            </div>
            <div className="flex items-end md:col-span-1">
              <button className="bg-[#FF0000] text-white px-32 py-2 rounded font-semibold w-full md:w-auto hover:shadow-xl hover:transition hover:duration-500 ease-in-out text-md">
                Search
              </button>
            </div>
          </div>

          <div className="lg:block md:block hidden">
            <MoreOptions />
          </div>
        </div>
      </div>
      <div className=" ml-6 mt-10 lg:hidden md:hidden  block">
        <MoreOptions />
      </div>
    </>
  );
};

export default HeroBanner;
