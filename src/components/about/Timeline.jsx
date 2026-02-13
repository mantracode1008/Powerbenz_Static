import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Factory,
    Globe,
    Warehouse,
    Award,
    Sparkles,
    ChevronRight,
    Activity
} from 'lucide-react';

const milestones = [
    {
        year: '2003',
        title: 'The Founding',
        description: 'Powerbenz Industries was established with a clear vision to professionalize the scrap trading and recycling industry in Gujarat.',
        icon: Factory
    },
    {
        year: '2008',
        title: 'Global Procurement Hub',
        description: 'Expanded operations to international markets, securing key partnerships for non-ferrous scrap procurement worldwide.',
        icon: Globe
    },
    {
        year: '2015',
        title: 'Warehouse Expansion',
        description: 'Inaugurated our dedicated high-capacity warehouse facility in Surat to manage bulk materials.',
        icon: Warehouse
    },
    {
        year: '2020',
        title: 'Eco-Innovation Award',
        description: 'Recognized for our contributions to sustainable recycling practices and zero-waste industrial initiatives.',
        icon: Award
    },
    {
        year: '2024',
        title: 'Celebrating 20+ Years',
        description: 'Continuing our legacy as a trusted partner, bridging the gap between global supply and domestic demand.',
        icon: Sparkles
    },
];

const Timeline = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const auraX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const auraOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

    return (
        <section ref={sectionRef} className="relative h-[600vh] bg-[#F8FAFC]">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">

                {/* 1. Technical Grid Background */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, #011627 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* 2. Animated Aura Blob */}
                <motion.div
                    style={{ x: auraX, opacity: auraOpacity }}
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0"
                />

                {/* 3. Refined Side Branding */}
                <div className="absolute left-10 md:left-12 top-1/2 -translate-y-1/2 z-50 pointer-events-none origin-left -rotate-90">
                    <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-6">
                        <span className="text-secondary/30 font-black text-[9px] uppercase tracking-[1.5em] whitespace-nowrap">Technical Evolution & Heritage</span>
                        <div className="w-24 h-[1px] bg-secondary/10" />
                    </motion.div>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow flex items-center relative z-10">

                    {/* 4. Editorial Heading */}
                    <motion.div
                        style={{ opacity: headerOpacity }}
                        className="absolute top-24 left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none"
                    >
                        <div className="relative inline-block">
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-6xl md:text-8xl font-black text-secondary leading-none tracking-tighter uppercase"
                            >
                                OUR <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(1, 22, 39, 0.3)' }}>JOURNEY</span>
                            </motion.h2>
                            <div className="absolute -top-4 -right-8 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(243,112,33,0.5)]" />
                        </div>
                        <p className="mt-8 text-secondary/40 font-bold uppercase tracking-[0.8em] text-[10px] flex items-center justify-center gap-6">
                            <span className="w-12 h-[1px] bg-primary/20" />
                            Engineering the Future Since 2003
                            <span className="w-12 h-[1px] bg-primary/20" />
                        </p>
                    </motion.div>

                    <motion.div
                        style={{ x }}
                        className="flex gap-48 px-[35vw] items-center h-full pt-32"
                    >
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: index % 2 === 0 ? 40 : -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative flex-shrink-0 w-[500px] ${index % 2 === 0 ? 'mt-32' : '-mt-32'}`}
                            >
                                <div className="absolute -top-16 left-0 pointer-events-none flex items-center gap-3">
                                    <span className="text-primary font-black text-xs tracking-widest italic">MS_0{index + 1}</span>
                                    <div className="w-8 h-[1px] bg-primary/30" />
                                </div>

                                <motion.div
                                    whileHover={{ y: index % 2 === 0 ? -15 : 15, scale: 1.02 }}
                                    className="relative z-10 group"
                                >
                                    <div className="relative p-14 bg-white/80 backdrop-blur-xl border border-secondary/5 rounded-[4.5rem] shadow-[0_30px_100px_rgba(1,22,39,0.03)] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                        <div className="relative">
                                            <div className="flex items-center gap-8 mb-12">
                                                <div className="w-24 h-24 bg-white shadow-2xl rounded-[2.5rem] border border-secondary/5 flex items-center justify-center group-hover:bg-primary transition-all duration-700 group-hover:-rotate-6 group-hover:scale-110">
                                                    <item.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="text-primary font-black text-3xl tracking-tighter block mb-1">{item.year}</span>
                                                    <span className="text-secondary/20 font-black text-[9px] uppercase tracking-widest">Global Asset Path</span>
                                                </div>
                                            </div>

                                            <div className="mb-10">
                                                <h3 className="text-5xl font-black text-secondary leading-[1.05] tracking-tighter mb-4 group-hover:text-primary transition-colors duration-500">
                                                    {item.title}
                                                </h3>
                                                <div className="w-12 h-1.5 bg-primary/10 rounded-full group-hover:w-full group-hover:bg-primary/20 transition-all duration-1000" />
                                            </div>

                                            <p className="text-secondary/60 leading-relaxed text-xl font-medium pr-4 italic">
                                                "{item.description}"
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`absolute ${index % 2 === 0 ? '-top-32' : '-bottom-32'} left-1/2 -translate-x-1/2 w-px h-32 bg-secondary/10 border-l border-dashed border-secondary/20`} />
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Finale Removed as per user request */}
                    </motion.div>
                </div>

                {/* Technical Navigation */}
                <div className="px-24 mb-16 relative z-50">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(243,112,33,0.5)]" />
                                    <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] italic">System Active</span>
                                </div>
                                <span className="text-secondary/40 font-bold uppercase text-xs tracking-tighter">Tracking Heritage Stream</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-secondary/20 font-black text-[10px] uppercase tracking-[0.5em] mb-2">Velocity Index</span>
                                <span className="text-secondary/40 font-black text-lg tracking-tighter italic">Linear Path 01.0A</span>
                            </div>
                        </div>
                        <div className="relative h-[1px] w-full bg-secondary/5">
                            <motion.div
                                style={{ scaleX: scrollYProgress }}
                                className="absolute inset-0 bg-primary origin-left shadow-[0_0_15px_rgba(243,112,33,0.4)] h-[2px]"
                            />
                            <div className="absolute inset-0 flex justify-between px-1 pointer-events-none">
                                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="w-[1px] h-3 bg-secondary/10 -mt-1" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
