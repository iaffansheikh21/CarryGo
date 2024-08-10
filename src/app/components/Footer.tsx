// components/Footer.tsx
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div
      className="bg-white py-10 flex flex-col items-center justify-center bg-cover bg-center lg:mr-0 mr-20"
      style={{ backgroundImage: "url(/footerbg.jpg)" }}
    >
      <div className="container lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-5 ">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/logo_footer.svg"
            alt="FISTA Logo"
            className="mb-2 h-20 w-40"
          />
          <p className="text-[#878689]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
            tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-xl mb-4">Navigation</h3>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-10">
            <ul className="space-y-2 text-gray-500">
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
            <ul className="space-y-2 text-gray-500">
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
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-xl mb-4">Contact</h3>
          <address className="not-italic mb-4 text-gray-500">
            124 Abia Martin Drive
            <br />
            New York, NY 10011
          </address>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <Link
              href="mailto:hello@example.com"
              className="text-gray-500 hover:text-[#FF0000]"
            >
              hello@example.com
            </Link>
          </p>
          <p className="mb-4">
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
