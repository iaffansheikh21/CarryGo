import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardComponent from "../components/listing-grid-full-width/CardComponent";
import BannerSectionImageHeader from "../components/ImageHeader/BannerSectionImageHeader";

const MyComponent = () => {
  return (
    <>
      <div className="bg-[#F2F2F2]">
        <div
          className="bg-cover h-48 text-white"
          style={{
            backgroundImage: "url('/bg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
            clipPath: "ellipse(95% 100% at 50% 0%)",
            zIndex: 10,
          }}
        >
          <div className="bg-opacity-50">
            <Navbar />
            <BannerSectionImageHeader />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#F2F2F2] overflow-hidden">
        <div className="relative  mt-10 z-20">
          <CardComponent />
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
