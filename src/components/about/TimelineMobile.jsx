import React from 'react';
import { motion } from 'framer-motion';
import {
    Factory,
    Globe,
    Warehouse,
    Shield,
    Sparkles
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
        title: 'Strategic Expansion',
        description: 'Expanded our global footprint in the import-export sector while maintaining strictly ethical business practices.',
        icon: Shield
    },
    {
        year: '2024',
        title: 'Celebrating 20+ Years',
        description: 'Continuing our legacy as a trusted partner, bridging the gap between global supply and domestic demand.',
        icon: Sparkles
    },
];

const TimelineMobile = () => {
    return (
        <section className="block md:hidden py-24 bg-[#F8FAFC]">
            <div className="px-6">

                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <div className="relative inline-block mb-4">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-5xl font-black text-secondary uppercase tracking-tighter"
                        >
                            OUR <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(1, 22, 39, 0.3)' }}>JOURNEY</span>
                        </motion.h2>
                        <div className="absolute -top-4 -right-4 w-3 h-3 bg-primary rounded-full" />
                    </div>
                    <p className="text-secondary/40 font-bold uppercase tracking-[0.3em] text-[8px]">
                        Engineering the Future Since 2003
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-secondary/10 border-l border-dashed border-secondary/20" />

                    <div className="space-y-16">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-16"
                            >
                                {/* Circle Icon */}
                                <div className="absolute left-0 top-0 w-12 h-12 bg-white shadow-lg rounded-2xl border border-secondary/5 flex items-center justify-center z-10">
                                    <item.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-primary font-black text-xl italic">{item.year}</span>
                                        <div className="px-2 py-0.5 bg-secondary/5 rounded-md text-[8px] font-black text-secondary/30 uppercase tracking-widest">
                                            Heritage 0{index + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black text-secondary uppercase tracking-tight mb-3 leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-secondary/60 text-sm italic font-medium leading-relaxed pr-4">
                                        "{item.description}"
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Bottom Status */}
                <div className="mt-20 pt-10 border-t border-secondary/5 flex justify-between items-center text-[8px] font-black uppercase tracking-[0.2em] text-secondary/20">
                    <span>System: Active</span>
                    <span className="text-primary">20+ Years Legacy</span>
                </div>
            </div>
        </section>
    );
};

export default TimelineMobile;
