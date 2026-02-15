import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
    '/images/hero/hero-3.jpg'
];

const HeroMobile = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="flex md:hidden relative h-[100svh] items-center justify-center overflow-hidden bg-[#011627]">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${images[currentSlide]}')`, opacity: 0.4 }}
                    >
                        <div className="absolute inset-0 bg-black/70" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#011627] via-transparent to-[#011627]" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-6 pt-20">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6"
                >
                    <div className="inline-flex items-center px-4 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-black text-[9px] uppercase tracking-[0.3em] shadow-xl">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 animate-pulse" />
                        Global Recycling Partner
                    </div>
                </motion.div>

                {/* Main Heading */}
                <div className="mb-8">
                    <motion.h1
                        className="text-[14vw] font-black uppercase tracking-tighter leading-[0.85]"
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="block text-white"
                        >
                            Power
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="block text-primary"
                        >
                            Benz
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="block text-transparent italic mt-2"
                            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}
                        >
                            Industries
                        </motion.span>
                    </motion.h1>
                </div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-sm text-white/60 max-w-[280px] mx-auto mb-10 font-medium tracking-wide leading-relaxed"
                >
                    Bridging global supply lines with <span className="text-white border-b border-primary/30">sustainable scrap solutions.</span>
                </motion.p>

                {/* CTA - Quick Action for Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <button className="bg-primary text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-2xl active:scale-95 transition-transform">
                        Explore Now
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default HeroMobile;
