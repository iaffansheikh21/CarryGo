"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const SideSection = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-4 w-full">
        <div className="grid grid-cols-1 gap-4">
        <h1 className="mt-8 mb-2 font-normal text-2xl">Search Ads</h1>
          <div>
            <label className="block text-black text-lg mb-2" htmlFor="what">
              What?
            </label>
            <input
              type="text"
              id="what"
              placeholder="What are you looking for?"
              className="w-full border border-gray-300 p-2 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-black text-lg mb-2" htmlFor="where">
              Where?
            </label>
            <div className="relative">
              <input
                type="text"
                id="where"
                placeholder="Enter Location"
                className="w-full border border-gray-300 text-sm p-2 rounded"
              />
              <div className="absolute top-0 right-0 flex items-center justify-center h-full w-10 text-black">
              <FaMapMarkerAlt />
              </div>
            </div>
          </div>
          <div>
            <label
              className="block text-black text-lg mb-2"
              htmlFor="category"
            >
              Category?
            </label>
            <select
              id="category"
              className="w-full border text-sm border-gray-300 p-2 rounded"
            >
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Vehicles</option>
              <option>Real Estate</option>
            </select>
          </div>
        </div>
        <div className="flex items-end">
          <button className="bg-red-600 text-white px-4 py-2 mb-1 hover:shadow-xl hover:transition hover:duration-500 ease-in-out text-sm rounded font-semibold w-full">
            Search
          </button>
        </div>
      </div>

      <div className="flex items-center justify-start mb-4">
        <button
          className="text-black hover:text-red-600 font-semibold flex items-center justify-center"
          onClick={() => setShowMoreOptions(!showMoreOptions)}
        >
          <span className="text-lg mr-2 text-red-600">+</span> More Options
        </button>
      </div>

      {showMoreOptions && (
        <div className="mt-4 p-4 border-t border-gray-300 rounded-md bg-white w-full">
          <div className="flex flex-col gap-4">
            {/* Checkbox Options */}
            <div className="flex items-center text-gray-800">
              <input type="checkbox" id="new" className="mr-2 h-4 w-4 " />
              <label htmlFor="new" className="text-sm ">
                New
              </label>
            </div>
            <div className="flex items-center  text-gray-800">
              <input type="checkbox" id="used" className="mr-2 h-4 w-4" />
              <label htmlFor="used" className="text-sm">
                Used
              </label>
            </div>
            <div className="flex items-center text-gray-800">
              <input type="checkbox" id="with-photo" className="mr-2 h-4 w-4" />
              <label htmlFor="with-photo" className="text-sm">
                With Photo
              </label>
            </div>
            <div className="flex items-center text-gray-800">
              <input type="checkbox" id="featured" className="mr-2 h-4 w-4" />
              <label htmlFor="featured" className="text-sm">
                Featured
              </label>
            </div>

            {/* Price Inputs */}
            <div className="relative">
              <input
                type="text"
                placeholder="Minimal Price"
                className="w-full border border-gray-300 p-2 rounded pl-4 pr-8 text-sm"
              />
              <div className="absolute top-0 right-0 flex items-center justify-center h-full w-6 text-gray-600">
                $
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Maximal Price"
                className="w-full border border-gray-300 p-2 rounded pl-4 pr-8 text-sm"
              />
              <div className="absolute top-0 right-0 flex items-center justify-center h-full w-6 text-gray-600">
                $
              </div>
            </div>

            {/* Distance Select */}
            <div>
              <select className="w-full border border-gray-300 p-2 rounded text-sm">
                <option>Distance</option>
                <option>5 km</option>
                <option>10 km</option>
                <option>20 km</option>
                <option>50 km</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideSection;
