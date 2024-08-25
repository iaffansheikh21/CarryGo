import React from "react";
import Navbar from "../components/Navbar";
import BannerSectionPricing from "../components/pricing/BannerSectionPricing";
import ChangePassword from "../components/changePassword/ChangePassword";
import Footer from "../components/Footer";

const MyComponent = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <BannerSectionPricing heading="Change Password" />
      </div>
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className="  bg-[#F2F2F2] overflow-hidden ">
        <div className="relative z-20 ">
          <ChangePassword />
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
