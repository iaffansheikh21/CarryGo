"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";

const SingleCardComponent = () => {
  const cardData = [
    {
      imageUrl:
        "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "ARCHITECTURE",
      title: "Redesign Your Apartment",
      location: "Greeley, CO",
      price: "200",
      date: "13.03.2017",
      userName: "Hills Estate",
      featured: false,
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/652355/pexels-photo-652355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "DEMAND",
      categoryLabel: "JOBS",
      title: "Seeking for a Job",
      location: "Delavan, IL",
      price: "1200",
      date: "10.03.2017",
      userName: "Aurelio Thomas",
      featured: false,
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
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <>
      <div className="grid grid-cols-1 gap-3 w-full h-full overflow-hidden">
        {paginatedData.map((card, index) => (
          <div
            key={index}
            className="bg-[#F8F8F8] transition-transform transform hover:-translate-y-2 hover:shadow-2xl rounded-lg mx-auto"
          >
            <div className="m-2 overflow-hidden">
              <div className="relative">
                <img
                  src={card.imageUrl}
                  alt="Card Image"
                  className="object-cover w-full h-64"
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
                <div className="absolute top-36 left-3 mt-2 text-lg font-semibold whitespace-nowrap hover:underline text-white cursor-pointer">
                  {card.title}
                </div>
                <div className="absolute top-44 pt-1 left-3 flex items-center text-md font-sans font-bold text-[#878689]">
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
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center text-sm text-gray-500">
                <div className="flex items-center mr-10">
                  <SlCalender className="mr-1" />
                  {card.date}
                </div>
                <div className="flex items-center whitespace-nowrap hover:text-red-500 cursor-pointer">
                  <FaUserAlt className="mr-1" />
                  {card.userName}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleCardComponent;
