"use client";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";

const MyForm = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-center space-y-6 sm:space-y-0 sm:space-x-10 mb-8">
        {/* Radio Section */}
        <div className="w-full sm:w-auto flex-none">
          <h3 className="mb-2">Radio</h3>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <label className="flex items-center space-x-2 sm:space-x-4">
              <input type="radio" name="radio" className="text-red-600" />
              <span>Offer</span>
            </label>
            <label className="flex items-center space-x-2 sm:space-x-4">
              <input type="radio" name="radio" />
              <span>Demand</span>
            </label>
          </div>
        </div>

        {/* Checkbox Section */}
        <div className="w-full sm:w-auto flex-none">
          <h3 className="mb-2">Checkbox</h3>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Check me</span>
          </label>
        </div>

        {/* Input Section */}
        <div className="w-full sm:flex-1 flex flex-wrap sm:flex-nowrap items-start">
          <div className="w-full sm:w-[70%] lg:w-[80%]">
            <h3 className="mb-2">Input *</h3>
            <input
              type="text"
              placeholder="Input"
              className="w-full p-4 shadow-inner border rounded-l-md"
            />
          </div>
          <button className="w-full sm:w-auto px-6 py-2 bg-[#FF0000] text-white rounded-r-md flex items-center justify-center mt-4 sm:mt-0 sm:ml-2">
            <span>Submit</span>
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Select Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full sm:w-[90%]">
        <div>
          <h3 className="mb-2">Default Select</h3>
          <div className="relative">
            <select className="w-full p-3 border rounded-md appearance-none">
              <option>Two - Selected</option>
              <option>One</option>
              <option>Three</option>
            </select>
            <FaChevronDown className="absolute top-3 right-3 text-gray-500" />
          </div>
        </div>
        <div>
          <h3 className="mb-2">Searchable Select</h3>
          <div className="relative">
            <select
              className="w-full p-3 border rounded-md appearance-none"
              data-enable-search="true"
            >
              <option>Select</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
            <FaChevronDown className="absolute top-3 right-3 text-gray-500" />
          </div>
        </div>
      </div>
      <small className="text-gray-500 flex justify-center items-center mt-2">
        Using attribute{" "}
        <code className="text-[#FF0000] ml-1">data-enable-search="true"</code>
      </small>
    </div>
  );
};

export default MyForm;
