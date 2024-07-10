import React from 'react'
import Carousel from '../Carousel/Carousel'
import HeroSection from './HeroHeading/HeroSection'
import FindSeriesSection from './FindSeries/Findseries'

const Shop = () => {
  return (
    <div>
        <HeroSection/>
        <Carousel />
        <FindSeriesSection />
        {/* Video section jo banana hai abhi but kaise vo nhi pata */}
    </div>
  )
}

export default Shop