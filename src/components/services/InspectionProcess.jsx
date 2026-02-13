import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldAlert, MonitorCheck, Microscope, PackageSearch } from 'lucide-react';

import inspectionHeroImg from '../../assets/services/inspection_process.png';

const steps = [
    { title: 'Visual Audit', desc: 'Material grade verification upon arrival.', icon: Microscope },
    { title: 'Spectro-Scan', desc: 'Precise chemical composition mapping.', icon: MonitorCheck },
    { title: 'Physical Test', desc: 'Density, magnetic, and stress tests.', icon: ShieldAlert },
    { title: 'Certification', desc: 'Final grading and compliance logs.', icon: CheckCircle2 },
    { title: 'Secure Seal', desc: 'Premium wrapping for international transit.', icon: PackageSearch },
];

const InspectionProcess = () => {
    return (
        <section className="py-32 bg-[#F8F9FA] overflow-hidden relative">

            {/* Background Accent: Large Industrial Numbering */}
            <div className="absolute top-0 right-[-10%] text-[40rem] font-black text-black/[0.02] leading-none select-none">
                02
            </div>

            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 items-start">

                    {/* Right: Content First (Desktop) */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-4 px-5 py-2 bg-secondary/5 border border-secondary/10 rounded-full mb-8"
                        >
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-secondary/40">Technical Protocol</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-5xl md:text-8xl font-black text-secondary uppercase tracking-tighter leading-[0.85] mb-12"
                        >
                            Precision <br />
                            <span className="text-primary italic">Auditing</span>
                        </motion.h2>

                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-secondary/5 hover:border-primary/20 hover:shadow-[0_20px_60px_rgba(243,112,33,0.1)] transition-all duration-500 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                                        <step.icon className="text-secondary group-hover:text-white transition-colors" size={24} />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-lg font-black uppercase tracking-tight text-secondary group-hover:text-primary transition-colors">{step.title}</h4>
                                        <p className="text-secondary/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-1 pr-10">{step.desc}</p>
                                    </div>
                                    <div className="h-10 w-px bg-secondary/5 group-hover:bg-primary/20 transition-colors" />
                                    <div className="text-secondary/10 font-bold group-hover:text-primary/20 transition-colors">
                                        0{index + 1}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Left: Original Hero Image - Now with modern framing */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2 w-full order-1 lg:order-2"
                    >
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute top-[-5%] left-[-5%] w-32 h-32 border-t-2 border-l-2 border-primary/20" />
                            <div className="absolute bottom-[-5%] right-[-5%] w-32 h-32 border-b-2 border-r-2 border-primary/20" />

                            <img
                                src={inspectionHeroImg}
                                alt="Inspection"
                                className="relative rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] w-full h-[750px] object-cover"
                            />

                            {/* Floating Card UI */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="absolute bottom-12 -left-12 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-secondary/5 max-w-[320px] hidden xl:block"
                            >
                                <CheckCircle2 className="text-primary mb-4" size={40} />
                                <h5 className="text-2xl font-black text-secondary leading-none mb-2">101% Compliance</h5>
                                <p className="text-secondary/40 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
                                    Every shipment follows international purity standards without exception.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InspectionProcess;
