import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CardComponent from "./CardComponent";
import BannerSectionCard from "./BannerSectionCard";
import SideSection from "./SideSection";

const MyComponent = () => {
  return (
    <>
      {/* <SideSection /> */}
      <Navbar />

      <BannerSectionCard />

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
      <div className="ml-36 md:ml-20">
        <Footer />
      </div>
    </>
  );
};

export default MyComponent;
