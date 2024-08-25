"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon

const SortByDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="relative inline-block text-left z-50">
        {/* Label */}
        <div className="flex justify- items-center  mb-2">
          <label htmlFor="sortBy" className="font-bold text-gray-700">
            Sort by:
          </label>
          <button
            type="button"
            onClick={toggleDropdown}
            className="flex items-center justify-between w-48 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            <span>Default Sorting</span>
            <FaChevronDown
              className={`w-3 h-3 ml-2 transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 w-48 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
            <button
              type="button"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => console.log("Default Sorting")}
            >
              Default Sorting
            </button>
            <button
              type="button"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => console.log("Newest First")}
            >
              Newest First
            </button>
            <button
              type="button"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => console.log("Lowest Price First")}
            >
              Lowest Price First
            </button>
            <button
              type="button"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => console.log("Highest Price First")}
            >
              Highest Price First
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SortByDropDown;
