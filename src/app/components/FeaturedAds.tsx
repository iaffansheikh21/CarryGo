// import React from "react";
// import Link from "next/link";
// import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";

// const FeaturedAds = () => {
//     const cardData = [
//         {
//             imageUrl: "http://themestarz.net/html/craigs/assets/img/image-01.jpg",
//             title: "Furniture for sale",
//             location: "Manhattan, NY",
//             price: "80",
//             date: "02.05.2017",
//             userName: "Jane Doe",
//             featured: true,
//             offerLabel: "OFFER",
//             categoryLabel: "HOME & DECOR",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis",
//             detailLink: "/",
//         },
//         {
//             imageUrl: "http://themestarz.net/html/craigs/assets/img/image-20.jpg",
//             offerLabel: "OFFER",
//             categoryLabel: "EDUCATION",
//             title: "Creative Course",
//             location: "Nashville, TN",
//             price: "125",
//             date: "28.04.2017",
//             userName: "Peter Browner",
//             featured: false,
//             description:
//                 "Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus,",
//             detailLink: "/",
//         },
//         {
//             imageUrl: "http://themestarz.net/html/craigs/assets/img/image-21.jpg",
//             offerLabel: "AD",
//             categoryLabel: "ADVENTURE",
//             title: "Into The Wild",
//             location: "Seattle, WA",
//             price: "1,560",
//             date: "21.04.2017",
//             userName: "Peak Agency",
//             featured: false,
//             description:
//                 "Nam eget ullamcorper massa. Morbi fringilla lectus nec lorem tristique gravida",
//             detailLink: "/",
//         },
//     ];

//     return (
//         <>
//             <div
//                 className="h-32 bg-[#F2F2F2]"
//                 style={{
//                     clipPath: 'ellipse(90% 100% at 50% 100%)'
//                 }}
//             ></div>
//             <div className="px-4 py-8 bg-[#F2F2F2]">
//                 <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-lg space-y-4 md:space-y-0">
//                     <h1 className="text-2xl font-bold text-gray-800 mb-6">Featured Ads</h1>
//                     <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-4">
//                         <select className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500">
//                             <option value="">Category</option>
//                             <option value="Home">Home & Decor</option>
//                             <option value="Education">Education</option>
//                             <option value="Adventure">Adventure</option>
//                             <option value="RealEstate">Real Estate</option>
//                             <option value="Architecture">Architecture</option>
//                             <option value="Jobs">Jobs</option>
//                             <option value="Mobiles">Mobiles</option>
//                             <option value="Cars">Cars</option>
//                             <option value="Cameras">Cameras</option>
//                             <option value="Sport">Sport</option>
//                         </select>
//                         <select className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500">
//                             <option value="">Default Sorting</option>
//                             <option value="PriceLowHigh">Price: Low to High</option>
//                             <option value="PriceHighLow">Price: High to Low</option>
//                             <option value="Newest">Newest Listings</option>
//                             <option value="Oldest">Oldest Listings</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {cardData.map((card, index) => (
//                         <div key={index} className="bg-[#F2F2F2] shadow-lg rounded-lg overflow-hidden">
//                             <div className="relative">
//                                 <img
//                                     src={card.imageUrl}
//                                     alt={card.title}
//                                     className="w-full h-48 object-cover"
//                                 />
//                                 <div className="absolute top-0 left-0 bg-black text-white text-xs font-bold px-2 py-1">
//                                     {card.offerLabel}
//                                 </div>
//                                 <div className="absolute bottom-0 left-0 p-4">
//                                     <span className="bg-black text-white text-xs px-2 py-1 rounded">
//                                         {card.categoryLabel}
//                                     </span>
//                                     <h2 className="text-white text-xl font-bold">{card.title}</h2>
//                                     <div className="text-gray-200 flex items-center mt-1">
//                                         <FaMapMarkerAlt className="mr-1" />
//                                         <span>{card.location}</span>
//                                     </div>
//                                     <div className="text-white text-lg font-bold mt-2">${card.price}</div>
//                                 </div>
//                             </div>
//                             <div className="p-4">
//                                 <div className="flex items-center text-gray-500 text-sm mb-2">
//                                     <SlCalender className="mr-1" />
//                                     {card.date}
//                                     <FaUserAlt className="ml-4 mr-1" />
//                                     {card.userName}
//                                 </div>
//                                 <p className="text-gray-700 text-sm">{card.description}</p>
//                                 <Link href={card.detailLink} legacyBehavior>
//                                     <a className="text-blue-500 hover:underline text-sm mt-2 block">
//                                         View Details
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FeaturedAds;

import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const FeaturedAds = () => {
  const cardData = [
    {
      imageUrl:
        "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Furniture for sale",
      location: "Manhattan, NY",
      price: "80",
      date: "02.05.2017",
      userName: "Jane Doe",
      featured: true,
      offerLabel: "OFFER",
      categoryLabel: "HOME & DECOR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "OFFER",
      categoryLabel: "EDUCATION",
      title: "Creative Course",
      location: "Nashville, TN",
      price: "125",
      date: "28.04.2017",
      userName: "Peter Browner",
      featured: false,
      description:
        "Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus,",
      detailLink: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      offerLabel: "AD",
      categoryLabel: "ADVENTURE",
      title: "Into The Wild",
      location: "Seattle, WA",
      price: "1,560",
      date: "21.04.2017",
      userName: "Peak Agency",
      featured: false,
      description:
        "Nam eget ullamcorper massa. Morbi fringilla lectus nec lorem tristique gravida",
      detailLink: "/",
    },
  ];

  return (
    <>
      <div className="px-4 py-1 bg-[#F2F2F2]">
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between p-1 rounded-lg space-y-4 md:space-y-0">
          <h1 className="text-3xl font-sans mb-8 pb-8 text-center md:text-left  md:mb-0">
            Featured Ads
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mb-9">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#F2F2F2] shadow-lg cursor-pointer rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-0 left-0 bg-black text-white text-xs font-bold px-2 py-1">
                  {card.offerLabel}
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="bg-black hover:bg-[#ff0000] hover:text-white text-white text-xs px-2 py-1 rounded">
                    {card.categoryLabel}
                  </span>
                  <h2 className="text-white text-xl font-bold">{card.title}</h2>
                  <div className="text-gray-200 flex hover:underline items-center mt-1">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{card.location}</span>
                  </div>
                  <div className="text-white text-lg font-bold mt-2">
                    ${card.price}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <SlCalender className="mr-1" />
                  {card.date}
                  <FaUserAlt className="ml-4 mr-1" />
                  {card.userName}
                </div>
                <p className="text-gray-500 mb-3 text-sm">{card.description}</p>
                <Link href={card.detailLink} legacyBehavior>
                  <a className="text-[#ff0000] mt-3 hover:underline text-sm  block">
                    Details
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedAds;
