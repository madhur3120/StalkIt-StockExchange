import React from 'react'
import './AboutUs.css'
import InfoSection from '../Home/InfoSection/InfoSection'
import { InfoData3 } from '../Home/InfoSection/InfoData'
import Card from '../Test/Card'
const AboutUs = () => {
    return (
        <>
            <div className='head1'>About Us</div>
            <InfoSection {...InfoData3} />

        </>
    )
}

export default AboutUs