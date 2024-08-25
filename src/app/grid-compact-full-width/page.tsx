import React from "react";
import Navbar from "../components/Navbar";
import BannerSectionPricing from "../components/pricing/BannerSectionPricing";
import CardComponent from "../components/listing-grid-full-width/CardComponent";
import Footer from "../components/Footer";

const MyComponent = () => {
  return (
    <>
      <Navbar />

      <BannerSectionPricing
        heading="Listing Grid Compact Full Width
"
      />

      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className=" min-h-screen bg-[#F2F2F2] overflow-hidden ">
        <div className="relative z-20 ">
          <CardComponent />
        </div>
      </div>
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default MyComponent;
