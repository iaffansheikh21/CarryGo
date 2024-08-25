import React from "react";
import Navbar from "../components/Navbar";
import BannerSectionPricing from "../components/pricing/BannerSectionPricing";
import SellerComponent from "../components/Seller/SellerComponent";
import Footer from "../components/Footer";

const sellers = [
  {
    name: "Jane Great",
    location: "Nashville, TN",
    imageUrl: "/profile.webp",
    listings: 36,
    rating: 3,
    additionalInfo: " Lorem ipsum dolor sit amet, consectetur",
    email: "jane@example.com",
    phone: "+1 123 456 789",
  },
  {
    name: "John E. Metzger",
    location: "Spokane, WA",
    imageUrl: "/profile.webp",
    listings: 57,
    rating: 5,
    email: "john.m@example.com",
    phone: "+1 123 456 789",
  },
  {
    name: "Rosina",
    location: "Orlando, FL",
    imageUrl: "/profile.webp",
    rating: 3,
    listings: 12,
    email: "rosina@yah.com",
    phone: "+1 123 456 789",
    skype: "Rosina5",
    facebook: "fb.me/rosina",
  },
  {
    name: "Robert Mathews",
    location: "Saint, WA",
    additionalInfo: "Maecenas varius tempus libero ut pellentesque.",
    imageUrl: "/profile.webp",
    rating: 5,
    listings: 32,
    email: "robert@example.com",
    phone: "+1 123 456 789",
  },
  {
    name: "Angelia Teems",
    location: "Asbury, KS",
    imageUrl: "/profile.webp",
    rating: 4,
    listings: 38,
    email: "hello@example.com",
    phone: "+1 123 456 789",
    additionalInfo: "Maecenas varius tempus libero ut pellentesque.",
  },
  {
    name: "Martina Whittaker",
    location: "Louisville, KY",
    imageUrl: "/profile.webp",
    listings: 57,
    email: "john.m@example.com",
    phone: "+1 123 456 789",
    tags: ["TOP RATED"],
  },
  {
    name: "John E. Metzger",
    location: "Spokane, WA",
    imageUrl: "/profile.webp",
    listings: 57,
    email: "john.m@example.com",
    phone: "+1 123 456 789",
    tags: ["TOP RATED"],
  },
  {
    name: "John E. Metzger",
    location: "Spokane, WA",
    imageUrl: "/profile.webp",
    listings: 57,
    email: "john.m@example.com",
    phone: "+1 123 456 789",
    tags: ["TOP RATED"],
  },
  // Add more sellers as needed
];
const MyComponent = () => {
  return (
    <>
      <Navbar />

      <BannerSectionPricing heading="Seller" />

      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className=" min-h-screen bg-[#F2F2F2] overflow-hidden ">
        <div className="relative z-20 ">
          {/* <CardComponent /> */}
          {/* <Pricing /> */}
          <SellerComponent sellers={sellers} />
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
