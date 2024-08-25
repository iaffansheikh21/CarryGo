import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-white pt-48 pb-40 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Brand and Description */}
          <div className="w-full md:w-5/12 mb-8">
            <a href="#" className="block mb-8">
              <Image
                src="/logo_footer.svg"
                alt="Logo"
                width={150}
                height={50}
              />
            </a>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
              tincidunt arcu, sit amet fermentum sem. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
          {/* Navigation */}
          <div className="w-full md:w-3/12 mb-8">
            <h2 className="text-xl font-semibold mb-4">Navigation</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2">
                <nav>
                  <ul className="list-none space-y-3 opacity-80">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Listing</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                    </li>
                    <li>
                      <a href="#">Extras</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Submit Ad</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="w-1/2">
                <nav>
                  <ul className="list-none space-y-3 opacity-80">
                    <li>
                      <a href="#">My Ads</a>
                    </li>
                    <li>
                      <a href="#">Sign In</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="w-full md:w-4/12">
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
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@example.com">hello@example.com</a>
              </p>
              <p>
                <strong>Skype:</strong> Craigs
              </p>
              <a
                href="/contact"
                className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md"
              >
                Contact Us
              </a>
            </address>
          </div>
        </div>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/footerbg.jpg"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
    </footer>
  );
};

export default Footer;
