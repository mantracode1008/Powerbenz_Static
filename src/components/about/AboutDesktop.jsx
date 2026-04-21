import React from 'react';
import { motion } from 'framer-motion';

const AboutDesktop = () => {
    return (
        <section className="hidden md:flex relative h-[85vh] items-center justify-center overflow-hidden bg-[#06101A]">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
                        style={{ backgroundImage: `url('/images/hero/hero-1.jpg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06101A] via-[#06101A]/70 to-[#06101A]/10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#06101A] via-[#06101A]/40 to-transparent" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center w-full max-w-[1600px] mx-auto px-6 flex flex-col items-center">

                {/* EST. 2003 Label */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-4 mb-2"
                >
                    <div className="h-px w-12 bg-primary/60" />
                    <span className="text-white/40 font-black text-[10px] uppercase tracking-[0.4em]">Est. 2003</span>
                    <div className="h-px w-12 bg-primary/60" />
                </motion.div>

                {/* Main Heading Group */}
                <div className="relative mb-6 leading-none">

                    {/* POWERBENZ */}
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[8vw] xl:text-[140px] font-black text-white tracking-tighter leading-[0.85]"
                    >
                        POWERBENZ
                    </motion.h1>

                    {/* INDUSTRIES (Outlined) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[8vw] xl:text-[140px] font-black text-transparent tracking-tighter leading-[0.85]"
                        style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.1)' }} // Transparent with thin white stroke
                    >
                        INDUSTRIES
                    </motion.h1>
                </div>

                {/* Subtext */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center gap-3"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <p className="text-white/40 font-black text-[10px] md:text-xs uppercase tracking-[0.5em]">
                        Global Recycling Standards
                    </p>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                </motion.div>

            </div>
        </section>
    );
};

export default AboutDesktop;
