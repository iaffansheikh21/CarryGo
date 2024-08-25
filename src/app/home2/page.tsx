import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import FeaturedAds from "../components/FeaturedAds";
import SellingSteps from "../components/SellingSteps";
import RecentAds from "../components/RecentAds";

export default function Home() {
  return (
    <>
      <div className="text-black">
        <Navbar />
      </div>
      <div className="bg-[#f2f2f2]">
        <div className="">
          <HeroSection />
          <div
            className="h-32 bg-[#F2F2F2]"
            style={{
              clipPath: "ellipse(90% 100% at 50% 100%)",
            }}
          ></div>
          <div className="flex justify-center w-[78%] items-center mx-auto">
            <div>
              <FeaturedAds />
            </div>
          </div>
          <SellingSteps />
          <RecentAds />
          <div
            className=" h-48 bg-[#F2F2F2]"
            style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
          ></div>
          <Footer />
        </div>
      </div>
    </>
  );
}
