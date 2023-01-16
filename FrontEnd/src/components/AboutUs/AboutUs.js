import React from 'react'
import './AboutUs.css'
import InfoSection from '../Home/InfoSection/InfoSection'
import InfoSection2 from '../Home/InfoSection/InfoSection2'
import { InfoData3 } from '../Home/InfoSection/InfoData'
import Card from '../Test/Card'
import Navbar from "../Home/Navbar";
import Footer from '../Home/Footer'

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className='head1'>About Us</div>
            <InfoSection {...InfoData3} />
            <Footer />
        </>
    )
}
export default AboutUs