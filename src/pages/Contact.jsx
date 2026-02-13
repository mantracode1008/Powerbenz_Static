import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import OfficeLocations from '../components/contact/OfficeLocations';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <main className="bg-[#020D16] min-h-screen selection:bg-primary selection:text-white">

            {/* Reduced Height Cinematic Header */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

                {/* Background Typography: Industrial Watermark - Slightly smaller */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
                >
                    <span className="text-[18vw] font-black text-white/[0.02] uppercase leading-none tracking-tighter whitespace-nowrap">
                        CONTACTPB
                    </span>
                </motion.div>

                {/* Animated Background Gradients */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />
                </div>

                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 z-0 opacity-5"
                    style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

                <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* High-End Label - Slimmer */}
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.6em]">Global Reach</span>
                            <div className="h-px w-12 bg-primary" />
                        </div>

                        {/* Main Title: Scaled Down */}
                        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black text-white leading-[0.85] mb-10 tracking-tighter uppercase relative">
                            Get In <br />
                            <span className="text-primary italic font-light outline-text-thick">Touch</span>
                        </h1>

                        <div className="max-w-xl mx-auto space-y-6 mt-12">
                            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed tracking-tight">
                                Connecting industrial needs with <span className="text-white font-medium border-b border-primary/20">precision execution</span>.
                            </p>

                            <motion.div
                                style={{ opacity }}
                                className="flex justify-center gap-4 sm:gap-10 pt-6"
                            >
                                {['SURAT', 'DUBAI', 'SINGAPORE'].map((city) => (
                                    <div key={city} className="flex flex-col items-center">
                                        <span className="text-[8px] font-black text-white/20 tracking-[0.4em] mb-1">HUB</span>
                                        <span className="text-white/60 font-bold tracking-widest text-xs">{city}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator Icon - Smaller */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
                >
                    <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
                </motion.div>
            </section>

            {/* Main Content Area - Reduced corner radius for a tighter look */}
            <div className="bg-white rounded-t-[3.5rem] relative z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
                <ContactForm />
                <OfficeLocations />
            </div>

            <style>{`
                .outline-text-thick {
                    -webkit-text-stroke: 1.5px #F37021;
                    color: transparent;
                }
            `}</style>
        </main>
    );
};

export default Contact;
