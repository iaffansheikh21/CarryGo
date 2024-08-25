import React from "react";
import Navbar from "../components/Navbar";
import BannerSectionCard from "../components/grid-single/BannerSectionSingle";
import SlidingImages from "../components/single2/SlidingImages";
import Details from "../components/single2/Details";
import HorizontalCard from "../components/single2/HorizontalCard";
import Footer from "../components/Footer";

const MyComponent = () => {
  return (
    <>
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

        <div className=" lg:ml-28 overflow-hidden z-20 ">
          <HorizontalCard />
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
