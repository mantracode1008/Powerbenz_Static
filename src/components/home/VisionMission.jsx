import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
    return (
        <section className="py-20 bg-secondary text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="bg-primary w-2 h-8 mr-4 block"></span>
                            Our Vision
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To be the most trusted global partner in scrap trading and recycling, recognized for our integrity, market intelligence, and commitment to sustainable industrial solutions.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="bg-primary w-2 h-8 mr-4 block"></span>
                            Our Mission
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our mission is to provide professional procurement and supply of high-quality ferrous and non-ferrous scrap. We are dedicated to fostering long-term, trustworthy business relationships through transparent transactions and timely execution.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
