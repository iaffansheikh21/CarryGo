import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardComponent from "./components/CardComponent";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    // <div>
    //   <Navbar />
    //   <HeroSection />
    //   <CardComponent />
    //   <div
    //     className=" h-48 bg-[#F2F2F2]"
    //     style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
    //   ></div>
    //   <Footer />
    // </div>

    <>
      <div className="w-full">
        <Navbar />
      </div>
      <br />
      <br />
      <br />
      <div className="h-full mt-10">
        <HeroBanner />
      </div>
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <div className=" m bg-[#F2F2F2] overflow-hidden ">
        <div className="relative z-20 ">
          <CardComponent />
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
}
