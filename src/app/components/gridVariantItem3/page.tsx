import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BannerSectionPricing from "../pricing/BannerSectionPricing";
import CardComponentGridVariantItem3 from "./CardComponentGridVariantItem3";
const MyComponent = () => {
  return (
    <>
      <Navbar />

      <BannerSectionPricing heading="Listing Grid 3 Items" />

      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className=" min-h-screen bg-[#F2F2F2] overflow-hidden ">
        <div className="relative z-20 ">
          {/* <CardComponent /> */}
          <CardComponentGridVariantItem3 />
        </div>
      </div>
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>
      <div className="ml-36 md:ml-20">
        <Footer />
      </div>
    </>
  );
};

export default MyComponent;
