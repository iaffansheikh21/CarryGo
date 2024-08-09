import Image from "next/image";
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CardComponent from "./components/CardComponent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* Bottom Elliptical Background */}
      <div
        className="h-32 bg-[#F2F2F2]"
        style={{
          clipPath: 'ellipse(90% 100% at 50% 100%)'
        }}
      ></div>
      <CardComponent />
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>
      <Footer />
    </div>
  );
}
