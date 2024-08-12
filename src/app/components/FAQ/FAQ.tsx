// // components/SearchInAnswers.tsx
// import React from 'react';
// import SideSection from './SideSectionFAQ';

// const SearchInAnswers = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="max-w-2xl mx-auto">
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Enter your search"
//             className="w-full p-3 border border-gray-300 rounded-lg"
//           />
//         </div>

//         <div className="space-y-4">
//           <div className="bg-white p-4 shadow-lg rounded-lg relative">
//             <div className="absolute top-2 left-2">
//               <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
//                 ?
//               </div>
//             </div>
//             <h3 className="font-bold text-lg mb-2">
//               Sed tincidunt vel orci sed fermentum. Nullam nec turpis blandit?
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim,
//               scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet
//               purus in iaculis sodales. Morbi convallis diam ac accumsan placerat. Donec
//               ultrices placerat arcu non accumsan
//             </p>
//             <div className="flex justify-end space-x-4 text-sm text-gray-500">
//               <span>Was this answer helpful?</span>
//               <span className="cursor-pointer hover:text-gray-700">Yes</span>
//               <span className="cursor-pointer hover:text-gray-700">No</span>
//             </div>
//           </div>

//           <div className="bg-white p-4 shadow-lg rounded-lg relative">
//             <div className="absolute top-2 left-2">
//               <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
//                 ?
//               </div>
//             </div>
//             <h3 className="font-bold text-lg mb-2">
//               Integer a arcu non libero euismod euismod. Donec non porta leo.
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Curabitur consectetur ligula in cursus sagittis. Praesent purus velit,
//               sagittis vel malesuada nec, ultricies vitae quam. Maecenas aliquet
//               convallis placerat. Aliquam erat volutpat. Nulla euismod leo eu nulla
//               scelerisque molestie. Sed vehicula metus est eget molestie elit iaculis
//               quis. Nulla elementum sem ex, eu lobortis urna convallis nec. Suspendisse
//               nunc mauris, blandit sed risus eget, pretium ultricies neque. Vivamus
//               ultricies odio sed vehicula hendrerit. Nunc ultrices scelerisque ligula
//               sit amet aliquam.
//             </p>
//             <div className="flex justify-end space-x-4 text-sm text-gray-500">
//               <span>Was this answer helpful?</span>
//               <span className="cursor-pointer hover:text-gray-700">Yes</span>
//               <span className="cursor-pointer hover:text-gray-700">No</span>
//             </div>
//           </div>
//         </div>
//         <SideSection/>
//       </div>
//     </div>
//   );
// };

// export default SearchInAnswers;


import React from 'react';
import SideSection from './SideSectionFAQ';
import Link from 'next/link';

