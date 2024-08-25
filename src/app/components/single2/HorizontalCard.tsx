"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaUserAlt, FaListUl, FaThLarge } from "react-icons/fa"; // Import necessary icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import FeaturesSection from "../grid-single/FeaturesSection";

const HorizontalCard = () => {
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
    {
      imageUrl:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "Mobiles",
      title: "Used Smartphone",
      location: "West Roxbury, MA",
      price: "300",
      date: "28.02.2017",
      userName: "Detroit Pet",
      featured: false,

      description:
        "Vestibulum congue at justo semper dignissim. Pellentesque ullamcorper justo quis bibendum consequat.",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "Mobiles",
      title: "Used Smartphone",
      location: "West Roxbury, MA",
      price: "300",
      date: "28.02.2017",
      userName: "Detroit Pet",
      featured: false,

      description:
        "Vestibulum congue at justo semper dignissim. Pellentesque ullamcorper justo quis bibendum consequat.",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "Mobiles",
      title: "Used Smartphone",
      location: "West Roxbury, MA",
      price: "300",
      date: "28.02.2017",
      userName: "Detroit Pet",
      featured: false,

      description:
        "Vestibulum congue at justo semper dignissim. Pellentesque ullamcorper justo quis bibendum consequat.",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "Mobiles",
      title: "Used Smartphone",
      location: "West Roxbury, MA",
      price: "300",
      date: "28.02.2017",
      userName: "Detroit Pet",
      featured: false,

      description:
        "Vestibulum congue at justo semper dignissim. Pellentesque ullamcorper justo quis bibendum consequat.",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "Mobiles",
      title: "Used Smartphone",
      location: "West Roxbury, MA",
      price: "300",
      date: "28.02.2017",
      userName: "Detroit Pet",
      featured: false,

      description:
        "Vestibulum congue at justo semper dignissim. Pellentesque ullamcorper justo quis bibendum consequat.",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "Mobiles",
      title: "Used Smartphone",
      location: "West Roxbury, MA",
      price: "300",
      date: "28.02.2017",
      userName: "Detroit Pet",
      featured: false,

      description:
        "Vestibulum congue at justo semper dignissim. Pellentesque ullamcorper justo quis bibendum consequat.",
      detailLink: "/",
    },

    // Add more card data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);
  const paginatedData = cardData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center lg:w-[69%] lg:mt-10 lg:ml-16 md:w-[85%] sm:w-[95%]">
        <div className="w-[96%] lg:ml-40">
          <FeaturesSection />
        </div>
        <br />
        <hr className="w-[74%] border border-gray-200 " />
        <br />
        <h1 className="flex justify-start items-start text-2xl font-semibold mb-3 md:text-xl sm:text-lg">
          Similar Ads
        </h1>
        <div className="grid grid-cols-1 gap-7 w-[65%] md:w-[75%] sm:w-[85%]">
          {paginatedData.map((card, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] transition-transform transform hover:-translate-y-2 hover:shadow-2xl rounded-lg mx-auto flex w-full flex-col md:flex-row"
            >
              <div className="m-2 overflow-hidden">
                <div className="relative">
                  <img
                    src={card.imageUrl}
                    alt="Card Image"
                    className="object-cover w-full md:w-52 h-52 md:h-full sm:h-40 lg:w-60 lg:h-44"
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
                    <div className="absolute top-1/2 left-3 mt-3 transform -translate-y-1/2 bg-black font-bold text-white cursor-pointer text-xs px-2 py-1 hover:bg-red-700">
                      {card.categoryLabel}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between w-full p-2">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-black md:text-md sm:text-sm">
                      {card.title}
                    </div>
                    <div className="text-md text-gray-400 mb-2 mt-2 sm:text-xs">
                      {card.description}
                    </div>
                    <div className="flex items-center cursor-pointer text-md hover:underline text-[#878689] mt-1 sm:text-sm">
                      <FaMapMarkerAlt className="mr-1" />
                      <span>{card.location}</span>
                    </div>
                  </div>
                  <div className="md:absolute md:top-28 lg:top-36 lg:left-3 md:left-1 px-3 py-1 bg-[#F8F8F8] rounded-md">
                    <div className="pt-1 text-md font-bold text-gray-400 sm:text-sm">
                      ${card.price}
                    </div>
                  </div>
                  <div className="text-md flex flex-col text-[#878689] sm:text-sm">
                    <div className="flex items-center  hover:text-red-500 cursor-pointer mb-2">
                      <FaUserAlt className="mr-1" />
                      {card.userName}
                    </div>
                    <div className="flex items-center text-sm text-[#878689] sm:text-xs">
                      <SlCalender className="mr-1" />
                      {card.date}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center text-sm text-gray-500"></div>
                  <div className="flex items-center text-sm text-gray-500 p-2">
                    <Link href={card.detailLink}>
                      <button className="text-sm border p-2 rounded-md border-[#FF0000] text-[#FF0000] cursor-pointer mt-2 hover:bg-[#FF0000] hover:text-white sm:text-xs">
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
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mx-2 p-2 hover:bg-white bg-opacity-10"
        >
          <IoIosArrowBack />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-2 px-5 py-2  rounded-md ${
              currentPage === index + 1 ? "text-white bg-[#FF0000]" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 p-2 hover:bg-white bg-opacity-10"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
};

export default HorizontalCard;
