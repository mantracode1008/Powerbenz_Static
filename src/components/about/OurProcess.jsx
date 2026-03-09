import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, SearchCode, PackageCheck, Truck } from 'lucide-react';

const steps = [
    {
        icon: ShoppingCart,
        title: 'Procurement',
        desc: 'Identifying and acquiring premium grade ferrous and non-ferrous scrap from global networks.',
        color: 'from-orange-500 to-red-500'
    },
    {
        icon: SearchCode,
        title: 'Inspection',
        desc: 'Rigorous technical and manual quality checks to ensure material purity and composition.',
        color: 'from-blue-500 to-indigo-500'
    },
    {
        icon: PackageCheck,
        title: 'Processing',
        desc: 'Advanced sorting and preparation to meet the specific requirements of worldwide smelters.',
        color: 'from-emerald-500 to-teal-500'
    },
    {
        icon: Truck,
        title: 'Logistics',
        desc: 'Seamless global transit utilizing our extensive network of sea and land freight partners.',
        color: 'from-purple-500 to-pink-500'
    }
];

const OurProcess = () => {
    return (
        <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 block"
                    >
                        Operational Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-secondary tracking-tighter uppercase"
                    >
                        OUR <span className="text-transparent" style={{ WebkitTextStroke: '1px #011627' }}>STRATEGIC</span> PROCESS
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-secondary/5 border border-secondary/5 relative z-10 hover:-translate-y-4 transition-all duration-700 h-full">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                    <step.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-secondary mb-4 uppercase tracking-tighter">{step.title}</h3>
                                <p className="text-secondary/60 font-medium leading-relaxed italic">
                                    "{step.desc}"
                                </p>

                                <div className="absolute top-8 right-8 text-secondary/5 font-black text-6xl group-hover:text-primary/10 transition-colors">
                                    0{index + 1}
                                </div>
                            </div>

                            {/* Connectors for Desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-secondary/10 z-0" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProcess;
