import React from "react";

const MapElement: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mb-6 mt-10">
      {/* Simple Map Heading */}
      <h2 className="text-2xl font-s mb-10 text-center md:text-left">
        Simple Map
      </h2>

      {/* Google Map */}
      <div className="map-container mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6902673230485!2d-0.13859268423103363!3d51.513551779635825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b313e6937c5%3A0xa53fced0a0f8e0c3!2sHyde%20Park%2C%20London!5e0!3m2!1sen!2suk!4v1612417436951!5m2!1sen!2suk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>

      {/* .box class section */}
      <div className="mb-4">
        <h3 className="text-xl text-left ml-2 text-pink-500 font-semibold">
          .box <span className="font-light">class</span>
        </h3>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex-1 p-4 mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">
            Content without <span className="text-pink-500">.box</span> class
          </h4>
          <p>
            Maecenas mollis maximus dapibus. Nulla ex magna, malesuada non
            imperdiet sed, ultrices quis purus. Duis condimentum accumsan
            bibendum.
          </p>
        </div>

        {/* Right Content with .box class */}
        <div className="flex-1 p-4">
          <h4 className="text-lg font-semibold mb-2">
            Content with <span className="text-pink-500">.box</span> class
          </h4>
          <div className="box p-6 bg-white shadow-md rounded-lg">
            <p>
              Maecenas mollis maximus dapibus. Nulla ex magna, malesuada non
              imperdiet sed, ultrices quis purus. Duis condimentum accumsan
              bibendum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapElement;
