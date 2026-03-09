import React from 'react';
import { History, Globe, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
    {
        id: 1,
        icon: History,
        value: '22',
        suffix: '+',
        label: 'Years of Leadership',
        desc: 'Industry Pioneers Since 2003'
    },
    {
        id: 2,
        icon: Zap,
        value: '500',
        suffix: 'k+',
        label: 'Metric Tons Recycled',
        desc: 'Annual Capacity'
    },
    {
        id: 4,
        icon: Globe,
        value: '50',
        suffix: '+',
        label: 'Global Partners',
        desc: 'Trusted Network'
    },
];

const Stats = React.memo(() => {
    return (
        <section className="py-24 bg-[#F8FAFC] relative z-20 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white p-10 rounded-[3rem] shadow-xl shadow-secondary/5 border border-secondary/5 hover:border-primary/30 transition-all duration-700 hover:-translate-y-4 group"
                        >
                            <div className="relative mb-10 overflow-hidden">
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                    <stat.icon size={28} />
                                </div>
                                <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    <stat.icon size={120} />
                                </div>
                            </div>

                            <h3 className="text-6xl font-black text-secondary mb-3 tracking-tighter leading-none">
                                <CountUp end={parseInt(stat.value)} duration={3} enableScrollSpy />
                                <span className="text-primary">{stat.suffix}</span>
                            </h3>

                            <div className="w-8 h-1 bg-primary/20 mb-6 group-hover:w-16 transition-all duration-500" />

                            <h4 className="text-xl font-black text-secondary uppercase tracking-tight mb-2">{stat.label}</h4>
                            <p className="text-xs font-bold text-secondary/40 uppercase tracking-widest">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Stats;

