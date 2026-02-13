import React from 'react';
import { motion } from 'framer-motion';

// Import local service images
import metalImg from '../../assets/services/metal_scrap.png';
import copperImg from '../../assets/services/copper_scrap.png';
import scrapImg from '../../assets/services/scrap_buying.png';
import logisticsImg from '../../assets/services/logistics_support.png';
import inspectionImg from '../../assets/services/quality_inspection.png';
import pricingImg from '../../assets/services/pricing_finance.png';

const services = [
    { title: 'Metal Scrap', desc: 'Comprehensive handling of HMS, shredded, and structural steel.', image: metalImg, code: 'PB-MS' },
    { title: 'Copper Scrap', desc: 'Recycling for copper wire, pipes, and high-purity alloys.', image: copperImg, code: 'PB-CS' },
    { title: 'Bulk Solutions', desc: 'Secure procurement and supply chains for bulk markets.', image: scrapImg, code: 'PB-BS' },
    { title: 'Quality Pulse', desc: 'Rigorous weight and purity checks via 5-step protocols.', image: inspectionImg, code: 'PB-QP' },
    { title: 'Fair Pricing', desc: 'Market-linked pricing strategy with global transparency.', image: pricingImg, code: 'PB-FP' },
    { title: 'Transit Tech', desc: 'Precision logistics with end-to-end tracking and safety.', image: logisticsImg, code: 'PB-TT' },
];

const ServiceGrid = () => {
    return (
        <section className="py-32 bg-[#020D16] relative overflow-hidden">
            {/* Background Texture: Grid & Blueprint Patterns */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="max-w-[1500px] mx-auto px-8 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-4 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 shadow-2xl shadow-primary/5"
                        >
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Industrial Services</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]"
                        >
                            Engineered <br />
                            <span className="text-secondary italic opacity-20 outline-text-hero">Reliability</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-right hidden md:block"
                    >
                        <div className="text-[100px] font-black text-white/5 leading-none">01</div>
                        <p className="text-white/30 font-bold uppercase tracking-widest text-xs mt-[-20px] pr-2">Core Competencies</p>
                    </motion.div>
                </div>

                {/* The "Blueprint" Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative flex flex-col"
                        >
                            {/* Card Wrapper */}
                            <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-700 hover:border-primary/30">

                                {/* Image Layer - COLOR RESTORED */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020D16] via-[#020D16]/40 to-transparent" />
                                </div>

                                {/* Top Badge: Serial Code */}
                                <div className="absolute top-10 left-10 text-white/40 font-black text-4xl tracking-tighter group-hover:text-primary transition-colors">
                                    {service.code}
                                </div>

                                {/* Content Layer */}
                                <div className="absolute inset-0 p-12 flex flex-col justify-end z-10">
                                    <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <div className="h-0.5 w-12 bg-primary group-hover:w-full transition-all duration-700 mb-6" />
                                    <p className="text-white/80 text-sm leading-relaxed font-medium">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute -inset-10 bg-primary/5 blur-[80px] rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 opacity-30" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .outline-text-hero {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.4);
                    color: transparent;
                }
            `}</style>
        </section>
    );
};

export default ServiceGrid;
