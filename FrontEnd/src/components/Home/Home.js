import React from 'react'
import Footer from '../Home/Footer'
import Cards from '../Home/Cards'
import HeroSection from '../Home/HeroSection'
import Navbar from '../Home/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home