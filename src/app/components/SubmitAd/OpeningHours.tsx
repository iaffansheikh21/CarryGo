import { useState } from "react";

const OpeningHours = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="bg-white p-4 rounded flex items-center justify-between cursor-pointer"
        onClick={toggleSection}
      >
        <span className="text-gray-700 hover:text-[#FF0000]">
          <span className="text-[#FF0000]">{isOpen ? "-" : "+"} </span>
          Add opening hours
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white w-[80%] p-4 mt-2 rounded shadow-sm">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <div key={day} className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-semibold mr-8 w-1/4">
                {day}
              </span>
              <input
                type="text"
                placeholder="Open"
                className="w-1/3 p-2 border rounded shadow-inner focus:outline-none"
              />
              <input
                type="text"
                placeholder="Close"
                className="w-1/3 p-2 ml-4 border rounded shadow-inner focus:outline-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
