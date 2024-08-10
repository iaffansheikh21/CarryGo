// import React from "react";
// import Image from "next/image";
// import SideSection from "../grid-with-sidebar/SideSection";
// import {
//   FaMapMarkerAlt,
//   FaTwitter,
//   FaInstagram,
//   FaFacebook,
//   FaStar,
// } from "react-icons/fa";
// import Link from "next/link";
// const SellerDetails = () => {
//   return (
//     <div className="flex flex-row md:flex-row justify-center w-full lg:w-[90%] md:w-[98%] mx-auto mt-16 ">
//       {/* Left Section - Profile Image */}
//       <div className="flex-shrink-0 mx-auto md:mx-0 md:ml-14">
//         <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden mt-10 ">
//           <Image
//             src="/image-08.jpg"
//             alt="Judy Ivey"
//             width={500}
//             height={500}
//             className="object-cover w-full h-full"
//           />
//         </div>
//         {/* <hr className="border border-gray-300 w-full mt-3 md:mt-20" /> */}
//       </div>
//       {/* Right Section - Profile Info and Contact Details */}
//       <div className="flex flex-col flex-grow md:ml-6 text-center lg:text-left xl:text-left ">
//         <h2 className="text-xl md:text-2xl font-semibold">Judy Ivey</h2>
//         <p className="text-gray-600 flex flex-wrap text-center lg:text-left">
//           <FaMapMarkerAlt className="mr-1 mt-1" />
//           Manhattan, NY
//         </p>
//         <div className="flex items-center justify-between mt-2 text-center lg:text-left">
//           {/* Stars */}
//           <div className="flex space-x-1 text-red-600">
//             <span>
//               <FaStar />
//             </span>
//             <span>
//               <FaStar />
//             </span>
//             <span>
//               <FaStar />
//             </span>
//             <span>
//               <FaStar />
//             </span>
//             <span>
//               <FaStar />
//             </span>
//           </div>
//           {/* Social Icons */}
//           <div className="flex space-x-5 text-black transition-colors duration-300 lg:mr-12 ">
//             <Link href="">
//               <FaFacebook className="cursor-pointer hover:text-red-600 text-xl" />
//             </Link>
//             <Link href="">
//               <FaTwitter className="cursor-pointer hover:text-red-600 text-xl" />
//             </Link>
//             <Link href="">
//               <FaInstagram className="cursor-pointer hover:text-red-600 text-xl" />
//             </Link>
//           </div>
//         </div>
//         {/* Contact Info */}
//         <div className="bg-white w-full md:w-[95%] p-4 mt-4 rounded-lg flex flex-col md:flex-row items-center">
//           <div className="flex flex-col text-center md:text-left">
//             <p className="text-gray-700">PHONE</p>
//             <p className="font-semibold">+1 516-480-4273</p>
//           </div>
//           <div className="flex flex-col mt-4 md:mt-0 md:ml-8 text-center md:text-left">
//             <p className="text-gray-700">EMAIL</p>
//             <p className="font-semibold">hello@example.com</p>
//           </div>
//           <div className="flex flex-col mt-4 md:mt-0 md:ml-8 text-center md:text-left">
//             <p className="text-gray-700">Fax</p>
//             <p className="font-semibold">+1 123-84-6575</p>
//           </div>
//         </div>
//         {/* Additional Text */}
//         <p className="text-gray-600 mt-6 md:mt-10 w-full md:w-[95%]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
//           tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu
//           ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem
//           ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita
//           fugit accusantium unde, impedit a illum est sint deserunt voluptates
//           error quis ad sit, earum sed molestias quaerat.
//         </p>
//         <hr className="border border-gray-300 w-full md:w-[95%] mt-6 md:mt-20" />
//       </div>
//       {/* Right Section - Search Ads */}
//       {/* <div className="  w-full lg:w-[60%] md:w-[50%] lg:mr-20">
//         <h1 className="text-black mb-3 text-xl md:text-2xl">Search Ads</h1>
//         <SideSection />
//       </div> */}
//     </div>
//   );
// };
// export default SellerDetails;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaTwitter, FaInstagram, FaFacebook, FaStar } from "react-icons/fa";

const SellerDetails = () => {
    return (
        <div className="flex flex-col md:flex-row items-center lg:items-start lg:w-[90%] md:w-[98%] mx-auto mt-16 space-y-4 md:space-y-0 md:space-x-8">
            {/* Left Section - Profile Image */}
            <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden">
                    <Image
                        src="/image-08.jpg"
                        alt="Judy Ivey"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Right Section - Profile Info and Contact Details */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-xl md:text-2xl font-semibold">Judy Ivey</h2>
                <p className="text-gray-600 flex items-center justify-center lg:justify-start">
                    <FaMapMarkerAlt className="mr-1" /> Manhattan, NY
                </p>
                <div className="flex space-x-1 text-red-600 mt-2">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>
                <div className="flex space-x-5 text-black mt-4">
                    <Link href="#">
                        <FaFacebook className="cursor-pointer hover:text-red-600 text-xl" />
                    </Link>
                    <Link href="#">
                        <FaTwitter className="cursor-pointer hover:text-red-600 text-xl" />
                    </Link>
                    <Link href="#">
                        <FaInstagram className="cursor-pointer hover:text-red-600 text-xl" />
                    </Link>
                </div>
                <div className="bg-white w-full p-4 mt-4 rounded-lg flex flex-col md:flex-row items-center lg:items-start">
                    <div className="flex flex-col text-center sm:text-left">
                        <p className="text-gray-700">PHONE</p>
                        <p className="font-normal">+1 516-480-4273</p>
                    </div>
                    <div className="flex flex-col mt-4 md:mt-0 md:ml-8 text-center sm:text-left">
                        <p className="text-gray-700">EMAIL</p>
                        <p className="font-normal">hello@example.com</p>
                    </div>
                    <div className="flex flex-col mt-4 md:mt-0 md:ml-8 text-center sm:text-left">
                        <p className="text-gray-700">Fax</p>
                        <p className="font-normal">+1 123-84-6575</p>
                    </div>
                </div>
                <p className="text-gray-600 mt-6 lg:mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem.
                </p>
            </div>
        </div>
    );
};

export default SellerDetails;
