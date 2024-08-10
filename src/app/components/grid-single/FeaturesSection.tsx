import React from "react";

const FeaturesSection = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] p-4 lg:ml-14 ">
      <h2 className="text-black text-2xl md:text-3xl font-semibold mb-4">
        Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-red-500 focus:ring-red-500"
          />
          <span>Quality Wood</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-red-500 focus:ring-red-500"
          />
          <span>Brushed Aluminum Handles</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-red-500 focus:ring-red-500"
          />
          <span>Foam Mattress</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-red-500 focus:ring-red-500"
          />
          <span>Detachable Chaise Section</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-red-500 focus:ring-red-500"
          />
          <span>3 Fold Pull Out Mechanism</span>
        </label>
      </div>
    </div>
  );
};

export default FeaturesSection;
