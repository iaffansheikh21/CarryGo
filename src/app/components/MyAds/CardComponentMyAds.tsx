"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaUserAlt, FaListUl, FaThLarge } from "react-icons/fa"; // Import necessary icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import SortByDropDown from "../listing-grid-full-width/SortByDropDown";
import { CiEdit, CiTrash } from "react-icons/ci";
import { BiHide } from "react-icons/bi";

const CardComponentMyAds = () => {
  const cardData = [
    {
      imageUrl: "http://themestarz.net/html/craigs/assets/img/image-01.jpg",
      title: "Furniture for sale",
      location: "Manhattan, NY",
      price: "80",
      userName: "Jane Doe",
      featured: true,
      offerLabel: "OFFER",
      categoryLabel: "HOME & DECOR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis",
      detailLink: "/",
    },
    {
      imageUrl: "http://themestarz.net/html/craigs/assets/img/image-20.jpg",
      offerLabel: "OFFER",
      categoryLabel: "EDUCATION",
      title: "Creative Course",
      location: "Nashville, TN",
      price: "125",
      date: "28.04.2017",
      length: "2 month",
      userName: "Peter Browner",
      featured: false,
      description:
        "Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus,",
      detailLink: "/",
    },
    {
      imageUrl: "http://themestarz.net/html/craigs/assets/img/image-21.jpg",
      offerLabel: "AD",
      categoryLabel: "ADVENTURE",
      title: "Into The Wild",
      location: "Seattle, WA",
      price: "1,560",
      userName: "Peak Agency",
      featured: false,

      description:
        "Nam eget ullamcorper massa. Morbi fringilla lectus nec lorem tristique gravida",
      detailLink: "/",
    },
    {
      imageUrl: "http://themestarz.net/html/craigs/assets/img/image-22.jpg",
      offerLabel: "OFFER",
      categoryLabel: "REALESTATE",
      title: "Luxury Apartment",
      location: "Greeley, CO",
      price: "75,000",
      date: "13.03.2017",
      userName: "Hills Estate",
      featured: false,

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis",
      detailLink: "/",
    },

    // Add more card data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [layout, setLayout] = useState("vertical");

  const itemsPerPage = 16;
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

  const handleLayoutToggle = () => {
    setLayout(layout === "vertical" ? "horizontal" : "vertical");
  };

  return (
    <>
      <div
        className={`flex flex-col items-center ${
          layout === "horizontal" ? "space-y-0" : "space-y-2"
        }`}
      >
        <div className="flex justify-between items-start mb-6 w-full z-50">
          <div className="hidden lg:block">
            <SortByDropDown />
          </div>
          <div className="hidden lg:block">
            <button onClick={handleLayoutToggle} className="text-lg">
              {layout === "vertical" ? <FaListUl /> : <FaThLarge />}
            </button>
          </div>
        </div>
        <div
          className={`grid ${
            layout === "vertical"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-2 w-full h-full overflow-hidden"
              : "grid-cols-1 gap-7 w-full"
          }`}
        >
          {paginatedData.map((card, index) => (
            <div
              key={index}
              className={`bg-[#F8F8F8] transition-transform transform hover:-translate-y-2 hover:shadow-2xl rounded-lg mx-auto ${
                layout === "vertical"
                  ? "mt-2"
                  : "flex w-full flex-col md:flex-row"
              }`}
            >
              <div className="m-2 overflow-hidden">
                <div className="relative">
                  <Image
                    src={card.imageUrl}
                    alt="Card Image"
                    width={layout === "vertical" ? 400 : 240}
                    height={layout === "vertical" ? 256 : 160}
                    className={`object-cover ${
                      layout === "vertical"
                        ? "w-full h-64"
                        : "w-full md:w-52 h-52 md:h-full lg:h-40 lg:w-60"
                    }`}
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
                    <div className="absolute top-1/2 left-3 mt-5 transform -translate-y-1/2 bg-black font-bold text-white cursor-pointer text-xs px-2 py-1 hover:bg-red-700">
                      {card.categoryLabel}
                    </div>
                  )}
                  {layout === "vertical" && (
                    <>
                      <div className="absolute top-28 left-3 mt-2 text-lg font-semibold whitespace-nowrap hover:underline text-white cursor-pointer">
                        {card.title}
                      </div>
                      <div className="absolute top-44 pt-2 left-3 flex items-center text-md font-sans font-bold text-[#878689]">
                        <FaMapMarkerAlt className="mr-1" />
                        <span className="hover:underline cursor-pointer">
                          {card.location}
                        </span>
                      </div>
                      <div className="absolute top-56 left-3 px-5 py-1 bg-[#F8F8F8] rounded-md">
                        <div className="pt-1 text-md font-bold text-gray-900">
                          ${card.price}
                        </div>
                      </div>
                      <div className="text-md flex flex-wrap mt-4  text-[#878689]">
                        <div className="flex ml-3 items-center hover:text-red-600 hover:cursor-pointer text-sm  font-semibold text-black">
                          <CiEdit className="mr-1" />
                          Edit
                        </div>
                        <div className="flex text-sm ml-3 mt-2 text-black items-center mb-2 hover:text-red-600 hover:cursor-pointer font-semibold">
                          <BiHide className="mr-1 mb-1 hover:text-red-500" />
                          Hide
                        </div>
                        <div className="flex text-sm ml-3 mt-2 text-black items-center mb-2 hover:text-red-600 hover:cursor-pointer font-semibold">
                          <CiTrash className="mr-1 text-red-500 hover:text-red-500" />
                          Remove
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {layout === "horizontal" && (
                <div className="flex flex-col justify-between w-full p-2">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-black">
                        {card.title}
                      </div>

                      <div className="flex items-center text-md hover:underline cursor-pointer text-[#878689] mt-1">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{card.location}</span>
                      </div>
                      {card.date && (
                        <div className="flex items-center w-full  text-md  text-[#878689] mt-1">
                          <div className="bg-gray-100 w-full text-black  m">
                            <div className="text-sm py-1 flex">
                              <div className="flex-1">
                                <div className="font-bold text-gray-400">
                                  Start Date
                                </div>
                                <div className="mt-1 text-sm text-gray-700">
                                  {card.date}
                                </div>
                              </div>

                              {/* Length Section */}
                              <div className="flex-1 ml-4">
                                <div className="font-bold text-gray-400">
                                  LENGTH
                                </div>
                                {card.length && (
                                  <div className="mt-1 text-sm text-gray-700">
                                    {card.length}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div></div>
                    <div className="md:absolute md:top-32 md:left-3 px-3 py-1 bg-[#F8F8F8] rounded-md">
                      <div className="pt-1 text-md font-bold text-gray-900">
                        ${card.price}
                      </div>
                    </div>
                    <div className="text-md flex flex-wrap flex-col mt-4 border-l border-gray-300  text-[#878689]">
                      <div className="flex ml-3 items-center text-black hover:text-red-600 hover:cursor-pointer text-sm font-semibold">
                        <CiEdit className="mr-1" />
                        Edit
                      </div>
                      <div className="flex text-sm ml-3 text-black mt-2 items-center mb-2 hover:text-red-600 hover:cursor-pointer font-semibold">
                        <BiHide className="mr-1 mb-1 hover:text-red-500" />
                        Hide
                      </div>
                      <div className="flex text-sm text-black ml-3 mt-2 items-center mb-2 hover:text-red-600 hover:cursor-pointer font-semibold">
                        <CiTrash className="mr-1  text-red-500 hover:text-red-500" />
                        Remove
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between flex-col md:flex-row items-center mt-2">
                    <div className="text-sm text-gray-900 pl-3">
                      {card.description}
                    </div>
                    <div className="flex items-center text-sm text-gray-500"></div>
                    <div className="flex lg:items-center items-start  text-sm text-gray-500 p-2">
                      <Link href={card.detailLink}>
                        <button className="pl-3 pt-1  text-sm text-[#FF0000] font-bold underline cursor-pointer">
                          DETAIL
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              {/* {layout === "vertical" && (
                <div className="bg-white rounded-b-lg pt-2 h-36 flex flex-col justify-between">
                  <p className="text-gray-600 text-sm pl-3 pr-2">
                    {card.description}
                  </p>
                  <Link href={card.detailLink}>
                    <button className="pl-3 pt-1 pb-12 text-sm text-[#FF0000] font-bold underline cursor-pointer">
                      DETAIL
                    </button>
                  </Link>
                </div>
              )} */}
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

export default CardComponentMyAds;
