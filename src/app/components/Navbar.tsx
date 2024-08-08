"use client"; // Ensure this is at the very top of the file

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaCaretLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [nestedDropdown, setNestedDropdown] = useState<string | null>(null);
  const [subNestedDropdown, setSubNestedDropdown] = useState<string | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (dropdown: string) => {
    setHoveredDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
    setNestedDropdown(null);
    setSubNestedDropdown(null);
  };

  return (
    <div className="relative">
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8 text-black transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
          </div>
        </Link>
        <div className="hidden md:flex md:items-center space-x-8">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm flex items-center hover:text-gray-700 cursor-pointer">
              Home <RiArrowDropDownFill />
            </button>
            {hoveredDropdown === "home" && (
              <div className="absolute top-full text-sm right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Home 1
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Home 2
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Home 3
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Home 4
                  </span>
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("listing")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm flex items-center hover:text-gray-700 cursor-pointer">
              Listing <RiArrowDropDownFill />
            </button>
            {hoveredDropdown === "listing" && (
              <div className="absolute top-full text-sm right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("grid")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                    <FaCaretLeft className="mr-0 text-xs" />
                    Grid
                  </span>
                  {nestedDropdown === "grid" && (
                    <div className="absolute top-0 text-sm right-full mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="components/listing-grid-full-width" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Full Width
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          With Sidebar
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Compact With Sidebar
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Compact Full Width
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("list")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                    <FaCaretLeft className="mr-0 text-xs" />
                    List
                  </span>
                  {nestedDropdown === "list" && (
                    <div className="absolute top-0 text-sm right-full mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Full Width
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          With Sidebar
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Compact With Sidebar
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Compact Full Width
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("masonry")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                    <FaCaretLeft className="mr-0 text-xs" />
                    Masonry
                  </span>
                  {nestedDropdown === "masonry" && (
                    <div className="absolute top-0 text-sm right-full mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Full Width
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          With Sidebar
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("single")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                    <FaCaretLeft className="mr-0 text-xs" />
                    Single
                  </span>
                  {nestedDropdown === "single" && (
                    <div className="absolute top-0 text-sm right-full mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Single 1
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Single 2
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Single 3
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("pages")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm flex items-center hover:text-gray-700 cursor-pointer">
              Pages <RiArrowDropDownFill />
            </button>
            {hoveredDropdown === "pages" && (
              <div className="absolute top-full right-0 mt-2 w-48 text-sm bg-white border border-gray-200 rounded shadow-lg">
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Seller
                  </span>
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("sellerDetail")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <Link href="/" passHref>
                    <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                      <FaCaretLeft className="mr-0 text-xs" />
                      Seller Detail
                    </span>
                  </Link>
                  {nestedDropdown === "sellerDetail" && (
                    <div className="absolute top-0 right-full mt-2 w-48 text-sm bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Seller Detail 1
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Seller Detail 2
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Blog
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Blog Post
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Submit Ad
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Pricing
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    FAQ
                  </span>
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("extras")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm flex items-center hover:text-gray-700 cursor-pointer">
              Extras <RiArrowDropDownFill />
            </button>
            {hoveredDropdown === "extras" && (
              <div className="absolute top-full rihgt-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("gridVariants")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <Link href="/" passHref>
                    <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                      <FaCaretLeft className="mr-0 text-xs" />
                      Grid Variants
                    </span>
                  </Link>
                  {nestedDropdown === "gridVariants" && (
                    <div className="absolute top-0 right-full mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                          4 Items
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                          3 Items
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                          2 Items
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("userPanel")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <Link href="/" passHref>
                    <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                      <FaCaretLeft className="mr-0 text-xs" />
                      User Panel
                    </span>
                  </Link>
                  {nestedDropdown === "userPanel" && (
                    <div className="absolute top-0 right-full mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                          My Profile
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                          My Ads
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                          Change Password
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                          Sign In
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                          Register
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                    Elements
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                    Typography
                  </span>
                </Link>

                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("nestedNavigation")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <Link href="/" passHref>
                    <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                      <FaCaretLeft className="mr-0 text-xs" />
                      Nested Navigation
                    </span>
                  </Link>
                  {nestedDropdown === "nestedNavigation" && (
                    <div className="absolute top-0 right-full mt-2 w-60 bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                          Level 1
                        </span>
                      </Link>
                      <Link href="/" passHref>
                        <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                          Level 3
                        </span>
                      </Link>
                      <div
                        className="relative"
                        onMouseEnter={() => setSubNestedDropdown("level2")}
                        onMouseLeave={() => setSubNestedDropdown(null)}
                      >
                        <Link href="/" passHref>
                          <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                            <FaCaretLeft className="mr-0 text-xs" />
                            Level 2
                          </span>
                          {/* <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer"><FontAwesomeIcon icon={faChevronLeft} className="mr-1" />Level 2</span> */}
                        </Link>
                        {subNestedDropdown === "level2" && (
                          <div className="absolute top-0 right-full mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                            <Link href="/" passHref>
                              <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                                Sub Level 1
                              </span>
                            </Link>
                            <Link href="/" passHref>
                              <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                                Sub Level 2
                              </span>
                            </Link>
                            <Link href="/" passHref>
                              <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                                Sub Level 3
                              </span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  <Link href="/" passHref>
                    <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                      Image Header
                    </span>
                  </Link>
                  <Link href="/" passHref>
                    <span className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                      Messages
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/" passHref>
            <span
              className="hover:text-gray-700 cursor-pointer text-sm"
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </span>
          </Link>
          <div className="flex items-center space-x-4 ml-auto">
            <Link href="/" passHref>
              <button className="bg-white text-xs text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition duration-700 ease-in-out py-2 px-4 rounded-full">
                SUBMIT AD
              </button>
            </Link>
          </div>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-xl">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </nav>
      {/* Sidebar menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 md:hidden">
          <div className="flex flex-col items-center mt-20">
            <Link href="/" passHref legacyBehavior>
              <a className="text-lg py-2" onClick={toggleMenu}>
                Home
              </a>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <a className="text-lg py-2" onClick={toggleMenu}>
                Listing
              </a>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <a className="text-lg py-2" onClick={toggleMenu}>
                Pages
              </a>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <a className="text-lg py-2" onClick={toggleMenu}>
                Extras
              </a>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <a className="text-lg py-2" onClick={toggleMenu}>
                Contact
              </a>
            </Link>
            <Link href="/" passHref>
              <button className="bg-white text-xs text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition duration-700 ease-in-out py-2 px-4 rounded-full">
                SUBMIT AD
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
