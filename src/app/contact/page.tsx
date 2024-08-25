import React from "react";
import BannerSectionContact from "../components/Contact/BannerSectionContact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact/ContactForm";

export default function page() {
  return (
    <div>
      <Navbar />
      <BannerSectionContact />
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <Contact />
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>
      <Footer />
    </div>
  );
}
