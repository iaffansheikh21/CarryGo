import React from "react";
import SellerDetails from "../components/SellerDetails/SellerDetails";
import Navbar from "../components/Navbar";
import BannerSectionPricing from "../components/pricing/BannerSectionPricing";
import WriteReview from "../components/SellerDetails/WriteReview";
import Reviews from "../components/SellerDetails/Reviews";
import Footer from "../components/Footer";
import SellerCard from "../components/SellerDetails/SellerCard";
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
          <SellerDetails />
        </div>

        <div className="w-full lg:w-[85%]">
          <div className="mt-3 text-black w-[98%]">
            <h1 className="mb-9 text-2xl lg:ml-72 ml-5"> My Ads </h1>
            <div className="">
              <SellerCard />
            </div>
          </div>
        </div>
        <div className="">
          <WriteReview />
        </div>
        <div className="">
          {" "}
          <Reviews />
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
