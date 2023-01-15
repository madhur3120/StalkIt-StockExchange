import React from 'react'
import Footer from '../Home/Footer'
import Cards from '../Home/Cards'
import HeroSection from '../Home/HeroSection'
import Navbar from '../Home/Navbar'
import InfoSection from './InfoSection/InfoSection'
import { InfoData, InfoData2 } from './InfoSection/InfoData'
import InfoSection2 from './InfoSection/InfoSection2'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <InfoSection {...InfoData} />
            <InfoSection2 {...InfoData2} />
            <Cards />
            <Footer />
        </>
    )
}

export default Home