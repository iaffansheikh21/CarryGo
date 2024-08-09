'use client';
import React from 'react';
import {
  FaChair,
  FaCar,
  FaBolt,
  FaTshirt,
  FaPaw,
  FaMobileAlt,
  FaHome,
  FaCamera,
  FaBook,
  FaBicycle,
  FaMusic,
  FaBriefcase,
} from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Category {
  icon: React.ReactElement;
  title: string;
  description: string;
  link: string;
}

const categories: Category[] = [
  { icon: <FaChair size={30} />, title: 'Furniture', description: 'Beds, Sofas, Garden...', link: '/' },
  { icon: <FaCar size={30} />, title: 'Car', description: 'New, Used, Rent...', link: '/' },
  { icon: <FaBolt size={30} />, title: 'Electro', description: 'TV, Radio, PC...', link: '/' },
  { icon: <FaTshirt size={30} />, title: 'Clothing', description: 'Shirts, Trousers...', link: '/' },
  { icon: <FaPaw size={30} />, title: 'Pets', description: 'Dogs, Cats, Exotic...', link: '/' },
  { icon: <FaMobileAlt size={30} />, title: 'Mobile', description: 'Apple, Samsung...', link: '/' },
  { icon: <FaHome size={30} />, title: 'Real Estate', description: 'Houses, Apartments...', link: '/' },
  { icon: <FaCamera size={30} />, title: 'Cameras', description: 'Photo, Video, Lenses...', link: '/' },
  { icon: <FaBook size={30} />, title: 'Books', description: 'Fantasy, History, Sci-Fi...', link: '/' },
  { icon: <FaBicycle size={30} />, title: 'Sport', description: 'Ski, Bike, Hockey...', link: '/' },
  { icon: <FaMusic size={30} />, title: 'Music', description: 'Rock, Techno, Folk...', link: '/' },
  { icon: <FaBriefcase size={30} />, title: 'Jobs', description: 'Find Job, Offer Job...', link: '/' },
];

const Categories: React.FC = () => {
  const pathname = usePathname();

  const getIconBgColorClass = () => (pathname === '/home4' ? 'bg-red-600' : 'bg-red-600');
  const getTextColorClass = () => (pathname === '/home4' ? 'text-black' : 'text-white');

  return (
    <div className="py-12 px-4 md:px-12 lg:px-24 bg-[#F2F2F2]">
      <h2 className="text-2xl font-normal text-left mb-8 text-black">Categories</h2>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center text-left"
          >
            <div className={`rounded-full h-20 w-20 flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 ${getIconBgColorClass()}`}>
              <div className="text-black">{category.icon}</div>
            </div>
            <div>
              <Link href={category.link} passHref>
                <h3
                  className={`text-lg font-normal ${getTextColorClass()} mb-1 hover:text-red-600 cursor-pointer`}
                >
                  {category.title}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
