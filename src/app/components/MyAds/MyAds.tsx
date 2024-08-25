"use client";
import React, { useState } from "react";
import { FaUser, FaHeart, FaStar, FaLock, FaCheck } from "react-icons/fa";
import CardComponentMyAds from "./CardComponentMyAds";

const MyAds = () => {
  const [selectedItem, setSelectedItem] = useState("My Profile");

  // Handle sidebar item click
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center lg:w-[90%] w-full mx-auto mt-10">
        {/* Sidebar */}
        <div className="w-full md:w-[20%] mb-5 md:mb-28 lg:mb-10  pr-2 p-4">
          <ul className="space-y-6 ml-2">
            {[
              { name: "My Profile", icon: <FaUser /> },
              { name: "My Ads Listing", icon: <FaHeart /> },
              { name: "Bookmarks", icon: <FaStar /> },
              { name: "Change Password", icon: <FaLock /> },
              { name: "Sold Items", icon: <FaCheck /> },
            ].map((item) => (
              <li
                key={item.name}
                className="flex flex-col items-start cursor-pointer"
                onClick={() => handleItemClick(item.name)}
              >
                <div
                  className={`flex items-center text-gray-600 ${
                    selectedItem === item.name
                      ? "text-red-600 font-semibold"
                      : ""
                  }`}
                >
                  {item.icon} <span className="ml-2">{item.name}</span>
                </div>
                <hr className="w-full border-gray-300 mt-2" />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col lg:w-[55%] w-full lg:ml-10  mb-2">
          <CardComponentMyAds />
        </div>
      </div>
    </>
  );
};

export default MyAds;
