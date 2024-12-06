import React from 'react'
import Navbar from '../Components/NavBar'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import RoundSection from '../Components/RoundSection'
import ProductSection from '../Components/ProductSection'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <RoundSection/>
        <ProductSection/>
        <Footer/>

    </div>
  )
}

export default HomePage