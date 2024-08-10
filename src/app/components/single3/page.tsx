import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BannerSectionCard from "../grid-single/BannerSectionSingle";
import Details from "../single2/Details";
import HorizontalCard from "../single2/HorizontalCard";
import ScrollingImages from "./ScrollingImages";
const MyComponent = () => {
  return (
    <>
      <Navbar />
      <BannerSectionCard />
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className="  bg-[#F2F2F2] overflow-hidden z-20 ">
        <ScrollingImages />
      </div>
      <div className="  bg-[#F2F2F2] overflow-hidden z-20  ">
        <Details />
      </div>
      <div className=" bg-[#F2F2F2] overflow-hidden z-20 ">
        <div className=" lg:ml-20 ">
          <HorizontalCard />
        </div>
      </div>

      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>
      <div className="ml-10">
        <Footer />
      </div>
    </>
  );
};

export default MyComponent;
