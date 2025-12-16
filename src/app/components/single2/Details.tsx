import React from "react";
import Image from "next/image";

const Details = () => {
  return (
    <div className="w-full lg:w-[65%] lg:mx-auto mr-2 p-1  lg:mt-14  flex flex-col lg:flex-row justify-between items-start">
      {/* Left Section - Description and Details */}
      <div className="w-full lg:w-[60%]">
        <h2 className="text-black text-3xl font-bold">Description</h2>
        <p className="text-gray-700 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
          tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos.
          Vestibulum tincidunt, sapien sagittis sollicitudin dapibus, risus mi
          euismod elit, in dictum justo lacus sit amet dui. Sed faucibus vitae
          nisl at dignissim.
        </p>

        {/* Horizontal Details Table */}
        <div className="mt-8 overflow-x-auto">
          <h2 className="text-black text-3xl font-semibold pb-2">Details</h2>
          <table className="w-full text-left text-gray-500">
            <tbody>
              <tr>
                <td className="py-2 px-4 font-semibold">Date Added</td>
                <td className="py-2 px-4">05.04.2017</td>
                <td className="py-2 px-4 font-semibold">First Owner</td>
                <td className="py-2 px-4">Yes</td>
                <td className="py-2 px-4 font-semibold">Type</td>
                <td className="py-2 px-4">Offer</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">Material</td>
                <td className="py-2 px-4">Wood, Leather</td>
                <td className="py-2 px-4 font-semibold">Status</td>
                <td className="py-2 px-4">Used</td>
                <td className="py-2 px-4 font-semibold">Color</td>
                <td className="py-2 px-4">White, Grey</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold">Height</td>
                <td className="py-2 px-4">47cm</td>
                <td className="py-2 px-4 font-semibold">Width</td>
                <td className="py-2 px-4">203cm</td>
                <td className="py-2 px-4 font-semibold">Length</td>
                <td className="py-2 px-4">54cm</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Location Section */}
        <div className="mt-8 h-]">
          <h2 className="text-black text-3xl font-semibold pb-2">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.02235668915!2d-0.3817811335630587!3d51.52830805699648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb38a9c5677%3A0x30385f1a9208be0!2sLondon!5e0!3m2!1sen!2suk!4v1688984652379!5m2!1sen!2suk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Right Section - Author and Contact Form */}
      <div className="w-full lg:w-[35%] lg:ml-14 mt-10 lg:mt-0 mx-auto lg:flex-shrink-0">
        <h1 className="text-black w-[] text-3xl font-semibold p-2">Author</h1>

        <div className="bg-white p-8 rounded-lg shadow-2xl w-full">
          <div className="flex items-center space-x-4">
            {/* Author Image */}
            <Image
              src="https://via.placeholder.com/80"
              alt="Jane Doe"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">Jane Doe</h2>
              <div className="flex items-center space-x-1">
                <span className="text-red-600 text-sm">★★★★☆</span>
                <span className="text-black text-sm">(12)</span>
              </div>
              <a href="#" className="text-red-500 text-sm">
                SHOW MY LISTINGS
              </a>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-black">
              <strong className="mr-6">Phone: </strong>830-247-0930
            </p>
            <p className="text-black">
              <strong className="mr-6">Email: </strong>hijane@example.com
            </p>
          </div>
          <hr className=" mt-7 lg:w-[70%] mb-8" />

          {/* Form */}
          <div className="w-full h-full mb-10">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="mb-2 block">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded focus:border-red-500 focus:ring-red-500 focus:shadow-inner"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded focus:border-red-500 focus:ring-red-500 focus:shadow-inner"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block">
                  Message:
                </label>
                <textarea
                  id="message"
                  placeholder="Hi there! I am interested in your offer ID 53951. Please give me more details."
                  className="w-full p-3 border border-gray-300 rounded focus:border-red-500 focus:ring-red-500 focus:shadow-inner"
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className="py-2 px-6 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-all"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
