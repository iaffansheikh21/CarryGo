import Image from 'next/image';
import Link from 'next/link';
import { SlCalender } from "react-icons/sl";
import { FaUser } from 'react-icons/fa';

const Blog = () => {
    return (
        <>
            <div className="w-full bg-[#F2F2F2] flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-lg space-y-4 md:space-y-0">
                <h1 className="text-3xl ml-5 font-sans text-center md:text-left mb-4 md:mb-0 mt-4">
                    Blog
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center min-h-screen bg-[#F2F2F2] p-4 lg:p-8">

                {/* Main Content */}
                <div className="max-w-4xl w-full">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/blog-image-01.jpg" // Replace with the path to your image
                                alt="House"
                                className="w-full h-auto"
                                width={800}
                                height={400}
                            />
                            <div className="p-4">
                                <h1 className="text-2xl font-normal mb-2">10 tips for renovation</h1>
                                <div className="flex space-x-2 mb-2">
                                    <Link href={"#"}>
                                        <span className="bg-white hover:text-red-500 border text-gray-700 text-sm px-2 py-1 rounded">Blog & Decor</span>
                                    </Link>
                                    <Link href={"#"}>
                                        <span className="bg-white hover:text-red-500 border text-gray-700 text-sm px-2 py-1 rounded">Design</span>

                                    </Link>
                                </div>
                                <div className="flex items-center text-gray-600 text-xs font-bold mb-4 mt-4">
                                    <Link href={"#"}>
                                    <span className="flex items-center mr-2 hover:text-red-500">
                                        <FaUser className="mr-1" /> John Doe
                                    </span>
                                    </Link>
                                    <span className="flex items-center">
                                        <SlCalender className="mr-1" /> 02.05.2017
                                    </span>
                                </div>

                                <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus, risus mi euismod elit
                                </p>
                                <button className="mt-4 px-4 py-2 bg-white text-red-500 border border-red-500 rounded hover:bg-red-600 hover:text-white transition duration-700">
                                    Read more
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="bg-white shadow-md mt-8 rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/blog-image-06.jpg" // Replace with the path to your image
                                alt="House"
                                className="w-full h-auto"
                                width={800}
                                height={400}
                            />
                            <div className="p-4">
                                <h1 className="text-2xl font-normal mb-2">8 Things to Remember Every Morning</h1>
                                <div className="flex space-x-2 mb-2">
                                    <Link href={"#"}>
                                        <span className="bg-white hover:text-red-500 border text-gray-700 text-sm px-2 py-1 rounded">Blog & Decor</span>
                                    </Link>
                                    <Link href={"#"}>
                                        <span className="bg-white hover:text-red-500 border text-gray-700 text-sm px-2 py-1 rounded">Design</span>

                                    </Link>
                                </div>
                                <div className="flex items-center text-gray-600 text-xs font-bold mb-4 mt-4">
                                    <Link href={"#"}>
                                    <span className="flex items-center mr-2 hover:text-red-500">
                                        <FaUser className="mr-1" /> John Doe
                                    </span>
                                    </Link>
                                    <span className="flex items-center">
                                        <SlCalender className="mr-1" /> 02.05.2017
                                    </span>
                                </div>
                                <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus, risus mi euismod elit
                                </p>
                                <button className="mt-4 px-4 py-2 bg-white text-red-500 border border-red-500 rounded hover:bg-red-600 hover:text-white transition duration-700">
                                    Read more
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="bg-white shadow-md mt-8 rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/blog-image-02.jpg" // Replace with the path to your image
                                alt="House"
                                className="w-full h-auto"
                                width={800}
                                height={400}
                            />
                            <div className="p-4">
                                <h1 className="text-2xl font-normal mb-2">Professional kitchen at your home</h1>
                                <div className="flex space-x-2 mb-2">
                                    <Link href={"#"}>
                                        <span className="bg-white hover:text-red-500 border text-gray-700 text-sm px-2 py-1 rounded">Blog & Decor</span>
                                    </Link>
                                    <Link href={"#"}>
                                        <span className="bg-white hover:text-red-500 border text-gray-700 text-sm px-2 py-1 rounded">Design</span>

                                    </Link>
                                </div>
                                <div className="flex items-center text-gray-600 text-xs font-bold mb-4 mt-4">
                                    <Link href={"#"}>
                                    <span className="flex items-center mr-2 hover:text-red-500">
                                        <FaUser className="mr-1" /> John Doe
                                    </span>
                                    </Link>
                                    <span className="flex items-center">
                                        <SlCalender className="mr-1" /> 02.05.2017
                                    </span>
                                </div>
                                <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus, risus mi euismod elit.
                                </p>
                                <button className="mt-4 px-4 py-2 bg-white text-red-500 border border-red-500 rounded hover:bg-red-600 hover:text-white transition duration-700">
                                    Read more
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Pagination Buttons */}

                    <div className="flex justify-center mt-8">
                        <button className="px-3 py-2 bg-[#F2F2F2] rounded-l hover:bg-white">
                            &lt;
                        </button>
                        <Link href={"#"}>
                            <button className={`mx-2 px-5 py-2 rounded-md bg-red-500 text-white hover:bg-white hover:text-black bg-opacity-80 hover:transition hover:duration-600`}>
                                1
                            </button>
                        </Link>
                        <Link href={"#"}>
                            <button className={`mx-2 px-5 py-2 rounded-md bg-red-500 text-white hover:bg-white hover:text-black bg-opacity-80 hover:transition hover:duration-600`}>
                                2
                            </button>
                        </Link>
                        <Link href={"#"}>
                            <button className={`mx-2 px-5 py-2 rounded-md bg-red-500 text-white hover:bg-white hover:text-black bg-opacity-80 hover:transition hover:duration-600`}>
                                3
                            </button>
                        </Link>
                        <button className="px-3 py-2 bg-[#F2F2F2] rounded-r hover:bg-white">
                            &gt;
                        </button>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="max-w-xs w-full h-full lg:ml-8 mt-8 lg:mt-0 bg-[#F2F2F2] shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-normal mb-4 mt-2">Search Blog</h2>
                    <h6 className="text-sm font-normal mb-1">What?</h6>
                    <input
                        type="text"
                        placeholder="Enter keyword and press enter"
                        className="w-full p-2 border border-gray-300 rounded mb-8"
                    />
                    <h2 className="text-xl font-normal mb-4">Popular Posts</h2>
                    <div className="space-y-4">
                        {["How to build a cool swimming pool", "Concrete decorations can be beautiful", "Let's take a break"].map((post) => (
                            <div key={post} className="flex items-center space-x-4">
                                <div className="w-20 h-16 bg-gray-200 rounded-lg"></div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">{post}</h3>
                                    <p className="text-xs text-gray-600">John Doe</p>
                                    <p className="text-xs text-gray-600">02.05.2017</p>
                                </div>
                            </div>
                        ))}
                        <h2 className="text-xl font-normal mt-2 ">Popular Posts</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li><a href="#" className="hover:text-red-500">January 2017</a></li>
                            <li><a href="#" className="hover:text-red-500">February 2017</a></li>
                            <li><a href="#" className="hover:text-red-500">October 2016</a></li>
                            <li><a href="#" className="hover:text-red-500">August 2016</a></li>
                            <li><a href="#" className="hover:text-red-500">May 2016</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
