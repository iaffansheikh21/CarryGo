import React from 'react'
import BannerSection from '../components/Register/BannerSectionReg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Register from '../components/Register/Register'

export default function page() {
    return (
        <div>
            <Navbar />
            <BannerSection />
            <div
        className=" h-48 bg-[#F2F2F2]"
        style={{ clipPath: "ellipse(70% 50% at 50% 100%)", zIndex: 10 }}
      ></div>
            <Register/>
            <div
                className=" h-48 bg-[#F2F2F2]"
                style={{ clipPath: "ellipse(70% 50% at 50% 0%)", zIndex: 10 }}
            ></div>
            <Footer />
        </div>
    )
}
