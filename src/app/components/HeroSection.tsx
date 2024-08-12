
// 'use client'
// import { useState } from 'react';
// import { useRouter,usePathname } from 'next/navigation';
// import Link from 'next/link';


// export default function Home() {
//     const [showMoreOptions, setShowMoreOptions] = useState(false);
//     const router = useRouter();
//     const pathname = usePathname();

//      // Determine the background image based on the route
//   const getBackgroundImage = () => {
//     if (pathname === '/home2') {
//       return "(/hero-background-image-01.jpg)";
//     } else if (pathname === '/home3') {
//       return "url(https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.02235668915!2d-0.381781[…]8be0!2sLondon!5e0!3m2!1sen!2suk!4v1688984652379!5m2!1sen!2suk)";
//     }
//     // Default background image
//     return "url(/hero-background-icons.jpg)";
//   };
//   const getTextColorClass = () => {
//     if (pathname === '/home2' || pathname === '/home3') {
//         return "text-white";
//     }
//     return "text-black";
// };


//     return (
//         <div className="min-h-screen  overflow-hidden "
//         style={{
//             backgroundImage: getBackgroundImage(),
//         }}
//         >
//             <div className="relative z-20 flex items-center justify-center min-h-screen bg-custom-pattern">
//                 <div className="p-10 max-w-6xl w-full">
//                 <h1 className={`text-center text-3xl md:text-4xl font-light mb-6 mt-12 sm:mt-16 md:mt-0`}>
//                         <span className={`${getTextColorClass()}`}>
//                             <Link
//                                 href="#"
//                                 className="inline-block hover:underline  hover:text-red-600 hover:transition hover:duration-700"
//                             >
//                                 Buy
//                             </Link>
//                             <span className="mx-1 sm:mx-2">,</span>
//                             <Link
//                                 href="#"
//                                 className="inline-block hover:underline hover:text-red-600 hover:transition hover:duration-700"
//                             >
//                                 Sell
//                             </Link>
//                             <span className="mx-1 sm:mx-2">or</span>
//                             <Link
//                                 href="#"
//                                 className="inline-block hover:underline hover:text-red-600 hover:transition hover:duration-700"
//                             >
//                                 Find
//                             </Link>
//                             <span className="mx-1 sm:mx-2">What You Need</span>
//                         </span>
//                     </h1>
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//                         <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
//                             <div>
//                                 <label className={`block text-red-600 text-xl mb-2 ${getTextColorClass()}`} htmlFor="what">
//                                     What?
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="what"
//                                     placeholder="What are you looking for?"
//                                     className="w-full border border-gray-300 p-2 rounded text-md"
//                                 />
//                             </div>
//                             <div>
//                                 <label className={`block text-red-600 text-xl mb-2 ${getTextColorClass()}`}  htmlFor="where">
//                                     Where?
//                                 </label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         id="where"
//                                         placeholder="Enter Location"
//                                         className="w-full border border-gray-300 text-md p-2 rounded pl-10"
//                                     />
//                                     <div className="absolute top-0 left-0 flex items-center justify-center h-full w-10 text-red-600">
//                                         📍
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className={`block text-red-600 text-xl mb-2 ${getTextColorClass()}`}  htmlFor="category">
//                                     Category?
//                                 </label>
//                                 <select
//                                     id="category"
//                                     className="w-full border text-lg border-gray-300 p-2 rounded"
//                                 >
//                                     <option>Select Category</option>
//                                     <option>Electronics</option>
//                                     <option>Furniture</option>
//                                     <option>Vehicles</option>
//                                     <option>Real Estate</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="flex items-end md:col-span-1">
//                             <button className="bg-red-600 text-white px-6 py-2 mb-1 hover:shadow-xl hover:transition hover:duration-500 ease-in-out text-md rounded font-semibold w-full">
//                                 Search
//                             </button>
//                         </div>
//                     </div>

//                     <div className="flex items-center justify-start mb-4">
//                         <button
//                             className="text-red-600 font-semibold flex items-center justify-center"
//                             onClick={() => setShowMoreOptions(!showMoreOptions)}
//                         >
//                             <span className="text-xl mr-2">+</span> More Options
//                         </button>
//                     </div>

//                     {showMoreOptions && (
//                         <div className="mt-4 p-6 border-t border-gray-300 rounded-md bg-white max-w-full overflow-x-auto">
//                             <div className="flex flex-col md:flex-row gap-4 items-start md:gap-6">
//                                 {/* Checkbox Options */}
//                                 <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
//                                     <input type="checkbox" id="new" className="mr-2 h-4 w-4" />
//                                     <label htmlFor="new" className="text-sm">New</label>
//                                 </div>
//                                 <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
//                                     <input type="checkbox" id="used" className="mr-2 h-4 w-4" />
//                                     <label htmlFor="used" className="text-sm">Used</label>
//                                 </div>
//                                 <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
//                                     <input type="checkbox" id="with-photo" className="mr-2 h-4 w-4" />
//                                     <label htmlFor="with-photo" className="text-sm">With Photo</label>
//                                 </div>
//                                 <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
//                                     <input type="checkbox" id="featured" className="mr-2 h-4 w-4" />
//                                     <label htmlFor="featured" className="text-sm">Featured</label>
//                                 </div>

