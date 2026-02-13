import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/services/services_hero.jpg';
import img2 from '../../assets/services/logistics_1.jpg';
import img3 from '../../assets/services/logistics_2.jpg';

const LogisticsGallery = () => {
    const images = [
        { src: img1, title: 'Regional Deployment', tag: 'OPS-24' },
        { src: img2, title: 'Precision Management', tag: 'HUB-09' },
        { src: img3, title: 'Strategic Logistics', tag: 'LOG-41' }
    ];

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-8">

                {/* Header with Blueprint Accent */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-12 md:mb-16">
                    <div className="flex-grow">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-block px-3 py-1 bg-secondary/5 rounded-full text-secondary/40 font-black text-[8px] uppercase tracking-[0.4em] mb-3"
                        >
                            Visual Report
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter leading-none"
                        >
                            Logistics <br />
                            <span className="text-primary italic">In Action</span>
                        </motion.h2>
                    </div>
                    <div className="w-full md:w-1/3">
                        <p className="text-secondary/40 text-[10px] md:text-xs font-medium leading-relaxed border-l-2 border-primary/20 pl-6">
                            Visual documentation of our international shipping protocols, container management, and hub deployment metrics.
                        </p>
                    </div>
                </div>

                {/* Gallery Grid: EVEN MORE COMPACT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative flex flex-col"
                        >
                            {/* The Frame */}
                            <div className="relative h-[240px] rounded-[1.5rem] overflow-hidden bg-secondary shadow-lg transition-all duration-700 hover:shadow-primary/20">

                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                                />

                                {/* Static Top Left Label */}
                                <div className="absolute top-5 left-5 flex items-center gap-2">
                                    <div className="w-1 h-1 bg-primary rounded-full" />
                                    <span className="text-[8px] font-black text-white/60 tracking-[0.2em] uppercase">{img.tag}</span>
                                </div>

                                {/* Content: Revealed on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                                    <div className="overflow-hidden">
                                        <motion.h4
                                            className="text-lg md:text-xl font-black text-white uppercase tracking-tighter leading-tight translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                        >
                                            {img.title}
                                        </motion.h4>
                                    </div>
                                    <div className="h-0.5 w-0 bg-primary mt-3 group-hover:w-full transition-all duration-700" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Footer: Industrial Label */}
                <div className="mt-16 pt-8 border-t border-secondary/5 flex justify-between items-center text-[8px] font-black tracking-[0.5em] text-secondary/10 uppercase">
                    <span>Powerbenz Logistics Division</span>
                    <span>Verified Operations // 2026</span>
                </div>
            </div>
        </section>
    );
};

export default LogisticsGallery;
