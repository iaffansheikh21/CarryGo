import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import CardComponent from "./CardComponent";
import BannerSectionCard from "../grid-single/BannerSectionSingle";
import SlidingImages from "./SlidingImages";
import SideSection from "../grid-with-sidebar/SideSection";
import Details from "./Details";
import HorizontalCard from "./HorizontalCard";

const MyComponent = () => {
  return (
    <>
      {/* <LocationSection /> */}
      {/* <SideSection /> */}
      <Navbar />

      <BannerSectionCard />

      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className="  bg-[#F2F2F2] overflow-hidden ">
        <div className="z-20 ">
          <SlidingImages />
        </div>
      </div>
      <div className="  bg-[#F2F2F2] overflow-hidden z-20  ">
        <Details />
      </div>
      <div className="  bg-[#F2F2F2] overflow-hidden z-20 ">
        <HorizontalCard />
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
