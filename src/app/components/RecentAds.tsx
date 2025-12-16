import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const RecentAds = () => {
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
        "Nam eget imperdiet massa. Cras dolor nulla, tristique eu nisl ut, venenatis volutpat massa. Integer imperdiet finibus ipsum vitae",
      detailLink: "/",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6 bg-[#F2F2F2] ">
        {/* Heading and Dropdowns */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-lg space-y-4 md:space-y-0">
          <h1 className="text-3xl  font-sans text-center md:text-left mb-4 pb-8 lg:ml-52 md:ml-40 md:mb-0 mt-4">
            Recent Ads
          </h1>
        </div>

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
        {/* Add the new UI at the end */}

        <div className="flex flex-col items-center mt-8 px-4 h-full w-full">
          <div
            className="w-full md:w-[75%] bg-white p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: "url(/image-08.jpg)",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <h2 className="text-left text-2xl font-sans text-white mb-10">
              Get the Latest Ads in Your Inbox
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-4 items-center">
              <div className="flex-1 mb-4 md:mb-0 w-full">
                <label className="block md:mr-2 text-white font-semibold w-full">
                  Category?
                  <select className="mt-2 md:mt-0 px-4 py-2 text-black w-full border flex-grow rounded-md">
                    <option>Select Category</option>
                    <option>Home & Decor</option>
                    <option>Education</option>
                    <option>Adventure</option>
                    <option>Real Estate</option>
                    <option>Architecture</option>
                    <option>Jobs</option>
                    <option>Mobiles</option>
                    <option>Cars</option>
                    <option>Cameras</option>
                    <option>Sport</option>
                  </select>
                </label>
              </div>
              <div className="flex-1 mt-4 md:mt-0 flex items-center">
                <label className="block text-white font-semibold w-full md:w-auto flex-grow">
                  Email
                  <input
                    type="email"
                    className="w-full px-4 py-2 mt-2 md:mt-0 text-black border rounded-md"
                    placeholder="Your Email"
                  />
                </label>
                <button className="ml-2 text-center mt-6 px-4 py-2 text-xl bg-[#FF0000] text-white rounded-md md:w-auto w-12">
                  &gt;
                </button>
              </div>
            </div>
            <div className="mb-10"></div>
          </div>

          <div className="flex flex-wrap justify-center mt-24 space-x-4 md:space-x-14 mb-10">
            <Link href={"/"}>
              <Image
                src="/partner-1.png"
                alt="Logo 1"
                width={100}
                height={48}
                className="h-12 mx-2 my-2"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src="/partner-2.png"
                alt="Logo 2"
                width={100}
                height={48}
                className="h-12 mx-2 my-2"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src="/partner-3.png"
                alt="Logo 3"
                width={100}
                height={48}
                className="h-12 mx-2 my-2"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src="/partner-4.png"
                alt="Logo 4"
                width={100}
                height={48}
                className="h-12 mx-2 my-2"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src="/partner-5.png"
                alt="Logo 5"
                width={100}
                height={48}
                className="h-12 mx-2 my-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentAds;
