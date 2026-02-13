import React from 'react';
import { History, Globe, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
    {
        id: 1,
        icon: Globe,
        value: '35',
        label: 'Countries Served',
        desc: 'Global Reach'
    },
    {
        id: 2,
        icon: History,
        value: '22',
        label: 'Years of Excellence',
        desc: 'Established 2003'
    },
    {
        id: 3,
        icon: ShieldCheck,
        value: '100',
        label: 'Quality Assurance',
        desc: 'ISO Certified'
    },
    {
        id: 4,
        icon: Award,
        value: '50',
        label: 'Industry Awards',
        desc: 'Recognized Leader'
    },
];

const Stats = React.memo(() => {
    return (
        <section className="py-24 bg-white relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-8 bg-[#F8FAFC] rounded-3xl border border-secondary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <stat.icon size={64} className="text-secondary group-hover:text-primary transition-colors" />
                            </div>

                            <div className="mb-6">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon size={24} className="text-primary" />
                                </div>
                                <h3 className="text-5xl font-black text-secondary mb-2 tracking-tighter">
                                    <CountUp end={parseInt(stat.value)} duration={2.5} />
                                    <span className="text-primary text-3xl">+</span>
                                </h3>
                                <div className="h-1 w-12 bg-secondary/10 group-hover:w-full group-hover:bg-primary transition-all duration-500 mb-4" />
                            </div>

                            <h4 className="text-xl font-bold text-secondary mb-1">{stat.label}</h4>
                            <p className="text-sm font-medium text-secondary/40 uppercase tracking-wider">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Stats;
