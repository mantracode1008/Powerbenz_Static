import React from 'react';
import { History, Globe, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
    { id: 1, icon: History, value: '2003', label: 'Established Since' },
    { id: 2, icon: Globe, value: '35+', label: 'Countries Served' },
    { id: 3, icon: ShieldCheck, value: '100%', label: 'Quality Inspection' },
    { id: 4, icon: Award, value: '20+', label: 'Years Experience' },
];

const Stats = () => {
    return (
        <div className="py-24 relative z-20 mx-4 md:mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="bg-orange-50 p-5 rounded-2xl mb-6">
                            <stat.icon size={40} className="text-primary" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black text-secondary mb-3 tracking-tight">
                            {stat.value.includes('+') ? (
                                <><CountUp end={parseInt(stat.value)} duration={2.5} />+</>
                            ) : stat.value.includes('%') ? (
                                <><CountUp end={parseInt(stat.value)} duration={2.5} />%</>
                            ) : (
                                <CountUp end={parseInt(stat.value)} duration={2.5} separator="" />
                            )}
                        </h3>
                        <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em]">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
