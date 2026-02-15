import React from 'react';

import AboutDesktop from '../components/about/AboutDesktop';
import AboutMobile from '../components/about/AboutMobile';
import Timeline from '../components/about/Timeline';
import CoreValues from '../components/about/CoreValues';
import Certifications from '../components/about/Certifications';

const About = () => {
    return (
        <div className="bg-white">
            <AboutDesktop />
            <AboutMobile />

            <Timeline />
            <CoreValues />
            <Certifications />
        </div>
    );
};

export default About;
