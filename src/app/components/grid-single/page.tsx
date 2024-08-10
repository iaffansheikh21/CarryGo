import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import CardComponent from "./CardComponent";
import BannerSectionCard from "./BannerSectionSingle";
import ImageSlider from "./ImageSlider";
import SideSection from "../grid-with-sidebar/SideSection";
import SingleCardComponent from "./SingleCardComponent";
import LocationSection from "./locationSection";
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
      <div className=" min-h-screen bg-[#F2F2F2] overflow-hidden ">
        <div className="relative z-20 ">
          <ImageSlider />
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
