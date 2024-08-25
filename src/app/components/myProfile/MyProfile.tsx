"use client";
import React, { useState } from "react";
import { FaUser, FaHeart, FaStar, FaLock, FaCheck } from "react-icons/fa";

const MyProfile: React.FC = () => {
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
      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100">
        {/* Sidebar */}
        <div className="w-full md:w-[13%] mb-8 md:mb-28 pr-2">
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
        <div className="w-full md:w-2/5 p-1  flex flex-col space-y-8 ">
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

            {/* Personal Info Form */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-[30%]">
                  <label className="block text-sm font-semibold mb-4">
                    Title
                  </label>
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-4 text-sm border border-gray-300 rounded  shadow-inner"
                  >
                    <option>Mrs</option>
                    <option>Mr</option>
                    <option>Ms</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-4">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 text-sm border border-gray-300 rounded shadow-inner"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-4">
                  Your Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-4 text-sm border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-4">
                  More About You
                </label>
                <textarea
                  name="about"
                  rows={12}
                  value={formData.about}
                  onChange={handleInputChange}
                  className="w-full p-4 text-sm border border-gray-300 rounded h-32 shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image and Upload Button */}
        <div className="flex flex-col items-center justify-start space-y-4 ml-4 mb-28">
          <img
            src="/pic.webp"
            alt="User"
            className="w-60 h-60 rounded-full object-cover"
          />
          <button className="py-2 px-4 border border-[#FF0000] text-sm rounded text-[#FF0000]">
            Upload a picture
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center ml-2 ">
        {/* Contact Form */}
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

        {/* Social Form */}
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-20 ml-2">
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
            <button className="self-end py-2 px-6 mr-2 bg-[#FF0000] text-white rounded-lg hover:bg-red-700 transition duration-300">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;