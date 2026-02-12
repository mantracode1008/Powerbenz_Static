import React from 'react';
import { motion } from 'framer-motion';

const GlobalReach = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Our Network</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6 tracking-tight">Global Reach, Local Expertise</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Through our strategically located hubs in Surat, Dubai, and Singapore, we maintain a robust supply chain that spans the globe. Our logistics experts navigate complex international regulations to ensure your materials arrive on time, every time.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <span className="text-4xl font-bold text-primary block mb-1">35+</span>
                                <span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Countries Reached</span>
                            </div>
                            <div>
                                <span className="text-4xl font-bold text-primary block mb-1">3</span>
                                <span className="text-gray-500 uppercase text-xs font-bold tracking-wider">International Hubs</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <img
                            src="/images/global-reach.png"
                            alt="Global Reach Network"
                            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-secondary/10 rounded-2xl pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
