import React from "react";
import SideSection from "../grid-with-sidebar/SideSection";

const LocationSection = () => {
  return (
    <div className="w-full lg:w-[75%] lg:mx-20 mt-8 flex flex-col lg:flex-row">
      {/* Details Table */}
      <div className="w-full lg:flex-1 mb-8  lg:mb-0 space-y-7">
        <h2 className="text-black text-3xl font-semibold ">Details</h2>
        <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          className="text-gray-500"
        >
          <tbody>
            <tr>
              <td>Date Added</td>
              <td>05.04.2017</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>Offer</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>Used</td>
            </tr>
            <tr>
              <td>First Owner</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>Wood, Leather</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>White, Grey</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>47cm</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>203cm</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>54cm</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Google Maps Frame */}
      <div className="w-full lg:w-[96%] lg:flex-1 mb-8 lg:mb-0 lg:mr-14 ml-3">
        <h2 className="text-black text-3xl font-semibold p-2">Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.02235668915!2d-0.3817811335630587!3d51.52830805699648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb38a9c5677%3A0x30385f1a9208be0!2sLondon!5e0!3m2!1sen!2suk!4v1688984652379!5m2!1sen!2suk"
          width="100%"
          height="350" // Adjusted height
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Side Section */}
      <div className="w-full lg:flex-1 lg:px-6 ml-3">
        <h2 className="text-black text-3xl font-semibold p-2">Search Ads</h2>
        <SideSection />
      </div>
    </div>
  );
};

export default LocationSection;
