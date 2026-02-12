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
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 uppercase tracking-wide">Our Core Values</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((val, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="bg-orange-50 w-16 h-16 flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary transition-colors duration-300">
                                <val.icon className="text-primary w-8 h-8 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{val.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
