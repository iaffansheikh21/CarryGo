import React from "react";

const ContactForm: React.FC = () => {
  return (
    <>
      <h1 className="text-black text-3xl font-semibold p-2 lg:ml-16 mt-10">
        AUTHOR
      </h1>

      <div className="flex justify-start items-center mt-4 ml-6 lg:mr-0 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full lg:w-[60%] h-auto lg:ml-12">
          <div className="flex flex-col lg:flex-row">
            {/* Author Details */}
            <div className="w-full lg:w-1/2 flex items-start space-x-4 mb-6 lg:mb-0">
              <div className="flex-shrink-0">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Jane Doe"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Jane Doe</h2>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-red-500 text-sm">★★★★☆</span>
                  <span className="text-black text-sm">(12)</span>
                </div>
                <a href="#" className="text-red-500 text-sm mt-2">
                  SHOW MY LISTINGS
                </a>
                <div className="mt-52 lg:mt-2">
                  <p className="text-black">
                    <strong className="mr-2 lg:mr-6">Phone: </strong>
                    830-247-0930
                  </p>
                  <p className="text-black">
                    <strong className="mr-2 lg:mr-6">Email: </strong>
                    hijane@example.com
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2">
              <form className="ml-0 lg:ml-8">
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
                    Email:
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
                    className="w-full p-3 border shadow-inner shadow-2xl border-gray-300 rounded focus:border-red-500 focus:ring-red-500 focus:shadow-inner"
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="py-2 px-6 bg-[#FF0000] text-white font-semibold rounded hover:bg-red-600 transition-all"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
