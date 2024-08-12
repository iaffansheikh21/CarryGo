import React from 'react'
import BannerSectionCard from '../components/Blogs/BannerSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubmitAd from '../components/SubmitAd/SubmitAd'

export default function page() {
  return (
   <>
    <Navbar/>
    <BannerSectionCard/>
    <SubmitAd/>
    <Footer/>
   </>
  )
}