//                                 {/* Price Inputs */}
//                                 <div className="relative flex-1 max-w-xs md:max-w-[calc(25%-1rem)]">
//                                     <input
//                                         type="text"
//                                         placeholder="Minimal Price"
//                                         className="w-full border border-gray-300 p-2 rounded pl-4 pr-10 text-xs"
//                                     />
//                                     <div className="absolute top-0 right-0 flex items-center justify-center h-full w-6 text-gray-600">
//                                         $
//                                     </div>
//                                 </div>
//                                 <div className="relative flex-1 max-w-xs md:max-w-[calc(25%-1rem)]">
//                                     <input
//                                         type="text"
//                                         placeholder="Maximal Price"
//                                         className="w-full border border-gray-300 p-2 rounded pl-4 pr-10 text-xs"
//                                     />
//                                     <div className="absolute top-0 right-0 flex items-center justify-center h-full w-6 text-gray-600">
//                                         $
//                                     </div>
//                                 </div>

//                                 {/* Distance Select */}
//                                 <div className="flex-1 max-w-xs md:max-w-[calc(25%-1rem)]">
//                                     <select className="w-full border border-gray-300 p-2 rounded text-sm">
//                                         <option>Distance</option>
//                                         <option>5 km</option>
//                                         <option>10 km</option>
//                                         <option>20 km</option>
//                                         <option>50 km</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                     )}


//                 </div>
//             </div>
//         </div>
//     );
// }


'use client'
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';


