import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Ship, Zap, Shield, ArrowUpRight } from 'lucide-react';
import globalReachImg from '../../assets/services/global_reach.png';

const GlobalReach = () => {
    return (
        <section className="py-32 bg-[#011627] relative overflow-hidden">
            {/* Background Data Stream Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Content Section */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Live Supply Chain</span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-10">
                                Trade <br />
                                <span className="text-primary italic">Intelligence</span>
                            </h2>

                            <p className="text-white/50 text-xl leading-relaxed font-light mb-16 max-w-lg">
                                Through hubs in <span className="text-white font-bold">Surat</span>, <span className="text-white font-bold">Dubai</span>, and <span className="text-white font-bold">Singapore</span>, we bridge the gap between global supply and industrial demand.
                            </p>
                        </motion.div>

                        {/* Network Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: '35+ Countries', icon: Globe, val: 'NETWORK' },
                                { title: '3 Int. Hubs', icon: Zap, val: 'NODES' },
                                { title: 'Global Transit', icon: Ship, val: 'LOGISTICS' },
                                { title: 'Verified Trade', icon: Shield, val: 'PROTOCOL' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 group hover:bg-primary transition-all duration-500 overflow-hidden relative"
                                >
                                    <div className="absolute top-4 right-4 text-white/10 group-hover:text-white/20 transition-colors">
                                        <ArrowUpRight size={32} />
                                    </div>
                                    <item.icon size={24} className="text-primary mb-4 group-hover:text-white transition-colors" />
                                    <h4 className="text-xl font-black text-white transition-colors uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-[10px] font-black text-white/20 group-hover:text-white/40 tracking-[0.3em] mt-2 uppercase">{item.val}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section: COLOR RESTORED */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="relative order-1 lg:order-2"
                    >
                        {/* Orbital Ring Effects */}
                        <div className="absolute inset-0 border border-white/5 rounded-full scale-125 animate-spin-slow opacity-20" />
                        <div className="absolute inset-0 border border-primary/10 rounded-full scale-110 animate-reverse-spin opacity-20" />

                        <div className="relative rounded-[3.5rem] overflow-hidden group shadow-2xl">
                            <img
                                src={globalReachImg}
                                alt="Global Reach Network"
                                className="w-full h-[700px] object-cover transition-all duration-1000 group-hover:scale-105"
                            />
                            {/* Technical Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#011627] via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                                <div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-2">Network Status</p>
                                    <h5 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">Fully Operational</h5>
                                </div>
                                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white text-[10px] font-black group-hover:bg-primary group-hover:border-primary transition-all duration-500 cursor-pointer">
                                    HUB
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes reverse-spin {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-reverse-spin {
                    animation: reverse-spin 25s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default GlobalReach;
