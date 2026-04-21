import React from 'react';
import ServiceGrid from '../components/services/ServiceGrid';
import GlobalReach from '../components/services/GlobalReach';
import InspectionProcess from '../components/services/InspectionProcess';
import LogisticsGallery from '../components/services/LogisticsGallery';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div className="bg-[#011627]">
            {/* Minimalist Page Header */}
            <section className="relative pt-44 pb-32 overflow-hidden bg-secondary">
                {/* Abstract Background Design */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#011627]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-9xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                            Our <span className="text-primary italic">Solutions</span>
                        </h1>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-white/20" />
                            <p className="text-white/40 font-bold text-xs uppercase tracking-[0.5em]">
                                Precision Engineering • Global Logistics • Material Science
                            </p>
                            <div className="h-px w-12 bg-white/20" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="bg-white">
                <ServiceGrid />
                <InspectionProcess />
                <GlobalReach />
                <LogisticsGallery />
            </div>
        </div>
    );
};

export default Services;
