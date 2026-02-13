import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, Shield, Users, Truck, Target } from 'lucide-react';

const values = [
    { icon: DollarSign, title: 'Fair Pricing', desc: 'We provide competitive and fair market pricing linked to real-time global scrap value.' },
    { icon: Target, title: 'Accurate Weight', desc: 'State-of-the-art weighing systems ensuring 100% precision and trust in every transaction.' },
    { icon: Shield, title: 'Quality Inspection', desc: 'Rigorous manual and technical inspection to verify material purity and grading.' },
    { icon: Zap, title: 'Bulk Capability', desc: 'Strong financial and operational capacity to handle scrap procurement in massive quantities.' },
    { icon: Truck, title: 'Logistics Support', desc: 'Comprehensive local and outstation logistics support for seamless material movement.' },
    { icon: Users, title: 'Secure Payments', desc: 'Transparent, timely, and highly secure payment processing for all our business partners.' },
];

const CoreValues = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-transparent">
            {/* Soft decorative elements - Adjusted for light theme */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6"
                    >
                        Foundation of Excellence
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black text-secondary leading-tight"
                    >
                        OUR <span className="text-primary italic">CORE</span> VALUES
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {values.map((val, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Number Indicator - Subtle and elegant on light */}
                            <div className="absolute -top-10 -left-6 text-9xl font-black text-secondary/10 group-hover:text-primary/20 transition-colors duration-500 pointer-events-none">
                                0{index + 1}
                            </div>

                            <div className="relative pt-6">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="flex-shrink-0 w-20 h-20 bg-white shadow-xl shadow-secondary/5 rounded-3xl border border-white flex items-center justify-center group-hover:bg-primary transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                        <val.icon className="text-primary w-8 h-8 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-secondary tracking-tight group-hover:text-primary transition-colors">{val.title}</h3>
                                </div>

                                <p className="text-secondary/60 font-medium leading-relaxed text-lg border-l-2 border-primary/10 group-hover:border-primary/30 pl-8 transition-all duration-500">
                                    {val.desc}
                                </p>
                            </div>

                            {/* Hover accent */}
                            <div className="absolute -bottom-6 left-0 w-0 h-[2px] bg-primary/20 group-hover:w-full transition-all duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
