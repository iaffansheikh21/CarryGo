"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const CardComponent = () => {
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
      startDate: "28.04.2017",
      length: "1 months",
      Bedrooms: "3",

      description:
        " Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus,Proin at tortor eros.",
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
      offerLabel: "OFFER",
      categoryLabel: "REALESTATE",
      title: "Luxury Apartment",
      location: "Greeley, CO",
      price: "75,000",
      startDate: "13.03.2017",
      length: "3 months",
      Bedrooms: "2",
      date: "13.03.2017",
      userName: "Hills Estate",
      featured: false,

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "ARCHITECTURE",
      title: "Redesign Your Apartment",
      location: "Greeley, CO",
      price: "200",
      date: "13.03.2017",
      startDate: "13.03.2017",
      length: "1 months",
      Bedrooms: "3",
      userName: "Hills Estate",
      featured: false,

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis",
      detailLink: "/",
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

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis",
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
      startDate: "28.02.2017",
      length: "2 months",
      Bedrooms: "1",

      description:
        "Vestibulum congue at justo semper dignissim. Pellentesque ullamcorper justo quis bibendum consequat.",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "CARS",
      title: "Offroad Car",
      location: "Nehalem, OR",
      price: "30,000",
      date: "14.01.2017",
      userName: "Leonardo",
      featured: false,

      description:
        "Nam eget imperdiet massa. Cras dolor nulla, tristique eu nisl ut, venenatis volutpat massa. Integer imperdiet finibus ipsum vitae.Nam eget imperdiet massa. Cras dolor nulla, tristique eu nisl ut, ",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "CAMERAS",
      title: "Retro Camera",
      location: "Bethany, WV",
      price: "120",
      date: "20.12.2016",
      userName: "Paula",
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
      startDate: "6.11.2016",
      length: "1 months",
      Bedrooms: "2",
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
    // Add more card data as needed
  ];

  return (
    <>
      {/* Bottom Elliptical Background */}
      {/* <div
        className="h-32 bg-[#F2F2F2]"
        style={{
          clipPath: "ellipse(90% 100% at 50% 100%)",
        }}
      ></div> */}
      <div className="flex flex-col justify-center items-center space-y-6 bg-[#F2F2F2] w-full ">
        {/* Heading and Dropdowns */}
        <div className=" flex flex-col md:flex-row md:items-center justify-between p-4 lg:w-[74%] w-full rounded-lg">
          <h1 className="text-3xl font-sans lg:mb-0 mb-10 lg:text-left text-center">
            Recent Listings
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-4">
            <select className="px-4 py-2  w-[80%] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500">
              <option value="">Category</option>
              <option value="Home">Home & Decor</option>
              <option value="Education">Education</option>
              <option value="Adventure">Adventure</option>
              <option value="RealEstate">Real Estate</option>
              <option value="Architecture">Architecture</option>
              <option value="Jobs">Jobs</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Cars">Cars</option>
              <option value="Cameras">Cameras</option>
              <option value="Sport">Sport</option>
            </select>
            <select className="px-4 py-2 bg-white border w-[80%] border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500">
              <option value="">Default Sorting</option>
              <option value="PriceLowHigh">Price: Low to High</option>
              <option value="PriceHighLow">Price: High to Low</option>
              <option value="Newest">Newest Listings</option>
              <option value="Oldest">Oldest Listings</option>
            </select>
          </div>
        </div>
        {/* Card Grid */}
        <div className="lg:w-[73%] w-[90%] m-4">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 4 }}
          >
            <Masonry gutter="10px">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#F8F8F8] transition-transform transform hover:-translate-y-2 hover:shadow-2xl rounded-lg w-full mt-4"
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
                        <div className="absolute top-0 right-0 bg-[#FF0000] text-white text-xs px-2 py-1 cursor-pointer">
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
                  <div className="bg-white rounded-b-lg pt-2 flex flex-col justify-between">
                    <p className="text-gray-500 text-xs pl-1 pr-2">
                      {card.description}
                    </p>
                    <div className="w-full text-xs text-[#878689] mt-2 pl-1 pr-14">
                      {/* Start Date */}
                      {card.startDate && (
                        <div className="flex justify-between items-center py-1 text-black">
                          <span className="text-gray-400">Start Date:</span>
                          <span className="text-gray-700">
                            {card.startDate}
                          </span>
                        </div>
                      )}

                      {/* Length */}
                      {card.length && (
                        <div className="flex justify-between items-center py-1 text-black">
                          <span className="text-gray-400">Length:</span>
                          <span className="text-gray-700 ">{card.length}</span>
                        </div>
                      )}

                      {/* Bedrooms */}
                      {card.Bedrooms && (
                        <div className="flex justify-between items-center py-1 text-black">
                          <span className="text-gray-400">Bedrooms:</span>
                          <span className="text-gray-700 pr-6">
                            {card.Bedrooms}
                          </span>
                        </div>
                      )}
                    </div>

                    <Link href={card.detailLink}>
                      <button className="pl-3 mt-5 pt-1 pb-2 text-sm text-red-500 font-bold underline cursor-pointer">
                        DETAIL
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
