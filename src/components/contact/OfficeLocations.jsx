import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const offices = [

    {
        id: 2,
        city: 'Global Hub',
        address: 'Mansi Textile Ind-2, Navi Pardi, Kamrej, Surat-394150',
        label: 'Logistics Center'
    },
];

const OfficeLocations = () => {
    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
                    <h2 className="text-3xl font-black text-secondary uppercase tracking-[0.2em]">Our Presence</h2>
                    <div className="h-px flex-grow bg-secondary/10 mx-10 hidden md:block" />
                    <p className="text-secondary/40 text-xs font-bold uppercase tracking-[0.4em]">Integrated Logistics Network</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {offices.map((office, index) => (
                        <motion.div
                            key={office.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="group relative bg-white border border-secondary/5 rounded-3xl p-10 flex items-start gap-8 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:border-primary/20 w-full max-w-2xl"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all">
                                <MapPin size={24} />
                            </div>

                            <div className="flex-grow">
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">{office.label}</p>
                                <h3 className="text-2xl font-black text-secondary uppercase tracking-tighter mb-4">{office.city}</h3>
                                <p className="text-secondary/50 text-sm font-medium leading-relaxed">
                                    {office.address}
                                </p>
                            </div>

                            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight size={20} className="text-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfficeLocations;
