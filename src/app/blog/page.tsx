import React from 'react'
import Blog from '../components/Blogs/Blog'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BannerSection from '../components/Blogs/BannerSection'
export default function page() {
  return (
    <div>
        <Navbar/>
        <BannerSection/>
        <div
                className="h-32 bg-[#F2F2F2]"
                style={{
                    clipPath: 'ellipse(90% 100% at 50% 100%)'
                }}
                ></div>
      <Blog/>
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>
      <Footer/>
    </div>
  )
}
