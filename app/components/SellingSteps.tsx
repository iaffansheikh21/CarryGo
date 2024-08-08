// import React from "react";
// import { FaUser, FaUpload, FaThumbsUp, FaWallet } from "react-icons/fa";

// interface Step {
//   icon: React.ReactElement;
//   title: string;
//   description: string;
//   stepNumber: number;
// }

// const steps: Step[] = [
//   {
//     icon: <FaUser size={30} className="text-black" />,
//     title: "Create an Account",
//     description: "Etiam molestie viverra dui vitae mattis. Ut velit est",
//     stepNumber: 1,
//   },
//   {
//     icon: <FaUpload size={30} className="text-black" />,
//     title: "Submit Your Ad",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     stepNumber: 2,
//   },
//   {
//     icon: <FaThumbsUp size={30} className="text-black" />,
//     title: "Make a Deal",
//     description: "Nunc ultrices eu urna quis cursus. Sed viverra ullamcorper",
//     stepNumber: 3,
//   },
//   {
//     icon: <FaWallet size={30} className="text-black" />,
//     title: "Enjoy the Money!",
//     description: "Integer nisi ipsum, sodales sed scelerisque nec, aliquet sit",
//     stepNumber: 4,
//   },
// ];

// const SellingSteps: React.FC = () => {
//   return (
//     <div className="py-12 px-4 md:px-12 lg:px-24 bg-white">
//       <h2 className="text-2xl font-bold text-center mb-12">
//         Selling With Us Is Easy
//       </h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         {steps.map((step) => (
//           <div
//             key={step.stepNumber}
//             className="flex flex-col items-center text-center max-w-xs"
//           >
//             <div className="relative">
//               <div className="bg-red-600 rounded-full h-20 w-20 flex items-center justify-center mb-4">
//                 {step.icon}
//               </div>
//               <span className="absolute top-0 right-0 bg-white text-black rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg">
//                 {step.stepNumber}
//               </span>
//             </div>
//             <h3 className="text-lg font-bold mt-4">{step.title}</h3>
//             <p className="text-gray-600 mt-2">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SellingSteps;


import React from "react";
import { FaUser, FaUpload, FaThumbsUp, FaWallet } from "react-icons/fa";

interface Step {
  icon: React.ReactElement;
  title: string;
  description: string;
  stepNumber: number;
}

const steps: Step[] = [
  {
    icon: <FaUser size={30} className="text-black" />,
    title: "Create an Account",
    description: "Etiam molestie viverra dui vitae mattis. Ut velit est",
    stepNumber: 1,
  },
  {
    icon: <FaUpload size={30} className="text-black" />,
    title: "Submit Your Ad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stepNumber: 2,
  },
  {
    icon: <FaThumbsUp size={30} className="text-black" />,
    title: "Make a Deal",
    description: "Nunc ultrices eu urna quis cursus. Sed viverra ullamcorper",
    stepNumber: 3,
  },
  {
    icon: <FaWallet size={30} className="text-black" />,
    title: "Enjoy the Money!",
    description: "Integer nisi ipsum, sodales sed scelerisque nec, aliquet sit",
    stepNumber: 4,
  },
];

const SellingSteps: React.FC = () => {
  return (
    <div className="py-12 px-4 md:px-12 lg:px-24 bg-white">
      <h2 className="text-2xl font-bold text-center mb-12">
        Selling With Us Is Easy
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {steps.map((step) => (
          <div
            key={step.stepNumber}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <div className="relative">
              <div className="bg-red-600 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <span className="absolute top-0 right-0 bg-white text-black rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg">
                {step.stepNumber}
              </span>
            </div>
            <h3 className="text-lg font-bold mt-4">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingSteps;
