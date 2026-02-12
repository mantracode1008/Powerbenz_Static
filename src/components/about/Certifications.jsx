import React from 'react';
import { motion } from 'framer-motion';

import { ShieldCheck, Leaf, Globe2, Recycle } from 'lucide-react';

const certs = [
    {
        name: 'ISO 9001:2015',
        icon: ShieldCheck,
        color: 'text-blue-600',
        brand: 'ISO',
        description: 'Quality Management Systems'
    },
    {
        name: 'ISO 14001:2015',
        icon: Leaf,
        color: 'text-green-600',
        brand: 'ISO',
        description: 'Environmental Management'
    },
    {
        name: 'BIR Member',
        icon: Recycle,
        color: 'text-orange-600',
        brand: 'BIR',
        description: 'Bureau of International Recycling'
    },
    {
        name: 'MRAI Member',
        icon: Globe2,
        color: 'text-navy-600',
        brand: 'MRAI',
        description: 'Material Recycling Association of India'
    },
];

const Certifications = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16 uppercase tracking-wide">Accreditations & Certifications</h2>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center w-full sm:w-[220px] text-center"
                        >
                            <div className="w-full aspect-square relative bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center p-6 group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Logo Background Decoration */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full -z-0 opacity-50 group-hover:bg-primary/10 transition-colors" />

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className={`${cert.color} mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                                        <cert.icon size={48} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-xl font-black text-secondary tracking-tighter mb-1">{cert.brand}</span>
                                    <div className="h-0.5 w-8 bg-primary/30 group-hover:w-12 transition-all duration-500" />
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>

                            <div className="mt-6">
                                <h3 className="font-bold text-secondary text-sm uppercase tracking-wider">{cert.name}</h3>
                                <p className="text-gray-500 text-xs mt-2 leading-relaxed px-4">{cert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
