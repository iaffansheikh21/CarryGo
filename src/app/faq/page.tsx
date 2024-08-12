import React from 'react'
import FAQ from '../components/FAQ/FAQ'
import BannerSection from '../components/FAQ/BannerSectionCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function page() {
    return (
        <div>
            <Navbar />
            <BannerSection />
            <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
            <FAQ />
            <div
                className=" h-48 bg-[#F2F2F2]"
                style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
            ></div>
            <Footer />
        </div>
    )
}
