import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
    return (
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
            ></motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <h3 className="text-3xl font-black mb-8 flex items-center uppercase tracking-tighter">
                            <motion.span
                                initial={{ height: 0 }}
                                whileInView={{ height: 32 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-primary w-2 mr-6 block"
                            ></motion.span>
                            Our Vision
                        </h3>
                        <p className="text-gray-300 text-xl leading-relaxed italic font-light">
                            "To be the most trusted global partner in scrap trading and recycling, recognized for our integrity, market intelligence, and commitment to sustainable industrial solutions."
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <h3 className="text-3xl font-black mb-8 flex items-center uppercase tracking-tighter">
                            <motion.span
                                initial={{ height: 0 }}
                                whileInView={{ height: 32 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-primary w-2 mr-6 block"
                            ></motion.span>
                            Our Mission
                        </h3>
                        <p className="text-gray-300 text-xl leading-relaxed italic font-light">
                            "Our mission is to provide professional procurement and supply of high-quality ferrous and non-ferrous scrap. We are dedicated to fostering long-term, trustworthy business relationships through transparent transactions."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
