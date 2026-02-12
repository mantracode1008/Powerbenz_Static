import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
    { year: '2003', title: 'The Founding', description: 'Powerbenz Industries was established with a clear vision to professionalize the scrap trading and recycling industry in Gujarat.' },
    { year: '2008', title: 'Global Procurement Hub', description: 'Expanded operations to international markets, securing key partnerships for non-ferrous scrap procurement worldwide.' },
    { year: '2015', title: 'Warehouse Expansion', description: 'Inaugurated our dedicated high-capacity warehouse facility in Surat to manage bulk ferrous and non-ferrous materials.' },
    { year: '2020', title: 'Eco-Innovation Award', description: 'Recognized for our contributions to sustainable recycling practices and zero-waste industrial initiatives.' },
    { year: '2024', title: 'Celebrating 20+ Years', description: 'Continuing our legacy as a trusted partner, bridging the gap between global supply and domestic demand with integrity.' },
];

const Timeline = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Our Journey</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tight">History & Growth</h3>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

                    {milestones.map((item, index) => (
                        <div key={index} className="relative mb-16 last:mb-0">
                            {/* Dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-[0_0_10px_rgba(243,112,33,0.3)] z-10 -translate-x-1/2 top-2"
                            />

                            <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Spacer for desktop alternating layout */}
                                <div className="hidden md:block md:w-1/2" />

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}
                                >
                                    <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-bold text-sm mb-4">
                                        {item.year}
                                    </div>
                                    <h4 className="text-2xl font-bold text-secondary mb-3">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed text-lg max-w-md mx-auto md:mx-0">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
