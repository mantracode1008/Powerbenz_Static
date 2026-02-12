import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Search, DollarSign, RefreshCw } from 'lucide-react';

const services = [
    {
        icon: RefreshCw,
        title: 'Scrap Buying & Selling',
        desc: 'Procurement and supply of bulk ferrous and non-ferrous scrap for domestic and international markets.',
    },
    {
        icon: Search,
        title: 'Quality & Inspection',
        desc: 'Accurate weight and rigorous quality inspection ensuring all materials meet strict industrial standards.',
    },
    {
        icon: DollarSign,
        title: 'Competitive Pricing',
        desc: 'Fair market-linked pricing based on current global scrap rates with transparent and secure payment processing.',
    },
    {
        icon: Truck,
        title: 'Logistics Support',
        desc: 'Reliable local and outstation logistics coordination for smooth material movement and timely delivery.',
    },
];

const ServiceGrid = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 uppercase tracking-wide">Our Services</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-xl border border-gray-100 hover:border-primary transition-colors duration-300 group text-center"
                        >
                            <div className="mb-6 inline-block p-4 rounded-full bg-orange-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
