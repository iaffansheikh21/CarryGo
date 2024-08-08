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
      <CardComponent />
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>
      <Footer/>
    </div>
  );
}
