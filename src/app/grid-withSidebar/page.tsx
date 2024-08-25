import React from "react";
import BannerSectionPricing from "../components/pricing/BannerSectionPricing";
import Navbar from "../components/Navbar";
import CardComponent from "../components/grid-with-sidebar/CardComponent";
import SideSection from "../components/grid-with-sidebar/SideSection";
import Footer from "../components/Footer";

const MyComponent = () => {
  return (
    <>
      <Navbar />

      <BannerSectionPricing heading="Listing Grid With Sidebar" />

      <div
        className="h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>

      {/* Flexbox Container to Hold CardComponent and SideSection */}

      <div className=" bg-[#F2F2F2] overflow-hidden flex">
        {/* CardComponent */}
        <div className="relative z-20 ">
          <CardComponent />
        </div>

        {/* SideSection */}
        <div className="relative z-20 lg:w-[40%] w-full lg:mt-20 lg:mr-20">
          <SideSection />
        </div>
      </div>

      <div
        className="h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>

      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default MyComponent;
