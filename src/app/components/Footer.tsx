import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative lg:ml-32 bg-white pt-20 pb-10 w-full"
      style={{
        backgroundImage: 'url("/footerbg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-16">
          {/* Brand and Description */}
          <div className="w-full lg:w-1/3 mb-8 text-center lg:text-left">
            <Link href="/" className="block lg:ml-0 ml-20 mb-8 mx-auto lg:mx-0">
              <Image
                src="/logo_footer.svg"
                alt="Logo"
                width={150}
                height={50}
              />
            </Link>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
              tincidunt arcu, sit amet fermentum sem. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
          {/* Navigation */}
          <div className="w-full lg:w-1/4 mb-8 text-center lg:text-left z-10">
            <h2 className="text-xl font-semibold mb-4">Navigation</h2>
            <div className="flex justify-center lg:justify-start flex-wrap">
              <div className="w-1/2">
                <nav>
                  <ul className="list-none space-y-3 opacity-80">
                    <li>
                      <Link
                        className="hover:text-[#FF0000] cursor-pointer"
                        href="#"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-[#FF0000] cursor-pointer"
                        href="#"
                      >
                        Listing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-[#FF0000] cursor-pointer"
                        href="#"
                      >
                        Pages
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-[#FF0000] cursor-pointer"
                        href="#"
                      >
                        Extras
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-[#FF0000] cursor-pointer"
                        href="#"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-[#FF0000] cursor-pointer"
                        href="#"
                      >
                        Submit Ad
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="w-1/2">
                <nav>
                  <ul className="list-none space-y-3 opacity-80">
                    <li>
                      <Link
                        className="hover:text-[#FF0000] cursor-pointer"
                        href="#"
                      >
                        My Ads
                      </Link>
                    </li>
                    <li className="hover:text-[#FF0000] cursor-pointer">
                      <Link href="#">Sign In</Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-[#FF0000] cursor-pointer"
                        href="#"
                      >
                        Register
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="w-full lg:w-1/3 text-center lg:text-left z-10">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <address className="opacity-80">
              <p>
                <strong>Address:</strong>
                <br />
                124 Abia Martin Drive
                <br />
                New York, NY 10011
              </p>
              <p>
                <strong>Email:</strong>
                <a
                  className="hover:text-[#FF0000] cursor-pointer hover:underline"
                  href="mailto:hello@example.com"
                >
                  hello@example.com
                </a>
              </p>
              <p>
                <strong>Skype:</strong>
                <span className="hover:text-[#FF0000] cursor-pointer hover:underline">
                  Craigs
                </span>
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md"
              >
                Contact Us
              </Link>
            </address>
          </div>
          
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-0">
          <p>&copy; 2024 All rights reserved</p>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          <p>Developed by Affan and Bassam</p>
        </div>
      {/* Background Image */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/footerbg.jpg"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div> */}
    </footer>
  );
};

export default Footer;
