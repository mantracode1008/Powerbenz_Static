import React, { useRef } from 'react';
import Timeline from '../components/about/Timeline';
import CoreValues from '../components/about/CoreValues';
import Certifications from '../components/about/Certifications';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax & Zoom Effects
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div className="bg-white">
            {/* New Ultra-Clean Light Hero */}
            <section ref={containerRef} className="relative pt-40 pb-32 bg-[#F8FAFC] overflow-hidden min-h-[60vh] flex items-center">

                {/* 1. Cinematic Animated Background */}
                <motion.div
                    style={{ y, scale }}
                    className="absolute inset-0 z-0"
                >
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Global Logistics & Industrial"
                        className="w-full h-full object-cover opacity-40 grayscale contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/40 via-[#F8FAFC]/70 to-[#F8FAFC]" />
                </motion.div>

                {/* 2. Dynamic Background Aura */}
                <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-[120px] pointer-events-none opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

                {/* 3. Technical Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-multiply"
                    style={{
                        backgroundImage: `linear-gradient(rgba(1, 22, 39, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(1, 22, 39, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        style={{ opacity }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {/* Top Tag - Drops Down */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className="inline-flex items-center gap-3 mb-6"
                        >
                            <motion.div initial={{ width: 0 }} animate={{ width: 32 }} transition={{ delay: 0.5, duration: 0.5 }} className="h-[1px] bg-primary" />
                            <span className="text-secondary/60 font-black tracking-[0.4em] uppercase text-[10px]">Est. 2003</span>
                            <motion.div initial={{ width: 0 }} animate={{ width: 32 }} transition={{ delay: 0.5, duration: 0.5 }} className="h-[1px] bg-primary" />
                        </motion.div>

                        {/* Main Heading - Revels Up */}
                        <h1 className="text-5xl md:text-9xl font-black text-secondary tracking-tighter mb-6 uppercase leading-[0.85]">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 50, rotateX: -20 },
                                    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                            >
                                Powerbenz
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                                className="text-transparent"
                                style={{ WebkitTextStroke: '1px #011627' }}
                            >
                                Industries
                            </motion.div>
                        </h1>

                        {/* Subtext - Fades In */}
                        <motion.p
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 1 } }
                            }}
                            className="text-secondary/60 font-bold uppercase tracking-[0.6em] text-xs md:text-sm flex items-center justify-center gap-4"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
                            Global Recycling Standards
                            <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <Timeline />
            <CoreValues />
            <Certifications />
        </div>
    );
};

export default About;
