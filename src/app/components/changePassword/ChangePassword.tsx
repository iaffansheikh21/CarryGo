"use client";
import React, { useState } from "react";
import { FaUser, FaHeart, FaStar, FaLock, FaCheck } from "react-icons/fa";

const ChangePassword = () => {
  // State to manage selected sidebar item
  const [selectedItem, setSelectedItem] = useState("My Profile");

  // State to manage form fields
  const [formData, setFormData] = useState({
    title: "Mrs",
    name: "Jane Doe",
    location: "Manhattan, NY",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    phone: "+1 9234768444",
    email: "example@gmail.com",
    twitter: "http://www.twitter.com/jane.doe",
    facebook: "http://www.facebook.com/jane.doe",
  });

  // Handle sidebar item click
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        {/* Sidebar */}
        <div className="w-full md:w-[13%] mb-8 md:mb-28 mx-2 ">
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

        {/* Content */}
        <div className="w-full md:w-2/5 p-8 lg:pl-60 flex flex-col space-y-8 pt-10">
          <div>
            {/* Personal Info Form */}
            <div className="space-y-6  w-full">
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
                <div className="w-full ">
                  <label className="block text-sm font-semibold mb-4">
                    Current Password
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Current Password"
                    className="w-full p-5 text-sm border border-gray-300 rounded shadow-inner"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-4">
                  New Password
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder=" New Password"
                  className="w-full p-5 text-sm border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-4">
                  Repeat Password
                </label>
                <input
                  required
                  type="text"
                  placeholder="   Repeat New Password"
                  className="w-full p-5 text-sm border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end items-end">
                <button className="self-end hover:shadow-2xl py-3 px-3 text-lg bg-[#FF0000] text-white rounded-lg transition duration-300">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image and Upload Button */}
        {/* <div className="flex flex-col items-center justify-start space-y-4 mb-28">
    <img
      src="/image-08.jpg"
      alt="User"
      className="w-60 h-60 rounded-full object-cover"
    />
    <button className="py-1 px-4 border border-[#FF0000] rounded text-[#FF0000]">
      Upload a picture
    </button>
  </div> */}
      </div>

      {/* Contact Form */}
      {/* <div className="flex flex-col md:flex-row justify-center gap- ">
        <div className="lg:w-[37%] xl:w-[37%] w-full ">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-4 text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-4 text-sm border shadow-inner border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-4 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-inner focus:border-red-600 focus:ring-2 focus:ring-red-100"
              />
            </div>
          </div>
        </div>

        </div > */}
      {/* Social Form */}
      {/* <div className="flex flex-col md:flex-row justify-center mt-20">
        <div className="lg:w-[37%] xl:w-[37%] w-full">
          <div className="flex flex-col justify-between h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Social
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-4 text-gray-700">
                    Twitter
                  </label>
                  <input
                    type="text"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleInputChange}
                    className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-inner focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-4 text-gray-700">
                    Facebook
                  </label>
                  <input
                    type="text"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleInputChange}
                    className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-inner focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>
            </div>
            <button className="self-end py-2 px-6 bg-[#FF0000] text-white rounded-lg hover:bg-red-700 transition duration-300">
              Save Changes
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ChangePassword;
