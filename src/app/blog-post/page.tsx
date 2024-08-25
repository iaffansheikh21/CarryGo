import React from "react";
import BlogPost from "../components/Blogs/BlogPost";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerSection from "../components/Blogs/BannerSection";
export default function page() {
  return (
    <div>
      <Navbar />
      <div className=" mb-20">
        <BannerSection />
      </div>
      <div
        className="h-32 bg-[#F2F2F2]"
        style={{
          clipPath: "ellipse(90% 100% at 50% 100%)",
        }}
      ></div>
      <BlogPost />
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>
      <Footer />
    </div>
  );
}
