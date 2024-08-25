"use client";
import React, { useState } from "react";

const MoreOptions = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <>
      <div className="flex items-center justify-start mb-4">
        <button
          className={`text-[#FF0000]  font-semibold flex items-center justify-center transition-transform duration-300 ${
            showMoreOptions ? "" : ""
          }`}
          onClick={() => setShowMoreOptions(!showMoreOptions)}
        >
          <span className="text-xl mr-2 text-[#FF0000] mb-1 transition-transform duration-300">
            {showMoreOptions === false ? "+" : "- "}
          </span>{" "}
          More Options
        </button>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showMoreOptions ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 p-6 border border-gray-300 rounded-md bg-white ">
          <div className="flex flex-col md:flex-row gap-4 items-start md:gap-6">
            {/* Checkbox Options */}
            <div className="flex items-center text-gray-800 flex-1">
              <input type="checkbox" id="new" className="mr-2 h-4 w-4" />
              <label htmlFor="new" className="text-sm">
                New
              </label>
            </div>
            <div className="flex items-center text-gray-800 flex-1">
              <input type="checkbox" id="used" className="mr-2 h-4 w-4" />
              <label htmlFor="used" className="text-sm">
                Used
              </label>
            </div>
            <div className="flex items-center text-gray-800 flex-1">
              <input type="checkbox" id="with-photo" className="mr-2 h-4 w-4" />
              <label htmlFor="with-photo" className="text-sm">
                With Photo
              </label>
            </div>
            <div className="flex items-center text-gray-800 flex-1">
              <input type="checkbox" id="featured" className="mr-2 h-4 w-4" />
              <label htmlFor="featured" className="text-sm">
                Featured
              </label>
            </div>

            {/* Price Inputs */}
            <div className="relative flex-1 max-w-xs md:max-w-[calc(25%-1rem)]">
              <input
                type="text"
                placeholder="Minimal Price"
                className="w-full border border-gray-300 p-2 rounded pl-4 pr-10 text-xs"
              />
              <div className="absolute top-0 right-0 flex items-center justify-center h-full w-6 text-gray-600">
                $
              </div>
            </div>
            <div className="relative flex-1 max-w-xs md:max-w-[calc(25%-1rem)]">
              <input
                type="text"
                placeholder="Maximal Price"
                className="w-full border border-gray-300 p-2 rounded pl-4 pr-10 text-xs"
              />
              <div className="absolute top-0 right-0 flex items-center justify-center h-full w-6 text-gray-600">
                $
              </div>
            </div>

            {/* Distance Select */}
            <div className="flex-1 max-w-xs md:max-w-[calc(25%-1rem)]">
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
      </div>
    </>
  );
};

export default MoreOptions;
