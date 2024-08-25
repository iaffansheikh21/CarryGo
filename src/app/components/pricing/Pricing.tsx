import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Silver",
      price: "$9.90",
      features: {
        emailSupport: true,
        phoneSupport: true,
        documentation: false,
        consultation: "3 hours",
        profileBuilder: false,
      },
    },
    {
      name: "Gold",
      price: "$19.90",
      features: {
        emailSupport: true,
        phoneSupport: true,
        documentation: true,
        consultation: "3 hours",
        profileBuilder: false,
      },
    },
    {
      name: "Platinum",
      price: "$29.90",
      features: {
        emailSupport: true,
        phoneSupport: true,
        documentation: true,
        consultation: "3 hours",
        profileBuilder: true,
      },
    },
  ];

  return (
    <div className="flex flex-col  lg:flex-row items-center justify-center gap-7 py-8 px-4 bg-gray-100 ">
      <div className="text-left lg:w-[15%] w-[70%] pr-4">
        <h2 className="text-2xl text-gray-400 font-bold mb-10">Package</h2>
        <ul className="space-y-8">
          <li>
            <span>Email Support</span>
            <hr className="border-gray-300 mt-2 w-full " />
          </li>
          <li>
            <span>Phone Support</span>
            <hr className="border-gray-300 mt-2" />
          </li>
          <li>
            <span>Documentation</span>
            <hr className="border-gray-300 mt-2" />
          </li>
          <li>
            <span>Consultation Hours</span>
            <hr className="border-gray-300 mt-2" />
          </li>
          <li>
            <span>Profile Builder</span>
            <hr className="border-gray-300 mt-2" />
          </li>
        </ul>
      </div>

      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative  flex flex-col items-center rounded-lg p-6 border ${
            plan.name === "Gold"
              ? "bg-black text-gray-400"
              : "bg-white text-gray-400"
          }  `}
          style={{ width: "280px", height: "550px" }} // Increased height and made it rectangular
        >
          <div
            className={`absolute top-2 right-[-20px] ${
              plan.name === "Gold"
                ? "bg-[#EDEDED] text-[#FF0000]"
                : "bg-[#EDEDED] text-[#FF0000]"
            } p-10 w-16 h-16 rounded-full flex items-center justify-center`}
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            <span className="font-bold">{plan.price}</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 mt-12 text-silver-500">
            {plan.name}
          </h3>
          <ul className="space-y-6 mb-6 w-full">
            <li className="flex flex-col items-center">
              {plan.features.emailSupport ? (
                <FaCheck
                  className={`text-${
                    plan.name === "Gold" ? "white" : "red-500"
                  }`}
                />
              ) : (
                <FaTimes className="text-red-500" />
              )}
              <hr className="w-full border-gray-300 mt-4" />
            </li>
            <li className="flex flex-col items-center">
              {plan.features.phoneSupport ? (
                <FaCheck
                  className={`text-${
                    plan.name === "Gold" ? "white" : "red-500"
                  }`}
                />
              ) : (
                <FaTimes className="text-red-500" />
              )}
              <hr className="w-full border-gray-300 mt-4" />
            </li>
            <li className="flex flex-col items-center">
              {plan.features.documentation ? (
                <FaCheck
                  className={`${
                    plan.name === "Gold"
                      ? "text-white"
                      : "text-black" /* Only the third tick/cross in white cards is black */
                  }`}
                />
              ) : (
                <FaTimes
                  className={`${
                    plan.name === "Gold" ? "text-white" : "text-black"
                  }`}
                />
              )}
              <hr className="w-full border-gray-300 mt-4" />
            </li>
            <li className="flex flex-col text-gary-400 items-center">
              <span>{plan.features.consultation}</span>
              <hr className="w-full border-gray-300 mt-4" />
            </li>
            <li className="flex flex-col items-center">
              {plan.features.profileBuilder ? (
                <FaCheck
                  className={`text-${
                    plan.name === "Gold" ? "white" : "red-500"
                  } `}
                />
              ) : (
                <FaTimes className="text-red-500" />
              )}
              <hr className="w-full border-gray-300 mt-4" />
            </li>
          </ul>
          <br />
          <button className="bg-[#FF0000] text-white py-4 px-4 rounded-full hover:bg-red-600 transition duration-300">
            Select
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
