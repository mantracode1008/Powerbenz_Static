import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
    '/images/hero/hero-3.jpg'
];

const HeroDesktop = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hidden md:flex relative min-h-screen items-center justify-center overflow-hidden bg-[#011627]">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${images[currentSlide]}')`, opacity: 0.5 }}
                    >
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#011627] via-transparent to-[#011627]" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-6 max-w-7xl mx-auto pt-40 md:pt-44 lg:pt-52 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
                        Global Recycling Partner
                    </div>
                </motion.div>

                <div className="mb-12 overflow-hidden">
                    <motion.h1
                        className="text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-none"
                    >
                        <div className="overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                                className="block text-white"
                            >
                                Power<span className="text-primary">Benz</span>
                            </motion.span>
                        </div>

                        <div className="overflow-hidden mt-2">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
                                className="block text-transparent outline-text italic"
                                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                            >
                                Industries
                            </motion.span>
                        </div>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.2 }}
                    className="text-2xl text-white/50 max-w-4xl mx-auto mb-14 font-light tracking-wide leading-relaxed"
                >
                    Bridging global supply lines with <span className="text-white font-bold border-b border-primary/30 pb-1">sustainable scrap solutions.</span>
                </motion.p>
            </div>

            <style>{`.outline-text { text-shadow: 0 0 50px rgba(0,0,0,0.5); }`}</style>
        </section>
    );
};

export default HeroDesktop;
