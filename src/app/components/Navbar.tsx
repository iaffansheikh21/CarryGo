  "use client";

  import React, { useState, useEffect, useRef } from "react";
  import Link from "next/link";
  import Image from "next/image";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faBars,faTimes,} from "@fortawesome/free-solid-svg-icons";
  import { RiArrowDropDownFill } from "react-icons/ri";
  import { FaCaretLeft } from "react-icons/fa";
  import { useRouter, usePathname } from "next/navigation";

  const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [nestedDropdown, setNestedDropdown] = useState<string | null>(null);
    const [subNestedDropdown, setSubNestedDropdown] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
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
      if (activeDropdown === null) {
        setActiveDropdown(dropdown);
      }
    };

    const handleMouseLeave = () => {
      if (activeDropdown === null) {
        setActiveDropdown(null);
        setNestedDropdown(null);
        setSubNestedDropdown(null);
      }
    };

    const getTextColorClass = () => {
      if (pathname === '/home2') {
        return "text-white";
      }
      return "text-black";
    };

    return (
      <div className="relative" ref={navbarRef}>
        <nav
          className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8 text-black transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
          <Link href={"/"}>
            <div className="flex items-center">
              <Image src="/logo_footer.svg" alt="logo" width={100} height={100} />
            </div>
          </Link>
          <div className={`hidden md:flex md:items-center space-x-8 ${getTextColorClass()}`}>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-sm flex items-center hover:text-gray-700 cursor-pointer"
                onClick={() => handleDropdownClick("home")}
              >
                Home  <RiArrowDropDownFill />
              </button>
              {activeDropdown === "home" && (
                <div className="absolute top-full text-sm right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                  <Link href="/" passHref>
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => setActiveDropdown(null)}>
                      Home 1
                    </span>
                  </Link>
                  <Link href="home2" passHref>
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => setActiveDropdown(null)}>
                      Home 2
                    </span>
                  </Link>
                  <Link href="home3" passHref>
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => setActiveDropdown(null)}>
                      Home 3
                    </span>
                  </Link>
                  <Link href="home4" passHref>
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => setActiveDropdown(null)}>
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
                className="text-sm flex items-center hover:text-gray-700 cursor-pointer"
                onClick={() => handleDropdownClick("listing")}
              >
                Listing <RiArrowDropDownFill />
              </button>
              {activeDropdown === "listing" && (
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
                        <Link href="/components/listing-grid-full-width" passHref>
                          <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Full Width
                          </span>
                        </Link>
                        <Link href="/components/grid-with-sidebar" passHref>
                          <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            With Sidebar
                          </span>
                        </Link>
                        <Link
                          href="/components/grid-compact-with-sidebar"
                          passHref
                        >
                          <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Compact With Sidebar
                          </span>
                        </Link>
                        <Link href="/components/grid-compact-fullwidth" passHref>
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
            {/* pages link */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-sm flex items-center hover:text-gray-700 cursor-pointer"
                onClick={() => handleDropdownClick("pages")}
              >
                Pages <RiArrowDropDownFill />
              </button>
              {activeDropdown === "pages" && (
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
                  <Link href="/" passHref>
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
                className="text-sm flex items-center hover:text-gray-700 cursor-pointer"
                onClick={() => handleDropdownClick("extras")}
              >
                Extras<RiArrowDropDownFill />
              </button>
              {activeDropdown === "extras" && (
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

        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 bg-white p-4 shadow-md">
            <Link href="/" passHref>
              <span className="block text-gray-700 hover:text-gray-900 cursor-pointer">Home</span>
            </Link>
            <Link href="/listing" passHref>
              <span className="block text-gray-700 hover:text-gray-900 cursor-pointer">Listing</span>
            </Link>
            <Link href="/pages" passHref>
              <span className="block text-gray-700 hover:text-gray-900 cursor-pointer">Pages</span>
            </Link>
            <Link href="/extras" passHref>
              <span className="block text-gray-700 hover:text-gray-900 cursor-pointer">Extras</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="block text-gray-700 hover:text-gray-900 cursor-pointer">Contact</span>
            </Link>
            <Link href="/" passHref>
              <button className="bg-white text-xs text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition duration-700 ease-in-out py-2 px-4 rounded-full">
                SUBMIT AD
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  };

  export default Navbar;