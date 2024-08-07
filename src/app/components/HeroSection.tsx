
'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [showMoreOptions, setShowMoreOptions] = useState(false);

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <div className="relative z-20 flex items-center justify-center min-h-screen bg-custom-pattern">
                <div className="p-10 max-w-6xl w-full">
                    <h1 className="text-center text-3xl md:text-4xl font-light mb-6 mt-12 sm:mt-16 md:mt-0">
                        <span className="text-gray-700">
                            <Link
                                href="#"
                                className="inline-block hover:underline hover:text-red-600 hover:transition hover:duration-700"
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
                                <label className="block text-red-600 text-xl mb-2" htmlFor="what">
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
                                <label className="block text-red-600 text-xl mb-2" htmlFor="where">
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
                                <label className="block text-red-600 text-xl mb-2" htmlFor="category">
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
                            <button className="bg-red-600 text-white px-6 py-2 mb-1 hover:shadow-xl hover:transition hover:duration-500 ease-in-out text-sm rounded font-semibold w-full">
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

            {/* Bottom Elliptical Background */}
            {/* <div
                className="h-32 bg-[#F2F2F2]"
                style={{ clipPath: 'ellipse(70% 50% at 50% 30%)', zIndex: 20 }}
            ></div> */}
        </div>
    );
}
