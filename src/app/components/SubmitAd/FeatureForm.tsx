import { useState } from "react";

const FeatureForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
      <div className="md:w-1/2 w-full">
        <label className="block mb-1 font-semibold">Category*</label>
        <select
          className="w-full md:w-[80%] p-2 border rounded"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">Select Category</option>
          <option value="Computer">Computer</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>

      <div className="md:w-full w-full">
        <label className="block mb-1 font-semibold">Features</label>
        <div className="p-4 border rounded h-full text-gray-500">
          {selectedCategory === "Computer" && (
            <div className="text-gray-700">
              {/* Computer Form */}
              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="md:w-1/3 w-full pb-4 md:pr-2">
                  <label className="block mb-1 font-semibold">Processor</label>
                  <input
                    type="text"
                    placeholder="Select Processor"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
                <div className="md:w-1/3 w-full md:px-2">
                  <label className="block mb-1 font-semibold">Core</label>
                  <input
                    type="text"
                    placeholder="Core"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
                <div className="md:w-1/3 w-full md:px-2">
                  <label className="block mb-1 font-semibold">Frequency</label>
                  <input
                    type="text"
                    placeholder="Core"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="md:w-1/3 w-full pb-4 md:pr-2">
                  <label className="block mb-1 font-semibold">RAM</label>
                  <input
                    type="text"
                    placeholder="RAM (GB)"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
                <div className="md:w-1/3 w-full md:px-2">
                  <label className="block mb-1 font-semibold">MainBoard</label>
                  <input
                    type="text"
                    placeholder="MainBoard"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
                <div className="md:w-1/3 w-full md:pl-2">
                  <label className="block mb-1 font-semibold">OS</label>
                  <select className="w-full p-2 border rounded shadow-inner focus:outline-none">
                    <option>Select OS</option>
                    <option>Windows</option>
                    <option>Linux</option>
                    <option>Apple Mac</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-semibold">
                  Other Details
                </label>
                <textarea
                  placeholder="Other details..."
                  className="w-full p-2 border rounded shadow-inner focus:outline-none"
                />
              </div>
            </div>
          )}

          {selectedCategory === "Real Estate" && (
            <div className="text-gray-700">
              {/* Real Estate Form */}
              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="md:w-1/2 w-full pb-4 md:pr-2">
                  <label className="block mb-1 font-semibold">
                    Property Type
                  </label>
                  <select className="w-full p-2 border rounded shadow-inner focus:outline-none">
                    <option>Select Property Type</option>
                    <option>Apartment</option>
                    <option>Cabin</option>
                    <option>House</option>
                    <option>Condominium</option>
                  </select>
                </div>
                <div className="md:w-1/2 w-full md:pl-2">
                  <label className="block mb-1 font-semibold">Status</label>
                  <select className="w-full p-2 border rounded shadow-inner focus:outline-none">
                    <option>Select Status</option>
                    <option>Sale</option>
                    <option>Rent</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="md:w-1/3 w-full pb-4 md:pr-2">
                  <label className="block mb-1 font-semibold">Area</label>
                  <input
                    type="text"
                    placeholder="m²"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
                <div className="md:w-1/3 w-full md:px-2">
                  <label className="block mb-1 font-semibold">Bedrooms</label>
                  <input
                    type="text"
                    placeholder="Bedrooms"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
                <div className="md:w-1/3 w-full md:pl-2">
                  <label className="block mb-1 font-semibold">Bathrooms</label>
                  <input
                    type="text"
                    placeholder="Bathrooms"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-semibold">
                  Property Features
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2">Air Conditioning</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2">Laundry</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2">Central Heating</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2">Garage</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2">Balcony</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2">Terrace</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2">Alaram</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedCategory === "Furniture" && (
            <div className="text-gray-700">
              {/* Real Estate Form */}
              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="md:w-1/2 w-full pb-4 md:pr-2">
                  <label className="block mb-1 font-semibold">Type</label>
                  <select className="w-full p-2 border rounded shadow-inner focus:outline-none">
                    <option> Type</option>
                    <option>Bed</option>
                    <option>Wardrobe</option>
                    <option>Tabel</option>
                  </select>
                </div>
                <div className="md:w-1/2 w-full pb-4 md:pr-2">
                  <label className="block mb-1 font-semibold">Material</label>
                  <select className="w-full p-2 border rounded shadow-inner focus:outline-none">
                    <option>Select Material</option>
                    <option>Wood</option>
                    <option>Leather</option>
                  </select>
                </div>
                <div className="md:w-1/2 w-full md:pl-2">
                  <label className="block mb-1 font-semibold">Status</label>
                  <select className="w-full p-2 border rounded shadow-inner focus:outline-none">
                    <option>Select Status</option>
                    <option>New </option>
                    <option>Used</option>
                  </select>
                </div>
              </div>

              <h2 className="text-gray-400 pb-4">Size & Width</h2>
              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="md:w-1/3 w-full pb-4 md:pr-2">
                  <label className="block mb-1 font-semibold">Length</label>
                  <input
                    type="text"
                    placeholder="mm"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
                <div className="md:w-1/3 w-full md:px-2">
                  <label className="block mb-1 font-semibold">Width</label>
                  <input
                    type="text"
                    placeholder="mm"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
                <div className="md:w-1/3 w-full md:pl-2">
                  <label className="block mb-1 font-semibold">Height</label>
                  <input
                    type="text"
                    placeholder="mm"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
                <div className="md:w-1/3 w-full md:pl-2">
                  <label className="block mb-1 font-semibold">Weight</label>
                  <input
                    type="text"
                    placeholder="kg"
                    className="w-full p-2 border rounded shadow-inner focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedCategory === "Please Select a Category" &&
            "Please Select a Category"}
        </div>
      </div>
    </div>
  );
};

export default FeatureForm;
