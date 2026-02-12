import React from 'react';
import Timeline from '../components/about/Timeline';
import CoreValues from '../components/about/CoreValues';
import Certifications from '../components/about/Certifications';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div>
            <section className="relative py-24 bg-secondary text-white text-center overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="High Density Container Terminal"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-secondary/60"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
                    >
                        About Powerbenz Industries Pvt Ltd
                    </motion.h1>
                    <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-black text-xs uppercase tracking-[0.3em]"
                    >
                        A Journey of Excellence & Precision · Est. 2003
                    </motion.p>
                </div>
            </section>

            <Timeline />
            <CoreValues />
            <Certifications />
        </div>
    );
};

export default About;
