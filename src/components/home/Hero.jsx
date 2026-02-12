import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg'
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary">
            {/* Background Images with Horizontal Slide */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence initial={false} custom={currentSlide}>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.0, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${images[currentSlide]}')` }}
                    >
                        {/* Vibrant Multi-tone Overlay */}
                        <div className="absolute inset-0 bg-secondary/40" />
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-primary/10" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-4 uppercase tracking-tighter leading-[0.8] drop-shadow-2xl">
                        POWER<span className="text-primary">BENZ</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-white font-bold tracking-[0.4em] uppercase mb-8 opacity-80">
                        Industries Pvt. Ltd.
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 font-semibold tracking-wide dropshadow-md"
                >
                    A Professionally Managed Scrap Trading Company
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="/contact"
                        className="bg-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg inline-block"
                    >
                        Explore Our Solutions
                    </a>

                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
