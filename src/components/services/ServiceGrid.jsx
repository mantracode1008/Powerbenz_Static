import React from 'react';
import { motion } from 'framer-motion';

// Import local service images (all from local now)
import metalImg from '../../assets/services/metal_scrap.png';
import copperImg from '../../assets/services/copper_scrap.png';
import scrapImg from '../../assets/services/scrap_buying.png';
import logisticsImg from '../../assets/services/logistics_support.png';
import inspectionImg from '../../assets/services/quality_inspection.png';
import pricingImg from '../../assets/services/pricing_finance.png';

const services = [
    {
        title: 'Metal Scrap',
        desc: 'Comprehensive handling of all ferrous metal scrap grades including HMS, shredded, and structural steel.',
        image: metalImg
    },
    {
        title: 'Copper Scrap',
        desc: 'Premium recycling services for copper wire, pipes, and alloys with competitive market rates.',
        image: copperImg
    },
    {
        title: 'Scrap Buying & Selling',
        desc: 'Procurement and supply of bulk ferrous and non-ferrous scrap for domestic and international markets.',
        image: scrapImg
    },
    {
        title: 'Quality & Inspection',
        desc: 'Accurate weight and rigorous quality inspection ensuring all materials meet strict industrial standards.',
        image: inspectionImg
    },
    {
        title: 'Competitive Pricing',
        desc: 'Fair market-linked pricing based on current global scrap rates with transparent and secure payment processing.',
        image: pricingImg
    },
    {
        title: 'Logistics Support',
        desc: 'Reliable local and outstation logistics coordination for smooth material movement and timely delivery.',
        image: logisticsImg
    },
];

const ServiceGrid = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 uppercase tracking-wide">Our Expertise</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Delivering excellence in scrap metal recycling, materials handling, and global logistics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full border border-gray-100"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <motion.img
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 1.5 }}
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-10 relative flex-grow flex flex-col justify-between">
                                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-700" />
                                <div>
                                    <h3 className="text-2xl font-black text-secondary mb-4 group-hover:text-primary transition-colors duration-300 uppercase tracking-tighter">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-base font-light">
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <motion.span
                                        className="inline-flex items-center text-primary font-black text-xs uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300 cursor-pointer"
                                    >
                                        Explore Solutions
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