export default function Home() {
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Determine the background image based on the route

    const getBackgroundImage = () => {
        if (pathname === '/home2') {
            return "url(/hero-background-image-01.jpg)";
        } else if (pathname === '/home3') {
            return ""; // No background image for home3, iframe will be used
        }
        // Default background image
        return "url(/hero-background-icons.jpg)";
    };
    const getTextColorClass = () => {
        if (pathname === '/home2') {
            return "text-white";
        }
        return "text-black";
    };


    return (
        <div
            style={{
                backgroundImage: getBackgroundImage(),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                height: pathname === '/home3' ? 'auto' : '500px', // Adjust height based on the route
                width: '100%',
                overflow: 'hidden',
            }}
        >
            {pathname === '/home3' ? (
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.02235668915!2d-0.3817811335630587!3d51.52830805699648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb38a9c5677%3A0x30385f1a9208be0!2sLondon!5e0!3m2!1sen!2suk!4v1688984652379!5m2!1sen!2suk"
                        width="100%" // Make iframe width 100%
                        height="550" // Adjusted height
                        style={{ border: 0 }}
                        className='mt-20 mx-6'
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                    <div className="p-10 max-w-6xl w-full mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className={`block text-red-600 text-xl mb-2 ${getTextColorClass()}`} htmlFor="what">
                                        What?
                                    </label>
                                    <input
                                        type="text"
                                        id="what"
                                        placeholder="What are you looking for?"
                                        className="w-full border border-gray-300 p-2 rounded text-md"
                                    />
                                </div>
                                <div>
                                    <label className={`block text-red-600 text-xl mb-2 ${getTextColorClass()}`} htmlFor="where">
                                        Where?
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="where"
                                            placeholder="Enter Location"
                                            className="w-full border border-gray-300 text-md p-2 rounded pl-10"
                                        />
                                        <div className="absolute top-0 left-0 flex items-center justify-center h-full w-10 text-red-600">
                                            📍
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className={`block text-red-600 text-xl mb-2 ${getTextColorClass()}`} htmlFor="category">
                                        Category?
                                    </label>
                                    <select
                                        id="category"
                                        className="w-full border text-lg border-gray-300 p-2 rounded"
                                    >
                                        <option>Select Category</option>
                                        <option>Electronics</option>
                                        <option>Furniture</option>
                                        <option>Vehicles</option>
                                        <option>Real Estate</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-end md:col-span-1">
                                <button className="bg-red-600 text-white px-6 py-2 mb-1 hover:shadow-xl hover:transition hover:duration-500 ease-in-out text-md rounded font-semibold w-full">
                                    Search
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-start mb-4">
                            <button
                                className="text-red-600 font-semibold flex items-center justify-center"
                                onClick={() => setShowMoreOptions(!showMoreOptions)}
                            >
                                <span className="text-xl mr-2">+</span> More Options
                            </button>
                        </div>

                        {showMoreOptions && (
                            <div className="mt-4 p-6 border-t border-gray-300 rounded-md bg-white max-w-full overflow-x-auto">
                                <div className="flex flex-col md:flex-row gap-4 items-start md:gap-6">
                                    {/* Checkbox Options */}
                                    <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
                                        <input type="checkbox" id="new" className="mr-2 h-4 w-4" />
                                        <label htmlFor="new" className="text-sm">New</label>
                                    </div>
                                    <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
                                        <input type="checkbox" id="used" className="mr-2 h-4 w-4" />
                                        <label htmlFor="used" className="text-sm">Used</label>
                                    </div>
                                    <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
                                        <input type="checkbox" id="with-photo" className="mr-2 h-4 w-4" />
                                        <label htmlFor="with-photo" className="text-sm">With Photo</label>
                                    </div>
                                    <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
                                        <input type="checkbox" id="featured" className="mr-2 h-4 w-4" />
                                        <label htmlFor="featured" className="text-sm">Featured</label>
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
                        )}
                    </div>
                </div>
            )
                : (

                    <div className="relative z-20 flex items-center justify-center min-h-screen bg-custom-pattern">
                        <div className="p-10 max-w-6xl w-full">
                            <h1 className={`text-center text-3xl md:text-4xl font-light mb-6 mt-12 sm:mt-16 md:mt-0`}>
                                <span className={`${getTextColorClass()}`}>
                                    <Link
                                        href="#"
                                        className="inline-block hover:underline  hover:text-red-600 hover:transition hover:duration-700"
                                    >
                                        Buy
                                    </Link>
                                    <span className="mx-1 sm:mx-2">,</span>
                                    <Link
                                        href="#"
                                        className="inline-block hover:underline hover:text-red-600 hover:transition hover:duration-700"
                                    >
                                        Sell
                                    </Link>
                                    <span className="mx-1 sm:mx-2">or</span>
                                    <Link
                                        href="#"
                                        className="inline-block hover:underline hover:text-red-600 hover:transition hover:duration-700"
                                    >
                                        Find
                                    </Link>
                                    <span className="mx-1 sm:mx-2">What You Need</span>
                                </span>
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className={`block text-red-600 text-xl mb-2 ${getTextColorClass()}`} htmlFor="what">
                                            What?
                                        </label>
                                        <input
                                            type="text"
                                            id="what"
                                            placeholder="What are you looking for?"
                                            className="w-full border border-gray-300 p-2 rounded text-md"
                                        />
                                    </div>
                                    <div>
                                        <label className={`block text-red-600 text-xl mb-2 ${getTextColorClass()}`} htmlFor="where">
                                            Where?
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="where"
                                                placeholder="Enter Location"
                                                className="w-full border border-gray-300 text-md p-2 rounded"
                                            />
                                            <div className="absolute top-0 right-0 flex items-center justify-center h-full w-10 text-black">
                                                <FaMapMarkerAlt/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className={`block text-red-600 text-xl mb-2 ${getTextColorClass()}`} htmlFor="category">
                                            Category?
                                        </label>
                                        <select
                                            id="category"
                                            className="w-full border text-lg border-gray-300 p-2 rounded"
                                        >
                                            <option>Select Category</option>
                                            <option>Electronics</option>
                                            <option>Furniture</option>
                                            <option>Vehicles</option>
                                            <option>Real Estate</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex items-end md:col-span-1">
                                    <button className="bg-red-600 text-white px-6 py-2 mb-1 hover:shadow-xl hover:transition hover:duration-500 ease-in-out text-md rounded font-semibold w-full">
                                        Search
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-start mb-4">
                                <button
                                    className="text-red-500 hover:text-red-700 font-semibold flex items-center justify-center "
                                    onClick={() => setShowMoreOptions(!showMoreOptions)}
                                >
                                    <span className="text-xl mr-2 text-red-600 mb-1">+</span> More Options
                                </button>
                            </div>

                            {showMoreOptions && (
                                <div className="mt-4 p-6 border-t border-gray-300 rounded-md bg-white max-w-full overflow-x-auto">
                                    <div className="flex flex-col md:flex-row gap-4 items-start md:gap-6">
                                        {/* Checkbox Options */}
                                        <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
                                            <input type="checkbox" id="new" className="mr-2 h-4 w-4" />
                                            <label htmlFor="new" className="text-sm">New</label>
                                        </div>
                                        <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
                                            <input type="checkbox" id="used" className="mr-2 h-4 w-4" />
                                            <label htmlFor="used" className="text-sm">Used</label>
                                        </div>
                                        <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
                                            <input type="checkbox" id="with-photo" className="mr-2 h-4 w-4" />
                                            <label htmlFor="with-photo" className="text-sm">With Photo</label>
                                        </div>
                                        <div className="flex items-center text-gray-800 flex-1 md:max-w-[calc(25%-1rem)]">
                                            <input type="checkbox" id="featured" className="mr-2 h-4 w-4" />
                                            <label htmlFor="featured" className="text-sm">Featured</label>
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
                            )}


                        </div>
                    </div>
                )}
        </div>
    );
}
