import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SellerDetails2 from "./SellerDetails2";
import CardComponent from "../grid-with-sidebar/CardComponent";
// import SellerCard from "./SellerCard";
import WriteReview from "../SellerDetails/WriteReview";
import BannerSectionPricing from "../pricing/BannerSectionPricing";
import Reviews from "../SellerDetails/Reviews";
import ReviewList from "./ReviewCard";

const MyComponent = () => {
  return (
    <>
      <Navbar />

      <BannerSectionPricing
        heading="Seller Detail 1
"
      />

      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className="  bg-[#F2F2F2] overflow-hidden ">
        <div className="relative z-20 ">
          {/* <CardComponent /> */}
          {/* <Pricing /> */}
          {/* <SellerComponent sellers={sellers} /> */}
          <SellerDetails2 />
        </div>

        <div className="w-full lg:ml-20 ml-3 mt-4  ">
          <div className="mt-3 text-black ">
            <h1 className="mb-9 text-2xl lg:ml-52"> My Ads </h1>
            <div className="">
              {/* <SellerCard /> */}
              <CardComponent />
            </div>
          </div>
        </div>
        <div className="">
          <WriteReview />
        </div>
        <div className="">
          {" "}
          <ReviewList />
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
