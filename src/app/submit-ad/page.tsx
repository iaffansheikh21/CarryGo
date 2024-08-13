import React from 'react'
import BannerSectionCard from '../components/Blogs/BannerSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubmitAd from '../components/SubmitAd/SubmitAd'

export default function page() {
  return (
    <>
      <Navbar />
      <BannerSectionCard />
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
      <SubmitAd />
      <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
      ></div>
      <Footer />
    </>
  )
}
