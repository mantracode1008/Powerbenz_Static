import React from 'react';
import ServiceGrid from '../components/services/ServiceGrid';
import GlobalReach from '../components/services/GlobalReach';
import InspectionProcess from '../components/services/InspectionProcess';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div>
            {/* Page Header */}
            <section className="relative py-24 bg-secondary overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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
        </div>
    );
};

export default Services;
