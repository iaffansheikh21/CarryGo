import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import FeaturedAds from "../components/FeaturedAds";
import SellingSteps from "../components/SellingSteps";
import RecentAds from "../components/RecentAds";
import Categories from "../components/Categories";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-40 mb-20">
        <HeroBanner />
      </div>
      <div className="bg-[#F2F2F2]">
        <div
          className="h-32 bg-[#F2F2F2]"
          style={{
            clipPath: "ellipse(90% 100% at 50% 100%)",
          }}
        ></div>
        <div className="w-[90%] mx-auto mb-10">
          <Categories />
        </div>
        <div className="w-[80%] flex justify-center items-center mx-auto">
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
    </>
  );
}
