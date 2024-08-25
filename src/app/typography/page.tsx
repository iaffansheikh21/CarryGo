import React from "react";
import Navbar from "../components/Navbar";
import BannerSectionPricing from "../components/pricing/BannerSectionPricing";
import Typography from "../components/typography/Typography";
import Footer from "../components/Footer";

const MyComponent = () => {
  return (
    <>
      <Navbar />

      <BannerSectionPricing heading="Typography" />

      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className=" min-h-screen bg-[#F2F2F2] overflow-hidden ">
        <div className="relative z-20 ">
          <Typography />
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
