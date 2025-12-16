import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
const cardData = [
  {
    imageUrl:
      "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Furniture for sale",
    location: "Manhattan, NY",
    price: "80",
    date: "02.05.2017",
    userName: "Jane Doe",
    featured: true,
    offerLabel: "OFFER",
    categoryLabel: "HOME & DECOR",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis",
    detailLink: "/",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    offerLabel: "OFFER",
    categoryLabel: "EDUCATION",
    title: "Creative Course",
    location: "Nashville, TN",
    price: "125",
    date: "28.04.2017",
    userName: "Peter Browner",
    featured: false,

    description:
      "Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus,",
    detailLink: "/",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    offerLabel: "AD",
    categoryLabel: "ADVENTURE",
    title: "Into The Wild",
    location: "Seattle, WA",
    price: "1,560",
    date: "21.04.2017",
    userName: "Peak Agency",
    featured: false,

    description:
      "Nam eget ullamcorper massa. Morbi fringilla lectus nec lorem tristique gravida",
    detailLink: "/",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    offerLabel: "AD",
    categoryLabel: "ADVENTURE",
    title: "Into The Wild",
    location: "Seattle, WA",
    price: "1,560",
    date: "21.04.2017",
    userName: "Peak Agency",
    featured: false,

    description:
      "Nam eget ullamcorper massa. Morbi fringilla lectus nec lorem tristique gravida",
    detailLink: "/",
  },
];

const VerticleCardsElemets = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6 bg-[#F2F2F2] ">
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] transition-transform transform hover:-translate-y-2 hover:shadow-2xl rounded-lg w-72 mt-4 mx-4 mb-4"
            >
              <div className="m-2 overflow-hidden">
                <div className="relative">
                  <Image
                    src={card.imageUrl}
                    alt="Card Image"
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover"
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
                <div className="p-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="flex items-center mr-10 hover:text-[#FF0000] cursor-pointer">
                      <SlCalender className="mr-1" />
                      {card.date}
                    </div>
                    <div className="flex items-center whitespace-nowrap hover:text-[#FF0000] cursor-pointer">
                      <FaUserAlt className="mr-1" />
                      {card.userName}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-b-lg pt-2 h-36 flex flex-col justify-between">
                <p className="text-gray-600 text-sm pl-3 pr-2">
                  {card.description}
                </p>
                <Link href={card.detailLink}>
                  <button className="pl-3 pt-1 pb-12 text-sm text-red-500 font-bold underline cursor-pointer">
                    DETAIL
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VerticleCardsElemets;
