import React from 'react';
import { motion } from 'framer-motion';

const AboutMobile = () => {
    return (
        <section className="block md:hidden pt-32 pb-20 bg-[#F8FAFC] overflow-hidden">
            <div className="px-6 relative">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 mb-6"
                >
                    <div className="w-8 h-[1px] bg-primary" />
                    <span className="text-secondary/40 font-black tracking-[0.3em] uppercase text-[9px]">Established 2003</span>
                </motion.div>

                {/* Heading */}
                <div className="mb-10">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-6xl font-black text-secondary tracking-tighter uppercase leading-[0.85] mb-2"
                    >
                        Power<br />Benz
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl font-black tracking-tighter uppercase leading-none text-transparent"
                        style={{ WebkitTextStroke: '1px #011627' }}
                    >
                        Industries
                    </motion.h2>
                </div>

                {/* Subtext Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-secondary/5 border border-secondary/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16" />

                    <p className="text-secondary/70 text-lg leading-relaxed font-medium italic mb-6">
                        "Driving global sustainability through innovation and excellence in recycling standards."
                    </p>

                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.3em]">Global Standards</span>
                    </div>
                </motion.div>

                {/* Stats Grid for Mobile */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {[
                        { label: 'Experience', val: '20+ Yrs' },
                        { label: 'Partners', val: '500+' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + (i * 0.1) }}
                            className="bg-secondary p-6 rounded-3xl text-center"
                        >
                            <div className="text-primary text-2xl font-black mb-1">{stat.val}</div>
                            <div className="text-white/40 text-[8px] font-bold uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMobile;
