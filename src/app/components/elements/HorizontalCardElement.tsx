"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaUserAlt, FaListUl, FaThLarge } from "react-icons/fa"; // Import necessary icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import FeaturesSection from "../grid-single/FeaturesSection";

const HorizontalCardElement = () => {
  const cardData = [
    {
      imageUrl:
        "https://images.pexels.com/photos/369264/pexels-photo-369264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "SPORT",
      title: "Urban Bike",
      location: "Freeport, TX",
      price: "140",
      date: "6.11.2016",
      userName: "Laura",
      featured: false,

      description:
        "Nam eget imperdiet massa. Cras dolor nulla, tristique eu nisl ut, venenatis volutpat massa. Integer imperdiet finibus ipsum vitae",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/369264/pexels-photo-369264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "SPORT",
      title: "Urban Bike",
      location: "Freeport, TX",
      price: "140",
      date: "6.11.2016",
      userName: "Laura",
      featured: false,

      description:
        "Nam eget imperdiet massa. Cras dolor nulla, tristique eu nisl ut, venenatis volutpat massa. Integer imperdiet finibus ipsum vitae",
      detailLink: "/",
    },

    // Add more card data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 16;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);
  const paginatedData = cardData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className=" flex justify-start items-start">
        <div className="flex flex-col justify-start items-start  w-full">
          <div className="grid grid-cols-1 gap-7 w-full  ">
            {paginatedData.map((card, index) => (
              <div
                key={index}
                className="bg-[#F8F8F8] transition-transform transform hover:-translate-y-2 hover:shadow-2xl rounded-lg flex w-full flex-col md:flex-row"
              >
                <div className="m-2 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={card.imageUrl}
                      alt="Card Image"
                      width={400}
                      height={192}
                      className="object-cover w-full h-48 rounded-md"
                    />
                    {card.offerLabel && (
                      <div className="absolute top-0 left-0 bg-white bg-opacity-75 text-[#524F4E] px-2 py-1 text-sm m-1 mt-1 rounded-md">
                        {card.offerLabel}
                      </div>
                    )}
                    {card.featured && (
                      <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 cursor-pointer">
                        FEATURED
                      </div>
                    )}
                    {card.categoryLabel && (
                      <div className="absolute top-1/2 left-2 rounded-sm mt-3 transform -translate-y-1/2 bg-black font-bold text-white cursor-pointer text-xs px-2 py-1 hover:bg-red-700">
                        {card.categoryLabel}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-between w-full p-2">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex-1">
                      <div className="lg:text-xl font-semibold text-black md:text-md sm:text-sm">
                        {card.title}
                      </div>

                      <div className="flex items-center lg:text-lg cursor-pointer hover:underline mt-3   text-[#878689]  sm:text-sm">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{card.location}</span>
                      </div>
                      <div className="text-md text-gray-900 mt-10">
                        {card.description}
                      </div>
                    </div>
                    <div className="md:absolute md:top-24 lg:top-40 md:left-1 px-3 ml-2 py-1 bg-[#F8F8F8] rounded-md">
                      <div className="pt-1 text-md font-bold text-gray-900 ">
                        ${card.price}
                      </div>
                    </div>
                    <div className="text-md flex flex-col text-[#878689] sm:text-sm mb-20">
                      <div className="flex items-center mb-2 hover:text-[#FF0000] cursor-pointer">
                        <FaUserAlt className="mr-1 " />
                        {card.userName}
                      </div>
                      <div className="flex items-center text-sm hover:text-[#FF0000] cursor-pointer text-[#878689] sm:text-xs">
                        <SlCalender className="mr-1" />
                        {card.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-sm text-gray-500"></div>
                    <div className="flex items-center text-sm text-gray-500 p-2">
                      <Link href={card.detailLink}>
                        <button className="text-md font-semibold border p-3 rounded-md border-[#FF0000] text-[#FF0000] cursor-pointer  hover:bg-[#FF0000] hover:text-white sm:text-xs">
                          DETAIL
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalCardElement;
