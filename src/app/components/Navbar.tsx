"use client";

import React, { useState, useEffect, useRef } from "react";

import { FaChevronDown } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaCaretLeft } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [nestedDropdown, setNestedDropdown] = useState<string | null>(null);
  const [subNestedDropdown, setSubNestedDropdown] = useState<string | null>(
    null
  );
  const [dropDownActive, setDropDownActive] = useState<string | null>();
  const [NestedDropDownActive, setNestedDropDownActive] = useState<
    string | null
  >();
  const router = useRouter();
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleMenuEnter = (menudrop: string) => {
    setDropDownActive(menudrop);
  };

  const handleMenuOver = () => {
    setDropDownActive(null);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setNestedDropdown(null);
        setSubNestedDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = async () => {
    setTimeout(() => {
      if (activeDropdown != null) {
        setActiveDropdown(null);
        setNestedDropdown(null);
        setSubNestedDropdown(null);
      }
    }, 500);
  };

  const getTextColorClass = () => {
    if (pathname === "/home2") {
      return "text-white";
    }
    return "text-black";
  };

  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isListingOpen, setIsListingOpen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isSingleOpen, setIsSingleOpen] = useState(false);
  const [isMasonryOpen, setIsMasonryOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isSellerDetailsOpen, setIsSellerDetailsOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isExtraOpen, setIsExtraOpen] = useState(false);
  const [isGridVariantOpen, setIsGridVariantOpen] = useState(false);
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
  const [isNestedNavOpen, setIsNestedNavOpen] = useState(false);
  const [isNestedLevelNavOpen, setIsNestedLevelNavOpen] = useState(false);
  return (
    <div className="relative" ref={navbarRef}>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8 text-black transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md text-black"
            : "bg-transparent text-black"
        }`}
      >
        <Link href={"/"}>
          <div className="   items-center">
            <Image src="/logo_footer.svg" alt="logo" width={100} height={100} />
          </div>
        </Link>
        <div
          className={`hidden md:flex md:items-center  space-x-8 ${getTextColorClass()}`}
        >
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-sm flex items-center text-black  hover:text-gray-700 cursor-pointer"
              onClick={() => handleDropdownClick("home")}
            >
              Home{" "}
              {activeDropdown === "home" || dropDownActive === "home" ? (
                <RiArrowDropDownFill
                  size={24}
                  className="text-[#FF0000] rotate-180"
                />
              ) : (
                <RiArrowDropDownFill size={24} className="text-black" />
              )}
              {/* <RiArrowDropDownFill /> */}
            </button>
            {(activeDropdown === "home" || dropDownActive === "home") && (
              <div
                onMouseEnter={() => handleMenuEnter("home")}
                onMouseLeave={handleMenuOver}
                className={`absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg transition-opacity duration-300 ease-out transform ${
                  activeDropdown === "home" || dropDownActive === "home"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
              >
                <Link href="/" passHref>
                  <span
                    className="block text-md px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Home 1
                  </span>
                </Link>
                <Link href="/home2" passHref>
                  <span
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Home 2
                  </span>
                </Link>
                <Link href="/home3" passHref>
                  <span
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Home 3
                  </span>
                </Link>
                <Link href="/home4" passHref>
                  <span
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Home 4
                  </span>
                </Link>
              </div>
            )}
          </div>
          {/* Listing links */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("listing")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-sm text-black flex items-center hover:text-gray-700 cursor-pointer"
              onClick={() => handleDropdownClick("listing")}
            >
              Listing
              {activeDropdown === "listing" || dropDownActive === "listing" ? (
                <RiArrowDropDownFill
                  size={24}
                  className="text-[#FF0000] rotate-180"
                />
              ) : (
                <RiArrowDropDownFill size={24} className="text-black" />
              )}
              {/* <RiArrowDropDownFill /> */}
            </button>
            {(activeDropdown === "listing" || dropDownActive === "listing") && (
              <div
                className={`absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg transition-opacity duration-300 ease-out transform ${
                  activeDropdown === "listing" || dropDownActive === "listing"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
                onMouseEnter={() => handleMenuEnter("listing")}
                onMouseLeave={handleMenuOver}
              >
                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("grid")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                    <FaCaretLeft
                      className={`mr-0 text-xs transition-colors duration-300 ease-out ${
                        nestedDropdown === "grid"
                          ? "text-[#FF0000]"
                          : "text-gray-700"
                      }`}
                    />
                    Grid
                  </span>
                  {nestedDropdown === "grid" && (
                    <div className="absolute top-0 text-sm right-full mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="/grid-fullWidth" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Full Width
                        </span>
                      </Link>
                      <Link href="/grid-withSidebar" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          With Sidebar
                        </span>
                      </Link>
                      <Link href="/grid-compact-with-sidebar" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Compact With Sidebar
                        </span>
                      </Link>
                      <Link href="/grid-compact-full-width" passHref>
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
                    <FaCaretLeft
                      className={`mr-0 text-xs transition-colors duration-300 ease-out ${
                        nestedDropdown === "list"
                          ? "text-[#FF0000]"
                          : "text-gray-700"
                      }`}
                    />
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
                    <FaCaretLeft
                      className={`mr-0 text-xs transition-colors duration-300 ease-out ${
                        nestedDropdown === "masonry"
                          ? "text-[#FF0000]"
                          : "text-gray-700"
                      }`}
                    />
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
                    <FaCaretLeft
                      className={`mr-0 text-xs transition-colors duration-300 ease-out ${
                        nestedDropdown === "single"
                          ? "text-[#FF0000]"
                          : "text-gray-700"
                      }`}
                    />
                    Single
                  </span>
                  {nestedDropdown === "single" && (
                    <div className="absolute top-0 text-sm right-full mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="/components/grid-single" passHref>
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
            <button
              className="text-sm flex text-black items-center hover:text-gray-700 cursor-pointer"
              onClick={() => handleDropdownClick("pages")}
            >
              Pages{" "}
              {activeDropdown === "pages" || dropDownActive === "pages" ? (
                <RiArrowDropDownFill
                  size={24}
                  className="text-[#FF0000] rotate-180"
                />
              ) : (
                <RiArrowDropDownFill size={24} />
              )}
            </button>
            {(activeDropdown === "pages" || dropDownActive === "pages") && (
              <div
                className={`absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg transition-opacity duration-300 ease-out transform ${
                  activeDropdown === "pages" || dropDownActive === "pages"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
                onMouseEnter={() => handleMenuEnter("pages")}
                onMouseLeave={handleMenuOver}
              >
                <Link href="seller_" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Seller
                  </span>
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("sellerDetail")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <Link href="" passHref>
                    <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                      <FaCaretLeft
                        className={`mr-0 text-xs transition-colors duration-300 ease-out ${
                          nestedDropdown === "sellerDetail"
                            ? "text-[#FF0000]"
                            : "text-gray-700"
                        }`}
                      />
                      Seller Detail
                    </span>
                  </Link>
                  {nestedDropdown === "sellerDetail" && (
                    <div className="absolute top-0 right-full mt-2 w-48 text-sm bg-white border border-gray-200 rounded shadow-lg">
                      <Link href="/seller-details" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Seller Detail 1
                        </span>
                      </Link>
                      <Link href="/seller-details2" passHref>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Seller Detail 2
                        </span>
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/blog" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Blog
                  </span>
                </Link>
                <Link href="/blog-post" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Blog Post
                  </span>
                </Link>
                <Link href="/submit-ad" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Submit Ad
                  </span>
                </Link>
                <Link href="/pricing" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Pricing
                  </span>
                </Link>
                <Link href="/faq" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    FAQ
                  </span>
                </Link>
              </div>
            )}
          </div>
          {/* Extras Link */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("extras")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-sm flex text-black items-center hover:text-gray-700 cursor-pointer"
              onClick={() => handleDropdownClick("extras")}
            >
              Extras
              {activeDropdown === "extras" || dropDownActive === "extras" ? (
                <RiArrowDropDownFill
                  size={24}
                  className="text-[#FF0000] rotate-180"
                />
              ) : (
                <RiArrowDropDownFill size={24} />
              )}
            </button>
            {(activeDropdown === "extras" || dropDownActive === "extras") && (
              <div
                className={`absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg transition-opacity duration-300 ease-out transform ${
                  activeDropdown === "extras" || dropDownActive === "extras"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
                onMouseEnter={() => handleMenuEnter("extras")}
                onMouseLeave={handleMenuOver}
              >
                <div
                  className="relative"
                  onMouseEnter={() => setNestedDropdown("gridVariants")}
                  onMouseLeave={() => setNestedDropdown(null)}
                >
                  <Link href="/" passHref>
                    <span className="flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer">
                      <FaCaretLeft
                        className={`mr-0 text-xs transition-colors duration-300 ease-out ${
                          nestedDropdown === "gridVariants"
                            ? "text-[#FF0000]"
                            : "text-gray-700"
                        }`}
                      />{" "}
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
                      <FaCaretLeft
                        className={`mr-0 text-xs transition-colors duration-300 ease-out ${
                          nestedDropdown === "userPanel"
                            ? "text-[#FF0000]"
                            : "text-gray-700"
                        }`}
                      />{" "}
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
                      <FaCaretLeft
                        className={`mr-0 text-xs transition-colors duration-300 ease-out ${
                          nestedDropdown === "nestedNavigation"
                            ? "text-[#FF0000]"
                            : "text-gray-700"
                        }`}
                      />{" "}
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
              className="hover:text-gray-700 text-black cursor-pointer text-sm"
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
      {/* Responsive navbar  */}

      <div className="mt-16 z-50">
        {isMenuOpen && (
          <div className="md:hidden flex  justify-end flex-col space-y-4 mt-4 bg-white p-3 shadow-md">
            {/* Home Dropdown */}
            <div>
              <div
                onClick={() => setIsHomeOpen(!isHomeOpen)}
                className="cursor-pointer flex items-center text-gray-700 hover:text-gray-900"
              >
                Home
                <FaChevronDown
                  size={9}
                  className={`ml-2 mt-1 transform transition-transform ${
                    isHomeOpen ? "rotate-180 text-[#FF0000]" : ""
                  }`}
                />
              </div>
              {isHomeOpen && (
                <div className=" bg-[#F2F2F2] mt-2 space-y-2">
                  <Link href="/" passHref>
                    <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800 cursor-pointer">
                      Home 1
                    </span>
                  </Link>
                  <Link href="/home2" passHref>
                    <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800 mt-2 space-y-2 cursor-pointer">
                      Home 2
                    </span>
                  </Link>
                  <Link href="/home3" passHref>
                    <span className="block pl-1 pt-1 text-gray-600 mt-2 space-y-2 hover:text-gray-800 cursor-pointer">
                      Home 3
                    </span>
                  </Link>
                  <Link href="/home4" passHref>
                    <span className="block pl-1 pt-1 text-gray-600 mt-2 space-y-2 hover:text-gray-800 cursor-pointer">
                      Home 4
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Listing Dropdown */}
            <div>
              <div
                onClick={() => setIsListingOpen(!isListingOpen)}
                className="cursor-pointer flex items-center text-gray-900 hover:text-gray-900"
              >
                Listing
                <FaChevronDown
                  size={9}
                  className={`ml-2 mt-1 transform transition-transform ${
                    isListingOpen ? "rotate-180 text-[#FF0000]" : ""
                  }`}
                />
              </div>
              {isListingOpen && (
                <div className="p- mt-2 space-y-2 bg-[#F2F2F2]">
                  <div>
                    <div
                      onClick={() => setIsGridOpen(!isGridOpen)}
                      className="cursor-pointer flex flex-wrap pl-1 pt-1  text-gray-600 hover:text-gray-800"
                    >
                      Grid
                      <FaChevronDown
                        size={9}
                        className={`ml-2 mt-2 transform transition-transform ${
                          isGridOpen ? "rotate-180 text-[#FF0000]" : ""
                        }`}
                      />
                    </div>
                    {isGridOpen && (
                      <div className=" mt-2 space-y-2 border-t border-gray-300 bg-[#e7e6e6]">
                        <Link href="/grid-fullWidth" passHref>
                          <span className="block pl-1 text-gray-500 hover:text-gray-700 mt-2 space-y-2 cursor-pointer">
                            Full Width
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                        <Link href="/grid-withSidebar" passHref>
                          <span className="block pl-1 text-gray-500 hover:text-gray-700 mt-2 space-y-2 cursor-pointer">
                            with Side Bar
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />

                        <Link href="/grid-compact-with-sidebar" passHref>
                          <span className=" pl-1 text-gray-500 hover:text-gray-700 mt-2 space-y-2 cursor-pointer">
                            Compact with Sidebar
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />

                        <Link href="/grid-compact-full-width" passHref>
                          <span className="block pl-1 text-gray-500 hover:text-gray-700 mt-2 space-y-2 cursor-pointer">
                            Compact Full Width
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      onClick={() => setIsListOpen(!isListOpen)}
                      className="cursor-pointer pl-1 pt-1 flex flex-wrap text-gray-600 hover:text-gray-800"
                    >
                      List
                      <FaChevronDown
                        size={9}
                        className={`ml-2 mt-2 transform transition-transform ${
                          isListOpen ? "rotate-180 text-[#FF0000]" : ""
                        }`}
                      />
                    </div>
                    {isListOpen && (
                      <div className="border-t border-gray-300 mt-2 space-y-2 bg-[#e7e6e6]">
                        <Link href="/listing/list/full-width-sidebar" passHref>
                          <span className="block pl-1 pt-2 text-gray-500 hover:text-gray-700  cursor-pointer">
                            Full Width with Sidebar
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />

                        <Link href="/listing/list/compact-full-width" passHref>
                          <span className="block pl-1 mt-2 space-y-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                            Compact Full Width
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />

                        <Link href="/listing/list/compact-sidebar" passHref>
                          <span className="block pl-1 text-gray-500 hover:text-gray-700 mt-2 space-y-2 cursor-pointer">
                            Compact with Sidebar
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      onClick={() => setIsMasonryOpen(!isMasonryOpen)}
                      className="cursor-pointer pl-1 pt-1 flex flex-wrap text-gray-600 hover:text-gray-800"
                    >
                      Masonry
                      <FaChevronDown
                        size={9}
                        className={`ml-2 mt-2 transform transition-transform ${
                          isMasonryOpen ? "rotate-180 text-[#FF0000]" : ""
                        }`}
                      />
                    </div>
                    {isMasonryOpen && (
                      <div className="bg-[#e7e6e6] border-t border-gray-300 mt-2 space-y-2">
                        <Link href="/masonry/full-width" passHref>
                          <span className="block pl-1 pt-1 text-gray-500 hover:text-gray-700 cursor-pointer">
                            Full Width
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />

                        <Link href="/listing/masonry/side-bar" passHref>
                          <span className="block mt-2 pl-1 pt-1 space-y-2 text-gray-500 hover:text-gray-700  cursor-pointer">
                            Side Bar
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      onClick={() => setIsSingleOpen(!isSingleOpen)}
                      className="cursor-pointer pb-2 pl-1 pt-1 flex flex-wrap text-gray-600 hover:text-gray-800 space-y-2"
                    >
                      Single
                      <FaChevronDown
                        size={9}
                        className={`ml-2 mt-2 transform transition-transform ${
                          isSingleOpen ? "rotate-180 text-[#FF0000]" : ""
                        }`}
                      />
                    </div>
                    {isSingleOpen && (
                      <div className=" mt-2 bg-[#e7e6e6] border-t border-gray-300 space-y-2">
                        <Link href="/single" passHref>
                          <span className="block pl-1 pt-1  text-gray-500 hover:text-gray-700 cursor-pointer">
                            Single 1
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                        <Link href="/single-2" passHref>
                          <span className="block pl-1 pt-1 text-gray-500 hover:text-gray-700 mt-2 space-y-2 cursor-pointer">
                            Single 2
                          </span>
                        </Link>
                        <hr className="border  border-gray-300" />
                        <Link href="/single-3" passHref>
                          <span className="block pl-1 pt-1 mt-2 space-y-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                            Single 3
                          </span>
                          <hr className="border border-gray-300 mb-1 mt-2" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div>
              <div
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="cursor-pointer flex items-center text-gray-700 hover:text-gray-900"
              >
                Pages
                <FaChevronDown
                  size={9}
                  className={`ml-2 mt-1 transform transition-transform ${
                    isPagesOpen ? "rotate-180 text-[#FF0000]" : ""
                  }`}
                />
              </div>
              {isPagesOpen && (
                <div className="bg-[#F2F2F2] mt-2 space-y-2">
                  <Link href="/seller_" passHref>
                    <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800 cursor-pointer">
                      Seller
                    </span>
                  </Link>
                  <div>
                    <div
                      onClick={() =>
                        setIsSellerDetailsOpen(!isSellerDetailsOpen)
                      }
                      className="cursor-pointer pl-1 pt-1 flex flex-wrap text-gray-600 hover:text-gray-800"
                    >
                      Seller Details
                      <FaChevronDown
                        size={9}
                        className={`ml-2 mt-2 transform transition-transform ${
                          isSellerDetailsOpen ? "rotate-180 text-[#FF0000]" : ""
                        }`}
                      />
                    </div>
                    {isSellerDetailsOpen && (
                      <div className="border-t border-gray-300 bg-[#e7e6e6] mt-2 space-y-2">
                        <Link href="/seller-details" passHref>
                          <span className="block pl-1 mt-2 space-y-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                            Seller Detail 1
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                        <Link href="/seller-details2" passHref>
                          <span className="block pl-1 mt-2 space-y-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                            Seller Detail 2
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                      </div>
                    )}
                  </div>
                  <Link href="/blog" passHref>
                    <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800  mt-2 space-y-2 cursor-pointer">
                      Blog
                    </span>
                  </Link>
                  <Link href="/submit-ads" passHref>
                    <span className="block pl-1 pt-1  mt-2 space-y-2  text-gray-600 hover:text-gray-800 cursor-pointer">
                      Submit Ads
                    </span>
                  </Link>
                  <Link href="/pricing" passHref>
                    <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800  mt-2 space-y-2  cursor-pointer">
                      Pricing
                    </span>
                  </Link>
                  <Link href="/faqs" passHref>
                    <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800  mt-2 space-y-2  cursor-pointer">
                      FAQs
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Other Links */}
            <div>
              <div
                onClick={() => setIsExtraOpen(!isExtraOpen)}
                className="cursor-pointer flex items-center  text-gray-700 hover:text-gray-900"
              >
                Extras
                <FaChevronDown
                  size={9}
                  className={`ml-2  transform transition-transform ${
                    isExtraOpen ? "rotate-180 text-[#FF0000]" : ""
                  }`}
                />
              </div>
              {isExtraOpen && (
                <div className="bg-[#F2F2F2]">
                  {/* Grid Variant Dropdown  */}
                  <div className=" mt-2   space-y-2">
                    <div
                      onClick={() => setIsGridVariantOpen(!isGridVariantOpen)}
                      className="cursor-pointer flex pl-1 pt-1 flex-wrap  text-gray-700 hover:text-gray-900"
                    >
                      Grid Variant
                      <FaChevronDown
                        size={9}
                        className={` ml-2 mt-2 transition-transform duration-300 ${
                          isGridVariantOpen ? "rotate-180 text-[#FF0000]" : ""
                        }`}
                      />
                    </div>
                    {isGridVariantOpen && (
                      <div className="border-t border-gray-300 bg-[#e7e6e6] ">
                        <div className=" mt-2 space-y-2">
                          <Link href="/" passHref>
                            <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800 cursor-pointer">
                              Item 1
                            </span>
                          </Link>
                          <hr className="border border-gray-300" />
                          <Link href="/" passHref>
                            <span className="block pl-1 pt-1 mt-2 space-y-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                              Item 2
                            </span>
                          </Link>
                          <hr className="border border-gray-300" />
                          <Link href="/grid-variant-item3" passHref>
                            <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800 mt-2 space-y-2 cursor-pointer">
                              Item 3
                            </span>
                          </Link>
                          <hr className="border border-gray-300" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* User Panel Dropdown */}
                  <div className=" mt-2 space-y-2">
                    <div
                      onClick={() => setIsUserPanelOpen(!isUserPanelOpen)}
                      className="cursor-pointer pl-1 pt-1 flex  flex-wrap text-gray-700 hover:text-gray-900"
                    >
                      User Panel
                      <FaChevronDown
                        size={9}
                        className={`ml-2 mt-2 transition-transform duration-300 ${
                          isUserPanelOpen ? "rotate-180 text-[#FF0000]" : ""
                        }`}
                      />
                    </div>
                    {isUserPanelOpen && (
                      <div className="border-t border-gray-300 bg-[#e7e6e6] mt-2 space-y-2">
                        <Link href="/my-profile" passHref>
                          <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800 cursor-pointer">
                            My Profile
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                        <Link href="/my-ads" passHref>
                          <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800 mt-2 space-y-2 cursor-pointer">
                            My Ads
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                        <Link href="/change-password" passHref>
                          <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800 mt-2 space-y-2 cursor-pointer">
                            Change Password
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                        <Link href="/sign-in" passHref>
                          <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800 mt-2 space-y-2 cursor-pointer">
                            Sign In
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                        <Link href="/register" passHref>
                          <span className="block pl-1 pt-1 text-gray-600 hover:text-gray-800 mt-2 space-y-2 cursor-pointer">
                            Register
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                      </div>
                    )}
                  </div>

                  {/* Simple Links */}
                  <Link href="/elements" passHref>
                    <span className="block pl-1 pt-1 mt-2 space-y-2 text-gray-700 hover:text-gray-900 cursor-pointer">
                      Elements
                    </span>
                  </Link>
                  <Link href="/typography" passHref>
                    <span className="block pl-1 pt-1 mt-2 space-y-2 text-gray-700 hover:text-gray-900 cursor-pointer">
                      Typography
                    </span>
                  </Link>

                  {/* Nested Navigation */}
                  <div className=" mt-2 space-y-2">
                    <div
                      onClick={() => setIsNestedNavOpen(!isNestedNavOpen)}
                      className="cursor-pointer pl-1 pt-1 flex flex-wrap text-gray-700 hover:text-gray-900"
                    >
                      <span>Nested Navigation</span>
                      <FaChevronDown
                        size={9}
                        className={` ml-2 mt-2 transition-transform duration-300 ${
                          isNestedNavOpen ? "rotate-180 text-[#FF0000]" : ""
                        }`}
                      />
                    </div>
                    {isNestedNavOpen && (
                      <div className="border-t border-gray-300 bg-[#e7e6e6] mt-2 ">
                        <Link href="/" passHref>
                          <span className="block pl-1 pt-1 mt-2 space-y-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                            Level 2
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />
                        <Link href="/" passHref>
                          <span className="block pl-1 pt-1 mt-2 space-y-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                            Level 2
                          </span>
                        </Link>
                        <hr className="border border-gray-300" />

                        <Link href="/" passHref>
                          <div
                            onClick={() =>
                              setIsNestedLevelNavOpen(!isNestedLevelNavOpen)
                            }
                            className="flex flex-wrap"
                          >
                            <span className="block pl-1 pt-1 mt-2 space-y-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                              Level 2
                            </span>
                            <FaChevronDown
                              size={9}
                              className={` ml-2 mt-5 transition-transform duration-300 ${
                                isNestedLevelNavOpen
                                  ? "rotate-180 text-[#FF0000]"
                                  : ""
                              }`}
                            />{" "}
                          </div>
                        </Link>
                        {isNestedLevelNavOpen && (
                          <>
                            <div className="  bg-[#d9dada]">
                              <Link href="/" passHref>
                                <span className="block pl-1 pt-2 mt-2 space-y-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                                  Level 1
                                </span>
                              </Link>
                              <hr className="border border-gray-400" />
                              <Link href="/" passHref>
                                <span className="block pl-1 pt-2 mt-2 space-y-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                                  Level 2
                                </span>
                              </Link>
                              <hr className="border border-gray-400" />
                              <Link href="/" passHref>
                                <span className="block pl-1 pt-2 mt-2 space-y-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                                  Level 3
                                </span>
                              </Link>
                              <hr className="border border-gray-400" />
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Simple Links */}
                  <Link href="/image-header" passHref>
                    <span className="block pl-1 pt-1 mt-2 space-y-2 text-gray-700 hover:text-gray-900 cursor-pointer">
                      Image Header
                    </span>
                  </Link>
                  <Link href="/messages" passHref>
                    <span className="block pl-1 pt-1  mt-2 space-y-2 text-gray-700 hover:text-gray-900 cursor-pointer">
                      Messages
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" passHref>
              <span className="block text-gray-700 hover:text-gray-900 cursor-pointer">
                Contact
              </span>
            </Link>
            <Link href="/submit-ad" passHref>
              <button className="bg-white text-xs text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition duration-700 ease-in-out py-2 px-4 rounded-full">
                SUBMIT AD
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
