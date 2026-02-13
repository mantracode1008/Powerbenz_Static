import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Ship, Zap, Shield } from 'lucide-react';
// Import the local image directly so Vite processes it correctly (hashing, path resolution)
import globalReachImg from '../../assets/services/global_reach.png';

const GlobalReach = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-4">Strategic Logistics</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-none mb-8">Global Reach,<br /><span className="text-primary">Local Expertise</span></h3>
                            <p className="text-gray-500 text-xl leading-relaxed font-light mb-12">
                                Through our strategically located hubs in Surat, Dubai, and Singapore, we maintain a robust supply chain that spans the globe.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: '35+ Countries', icon: Globe },
                                { title: '3 Int. Hubs', icon: Zap },
                                { title: 'Fast Delivery', icon: Ship },
                                { title: 'Secure Trade', icon: Shield }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-secondary transition-colors duration-500"
                                >
                                    <item.icon size={28} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-lg font-black text-secondary group-hover:text-white transition-colors uppercase tracking-tight">{item.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] transform rotate-3 -z-10 blur-2xl opacity-50"></div>
                        <img
                            src={globalReachImg}
                            alt="Global Reach Network"
                            className="rounded-[3rem] shadow-2xl w-full h-[600px] object-cover border-[16px] border-white"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
