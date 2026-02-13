import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <img
                            src="/images/our-story.webp"
                            alt="Professionally Managed Operations"
                            className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
                        />

                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">A Professionally Managed Scrap Trading Company</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Powerbenz Industries Pvt Ltd is a professionally managed scrap trading company based in Surat, Gujarat. We specialize in the procurement and supply of ferrous and non-ferrous scrap to domestic and international buyers.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            With over 20 years of industry experience, we have established a strong reputation and goodwill in the market. With a strong focus on quality control, transparent transactions, and timely execution, we aim to build long-term and trustworthy business relationships.
                        </p>
                        <a
                            href="/about"
                            className="text-primary font-bold hover:text-orange-700 inline-flex items-center group"
                        >
                            Learn More About Us
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
