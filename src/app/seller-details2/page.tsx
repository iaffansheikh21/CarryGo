import React from "react";

import Navbar from "../components/Navbar";
import SellerDetails2 from "../components/SellerDetails2/SellerDetails2";
import CardComponent from "../components/grid-with-sidebar/CardComponent";
import Footer from "../components/Footer";
import BannerSectionPricing from "../components/pricing/BannerSectionPricing";
import WriteReview from "../components/SellerDetails/WriteReview";
import ReviewList from "../components/SellerDetails2/ReviewCard";

const MyComponent = () => {
  return (
    <>
      <Navbar />

      <BannerSectionPricing
        heading="Seller Detail 2
"
      />

      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className="  bg-[#F2F2F2] overflow-hidden ">
        <div className="relative z-20 ">
          <SellerDetails2 />
        </div>

        <div className="w-full lg:ml-20 ml-3 mt-4  ">
          <div className="mt-3 text-black ">
            <h1 className="mb-9 text-2xl lg:ml-52"> My Ads </h1>
            <div className="">
              <CardComponent />
            </div>
          </div>
        </div>
        <div className="">
          <WriteReview />
        </div>
        <div className="">
          <ReviewList />
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
