// components/Footer.tsx
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-white py-10  flex flex-col items-center  justify-center md:items-start">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className=" ">
          <img
            src="/logo_footer.svg"
            alt="FISTA Logo"
            className="mb-2 h-20 w-40"
          />
          <p className="text-[#878689] text-center md:text-left  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
            tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4 text-center md:text-left">
            Navigation
          </h3>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-10">
            <ul className="space-y-2 text-gray-500 text-center md:text-left">
              <li>
                <Link href="#" className="hover:text-[#FF0000]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF0000]">
                  Listing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF0000]">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF0000]">
                  Extras
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF0000]">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-500 text-center md:text-left">
              <li>
                <Link href="#" className="hover:text-[#FF0000]">
                  My Ads
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF0000]">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF0000]">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-xl mb-4 text-center md:text-left">
            Contact
          </h3>
          <address className="not-italic mb-4 text-gray-500 text-center md:text-left">
            124 Abia Martin Drive
            <br />
            New York, NY 10011
          </address>
          <p className="mb-2 text-center md:text-left">
            <strong>Email:</strong>{" "}
            <Link
              href="mailto:hello@example.com"
              className="text-gray-500 hover:text-[#FF0000]"
            >
              hello@example.com
            </Link>
          </p>
          <p className="mb-4 text-center md:text-left">
            <strong>Skype:</strong>{" "}
            <Link
              href="skype:Craigs?chat"
              className="text-gray-500 hover:text-[#FF0000]"
            >
              FISTA
            </Link>
          </p>
          <button className="border border-[#FF0000] text-[#FF0000] hover:text-white py-2 px-4 rounded hover:bg-[#FF0000]">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;