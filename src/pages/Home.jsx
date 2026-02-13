import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import OurStory from '../components/home/OurStory';
import Leadership from '../components/home/Leadership';
import VisionMission from '../components/home/VisionMission';
import Lenis from 'lenis';

const Home = () => {

    // Initialize Smooth Scroll for Home Page specifically if not global
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="w-full overflow-hidden bg-white">
            <Hero />
            <Stats />
            <OurStory />
            <VisionMission />
            <Leadership />
        </main>
    );
};

export default Home;
