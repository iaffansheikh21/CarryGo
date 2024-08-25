import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import FeaturedAds from "../components/FeaturedAds";
import SellingSteps from "../components/SellingSteps";
import RecentAds from "../components/RecentAds";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div className="mt-5 mb-5 pb-6">
        <HeroBanner />
      </div>
      <div className="bg-[#f2f2f2]">
        <div
          className="h-32 bg-[#F2F2F2]"
          style={{
            clipPath: "ellipse(90% 100% at 50% 100%)",
          }}
        ></div>

        <div className="w-[80%] flex justify-center items-center mx-auto ">
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
