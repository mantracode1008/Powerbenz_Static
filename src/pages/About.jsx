import React from 'react';

import AboutDesktop from '../components/about/AboutDesktop';
import AboutMobile from '../components/about/AboutMobile';
import Timeline from '../components/about/Timeline';
import CoreValues from '../components/about/CoreValues';
import OurProcess from '../components/about/OurProcess';

const About = () => {
    return (
        <div className="bg-white">
            <AboutDesktop />
            <AboutMobile />

            <Timeline />
            <CoreValues />
            <OurProcess />
        </div>
    );
};

export default About;
