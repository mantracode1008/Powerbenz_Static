import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const hubs = [
    { city: 'Surat', country: 'India', status: 'Operational HQ' },
    { city: 'Dubai', country: 'UAE', status: 'Transit Hub' },
    { city: 'Singapore', country: 'Singapore', status: 'Financial Node' }
];

const GlobalPresence = () => {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6"
                        >
                            OUR <span className="text-primary italic">GLOBAL</span> FOOTPRINT
                        </motion.h2>
                        <p className="text-white/50 text-lg font-medium leading-relaxed">
                            Strategically positioned in key industrial and financial centers, Powerbenz ensures rapid transit and global reliability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">
                        {hubs.map((hub, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm group hover:bg-white/10 transition-all duration-500"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <MapPin className="text-primary" size={20} />
                                    <span className="text-white font-black text-xl tracking-tight">{hub.city}</span>
                                </div>
                                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{hub.country}</div>
                                <div className="text-primary/80 text-[10px] font-black uppercase tracking-widest">{hub.status}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalPresence;
