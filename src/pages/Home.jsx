import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero/Hero'
import Featured from '../components/Home/Featured/Featured'
import WhyUs from '../components/Home/WhyUs/WhyUs'
import OurMission from '../components/Home/Mission/OurMission'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Featured/>
      <WhyUs/>
      <OurMission/>
    </>
  )
}

export default Home