const SearchInAnswers = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
                {/* Main Content */}
                <div className="w-full md:w-2/3 md:mr-6">
                    <div className="mb-6">
                        <h1 className='mt-8 mb-2 font-normal text-xl'>Search in Answers</h1>
                        <input
                            type="text"
                            placeholder="Enter your search"
                            className="w-full mt-4 mb-10 p-3 shadow-lg border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-4 shadow-lg  relative">
                            <div className="absolute top-0  left-4 ">
                                <div className="bg-red-500 text-white w-6 h-6   rounded-full flex items-center justify-center">
                                    ?
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2 mt-4">
                                Sed tincidunt vel orci sed fermentum. Nullam nec turpis blandit?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim,
                                scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet
                                purus in iaculis sodales. Morbi convallis diam ac accumsan placerat.
                                Donec ultrices placerat arcu non accumsan
                            </p>
                        </div>
                        <div className="flex justify-end space-x-4 text-sm text-gray-500">
                            <span>Was this answer helpful?</span>
                            <span className="cursor-pointer hover:text-red-500">Yes</span>
                            <span className="cursor-pointer hover:text-red-500">No</span>
                        </div>

                        <div className="bg-white p-4 shadow-lg  relative">
                            <div className="absolute top-0  left-4 ">
                                <div className="bg-red-500 text-white w-6 h-6   rounded-full flex items-center justify-center">
                                    ?
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2 mt-4">
                                Sed tincidunt vel orci sed fermentum. Nullam nec turpis blandit?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim,
                                scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet
                                purus in iaculis sodales. Morbi convallis diam ac accumsan placerat.
                                Donec ultrices placerat arcu non accumsan
                            </p>
                        </div>
                        <div className="flex justify-end space-x-4 text-sm text-gray-500">
                            <span>Was this answer helpful?</span>
                            <span className="cursor-pointer hover:text-red-500">Yes</span>
                            <span className="cursor-pointer hover:text-red-500">No</span>
                        </div>
                        <div className="bg-white p-4 shadow-lg  relative">
                            <div className="absolute top-0  left-4 ">
                                <div className="bg-red-500 text-white w-6 h-6   rounded-full flex items-center justify-center">
                                    ?
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2 mt-4">
                                Sed tincidunt vel orci sed fermentum. Nullam nec turpis blandit?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim,
                                scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet
                                purus in iaculis sodales. Morbi convallis diam ac accumsan placerat.
                                Donec ultrices placerat arcu non accumsan
                            </p>
                        </div>
                        <div className="flex justify-end space-x-4 text-sm text-gray-500">
                            <span>Was this answer helpful?</span>
                            <span className="cursor-pointer hover:text-red-500">Yes</span>
                            <span className="cursor-pointer hover:text-red-500">No</span>
                        </div>
                        <div className="bg-white p-4 shadow-lg  relative">
                            <div className="absolute top-0  left-4 ">
                                <div className="bg-red-500 text-white w-6 h-6   rounded-full flex items-center justify-center">
                                    ?
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2 mt-4">
                                Sed tincidunt vel orci sed fermentum. Nullam nec turpis blandit?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim,
                                scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet
                                purus in iaculis sodales. Morbi convallis diam ac accumsan placerat.
                                Donec ultrices placerat arcu non accumsan
                            </p>
                        </div>
                        <div className="flex justify-end space-x-4 text-sm text-gray-500">
                            <span>Was this answer helpful?</span>
                            <span className="cursor-pointer hover:text-red-500">Yes</span>
                            <span className="cursor-pointer hover:text-red-500">No</span>
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg relative">
                            <div className="absolute top-0  left-4 ">
                                <div className="bg-red-500 text-white w-6 h-6   rounded-full flex items-center justify-center">
                                    ?
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2 mt-4">
                                Sed tincidunt vel orci sed fermentum. Nullam nec turpis blandit?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim,
                                scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet
                                purus in iaculis sodales. Morbi convallis diam ac accumsan placerat.
                                Donec ultrices placerat arcu non accumsan
                            </p>
                        </div>
                        <div className="flex justify-end space-x-4 text-sm text-gray-500">
                            <span>Was this answer helpful?</span>
                            <span className="cursor-pointer hover:text-red-500">Yes</span>
                            <span className="cursor-pointer hover:text-red-500">No</span>
                        </div>
                        <div className="bg-white p-4 shadow-lg  relative">
                            <div className="absolute top-0  left-4 ">
                                <div className="bg-red-500 text-white w-6 h-6   rounded-full flex items-center justify-center">
                                    ?
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2 mt-4">
                                Sed tincidunt vel orci sed fermentum. Nullam nec turpis blandit?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Sed vel erat mi. Donec hendrerit consectetur ipsum, ut lacinia sem egestas sed. Praesent ac augue dolor. Proin euismod nulla vel ipsum cursus, nec sagittis risus volutpat. Phasellus eu quam metus. Ut luctus ut nulla vel blandit. Quisque accumsan mauris non rutrum fermentum. Phasellus non ornare ligula. Duis maximus vitae est ullamcorper condimentum. Sed consequat pulvinar turpis, sed condimentum nibh pretium in.
                            </p>
                        </div>
                        <div className="flex justify-end space-x-4 text-sm text-gray-500">
                            <span>Was this answer helpful?</span>
                            <span className="cursor-pointer hover:text-red-500">Yes</span>
                            <span className="cursor-pointer hover:text-red-500">No</span>
                        </div>
                    </div>

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

                {/* Side Section */}
                <div className="w-full md:w-1/4 ml-4 mt-4 lg:mt-0">
                    <SideSection />
                </div>
            </div>
        </div>
    );
};

export default SearchInAnswers;
