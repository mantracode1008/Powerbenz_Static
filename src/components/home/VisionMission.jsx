import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Lightbulb, HeartHandshake } from 'lucide-react';

const corePillars = [
    {
        icon: Target,
        title: "Vision",
        desc: "To be the global benchmark in sustainable scrap trading, redefining material value through innovation and integrity."
    },
    {
        icon: Lightbulb,
        title: "Mission",
        desc: "Delivering premium quality recycled materials with zero compromise, fostering a circular economy that benefits both industry and planet."
    },
    {
        icon: HeartHandshake,
        title: "Values",
        desc: "Transparency in every deal. Precision in every weight. Trust in every partnership. We build legacies, not just transactions."
    }
];

const VisionMission = React.memo(() => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

    return (
        <section ref={ref} className="py-16 md:py-32 bg-[#011627] relative overflow-hidden text-white">

            {/* Background Texture - Optimized */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            {/* Glowing Orbs - Reduced blur for much better performance */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[60px] pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-block px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-6"
                    >
                        Our Core Purpose
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter"
                    >
                        Driven by <span className="text-transparent" style={{ WebkitTextStroke: '1px #F37021' }}>Purpose.</span> <br />
                        Fueled by <span className="text-primary italic">Passion.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {corePillars.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative p-10 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                                <item.icon size={32} className="text-white" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide">{item.title}</h3>
                            <p className="text-white/60 leading-relaxed text-lg font-medium group-hover:text-white/80 transition-colors">
                                {item.desc}
                            </p>

                            <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default VisionMission;
