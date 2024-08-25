"use client";

import React, { useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FaChevronDown } from "react-icons/fa";

import {
  FaMapMarkerAlt,
  FaStar,
  FaListUl,
  FaThLarge,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
interface Seller {
  name: string;
  location: string;
  imageUrl: string;
  listings: number;
  email: string;
  phone: string;
  skype?: string;
  facebook?: string;
  additionalInfo?: string;
  tags?: string[];
  rating?: any;
}

interface SellerComponentProps {
  sellers: Seller[];
}

const SellerComponent: React.FC<SellerComponentProps> = ({ sellers }: any) => {
  const [isGrid, setIsGrid] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleLayout = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4 w-[90%] lg:w-[67%] mx-auto">
        <div className="relative inline-block mb-6">
          <label htmlFor="sort by" className="mr-2">
            Sort by:
          </label>
          <div className="relative">
            <select
              className="appearance-none p-2 border rounded z-20 mb-2 pr-8 cursor-pointer w-full"
              onClick={() => setIsOpen(!isOpen)}
              onBlur={() => setIsOpen(false)}
            >
              <option>Default Sorting</option>
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Lowest Price First</option>
              <option>Highest Price First</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FaChevronDown
                className={`w-3 h-3 text-gray-700 mb-2 transition-transform duration-300 transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={toggleLayout}
            className="p-3 text-white bg-black rounded-sm focus:outline-none"
          >
            {isGrid ? <FaListUl size={18} /> : <FaThLarge size={18} />}
          </button>
        </div>
      </div>

      {isGrid ? (
        <div className="flex justify-center items-start w-[90%] mx-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 4 }}
            className="flex justify-center lg:w-[75%] w-[99%]"
          >
            <Masonry gutter="16px">
              {sellers.map((seller: any, index: any) => (
                <div
                  key={index}
                  className="bg-[#F8F8F8] rounded-md m-1 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className="bg-white shadow-lg mt-1 rounded-sm overflow-hidden w-[96%] mx-auto  flex flex-col"
                    style={{ height: "auto", minHeight: "350px" }} // Ensuring consistent height for all cards
                  >
                    <div className="h-60 relative">
                      <Image
                        src={seller.imageUrl}
                        alt={seller.name}
                        layout="fill"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-opacity-50 p-2 flex justify-between text-black items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {seller.name}
                          </h3>
                          <p className="text-sm text-gray-300 flex items-center">
                            <FaMapMarkerAlt className="mr-1" />
                            {seller.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex items-center p-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < seller.rating ? "text-red-600" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <p className="mr-4 text-gray-400"></p>
                      <FaUser className="mr-1 ml-12 text-gray-500" />
                      <div className="flex flex-wrap">
                        <span className="text-gray-600">
                          <b>{seller.listings}</b>
                        </span>
                        <span className="text-gray-300  text-sm ml-1">
                          {" "}
                          listing
                        </span>
                      </div>
                    </div>
                    <div className="p-2 flex-grow">
                      {seller.additionalInfo && (
                        <p className="text-sm p-1 mt-2">
                          {seller.additionalInfo}
                        </p>
                      )}
                      <div className="p-1 mt-4 grid grid-cols-2 gap-1 text-sm mr-8">
                        {seller.email && (
                          <>
                            <p className="font-bold text-gray-400">Email:</p>
                            <a
                              href={`mailto:${seller.email}`}
                              className="text-black"
                            >
                              {seller.email}
                            </a>
                          </>
                        )}
                        {seller.phone && (
                          <>
                            <p className="font-bold text-gray-400">Phone:</p>
                            <a
                              href={`tel:${seller.phone}`}
                              className="text-black"
                            >
                              {seller.phone}
                            </a>
                          </>
                        )}
                        {seller.skype && (
                          <>
                            <p className="font-bold text-gray-400">Skype:</p>
                            <p className="text-black">{seller.skype}</p>
                          </>
                        )}
                        {seller.facebook && (
                          <>
                            <p className="font-bold text-gray-400">Facebook:</p>
                            <a
                              href={`https://${seller.facebook}`}
                              className="text-black"
                            >
                              {seller.facebook}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                    <Link href="/" className="lg:;mt-3">
                      <button className="pl-3 pt-1 pb-12 text-sm text-[#FF0000] font-bold underline cursor-pointer">
                        DETAIL
                      </button>
                    </Link>
                  </div>{" "}
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      ) : (
        <div className="space-y-4">
          {sellers.map((seller: any, index: any) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-[90%] lg:w-[68%] mx-auto flex flex-col sm:flex-row items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-1 h-60 relative flex-shrink-0 w-full sm:w-60">
                <Image
                  src={seller.imageUrl}
                  alt={seller.name}
                  layout="fill"
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div className="p-4 flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{seller.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < seller.rating ? "text-red-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <FaUser className="ml-2 text-gray-500" />
                    <p className="ml-1">
                      {seller.listings}{" "}
                      <span className="text-gray-400">listing</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <FaMapMarkerAlt className="mr-1" />
                  {seller.location}
                </p>
                <div className="mt-4 bg-gray-100 p-2 rounded">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
                    <div className="flex flex-col">
                      {seller.email && (
                        <>
                          <p className="font-bold text-gray-400">Email:</p>
                          <a
                            href={`mailto:${seller.email}`}
                            className="text-black"
                          >
                            {seller.email}
                          </a>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {seller.phone && (
                        <>
                          <p className="font-bold text-gray-400">Phone:</p>
                          <a
                            href={`tel:${seller.phone}`}
                            className="text-black"
                          >
                            {seller.phone}
                          </a>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {seller.skype && (
                        <>
                          <p className="font-bold text-gray-400">Skype:</p>
                          <p className="text-black">{seller.skype}</p>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col">
                      {seller.facebook && (
                        <>
                          <p className="font-bold text-gray-400">Facebook:</p>
                          <a
                            href={`https://${seller.facebook}`}
                            className="text-black"
                          >
                            {seller.facebook}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {seller.additionalInfo && (
                  <p className="text-sm mt-4">{seller.additionalInfo}</p>
                )}
                <div className="mt-4 flex justify-end">
                  <Link href="/">
                    <button className="text-sm p-3 text-[#FF0000] border border-[#FF0000] font-bold cursor-pointer hover:bg-[#FF0000] hover:text-white rounded-md">
                      DETAIL
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerComponent;
