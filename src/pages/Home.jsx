import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import OurStory from '../components/home/OurStory';
import Leadership from '../components/home/Leadership';
import VisionMission from '../components/home/VisionMission';

const Home = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <OurStory />
            <Leadership />
            <VisionMission />
        </div>
    );
};

export default Home;
