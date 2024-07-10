import React from 'react'
import Carousel from '../Carousel/Carousel'
import HeroSection from './HeroHeading/HeroSection'
import FindSeriesSection from './FindSeries/Findseries'
// import { ThreeDCardDemo } from './Test'


const Shop = () => {
  return (
    <div>

        <HeroSection/>
        <Carousel />
        {/* <ThreeDCardDemo /> */}
        <FindSeriesSection />
        {/* Video section jo banana hai abhi but kaise vo nhi pata */}
    </div>
  )
}

export default Shop