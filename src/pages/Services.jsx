import React from 'react';
import ServiceGrid from '../components/services/ServiceGrid';
import GlobalReach from '../components/services/GlobalReach';
import InspectionProcess from '../components/services/InspectionProcess';
import LogisticsGallery from '../components/services/LogisticsGallery';
import { motion } from 'framer-motion';

import servicesHeroImg from '../assets/services/services_hero.jpg';

const Services = () => {
    return (
        <div>
            {/* Page Header */}
            <section className="relative py-24 bg-secondary overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src={servicesHeroImg}
                        alt="Services Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider"
                    >
                        Solutions & Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-bold text-lg uppercase tracking-widest"
                    >
                        Powering Your Industrial Supply Chain
                    </motion.p>
                </div>
            </section>

            <ServiceGrid />
            <GlobalReach />
            <InspectionProcess />
            <LogisticsGallery />
        </div>
    );
};

export default Services;
