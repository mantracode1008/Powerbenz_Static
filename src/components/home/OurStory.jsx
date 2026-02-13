import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurStory = React.memo(() => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

    return (
        <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-[1px] bg-primary" />
                        <span className="text-secondary/60 font-black tracking-[0.3em] uppercase text-xs">Who We Are</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tighter mb-8 uppercase">
                        Professionally <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px #011627' }}>Managed Scrap</span> <br />
                        <span className="text-primary italic">Trading.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-secondary/70 leading-relaxed mb-8 max-w-xl font-medium">
                        Powerbenz Industries Pvt Ltd is a leader in sustainable recycling, specializing in the precision procurement and supply of ferrous and non-ferrous scrap to global markets.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {['Established 20+ Years Ago', 'Global Procurement Network', '100% Transparent Transactions'].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-secondary font-bold text-sm uppercase tracking-wide">
                                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <CheckCircle2 size={14} />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Link to="/about" className="group inline-flex items-center gap-3 text-secondary font-black text-sm uppercase tracking-widest hover:text-primary transition-colors">
                        Discover Our Full Story
                        <span className="w-8 h-[1px] bg-secondary group-hover:bg-primary transition-colors" />
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Right: Image Frame */}
                <div className="relative h-[400px] md:h-[600px] w-full rounded-[2rem] overflow-hidden group">
                    <motion.div style={{ y }} className="absolute inset-0 bg-secondary/5 z-10 mix-blend-multiply transition-opacity group-hover:opacity-0" />

                    <motion.img
                        style={{ scale: imageScale }}
                        src="/images/our-story.webp"
                        alt="Scrap Metal Processing"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs z-20"
                    >
                        <div className="text-4xl font-black text-primary mb-1">20+</div>
                        <div className="text-xs font-bold uppercase tracking-wider text-secondary/60">Years of Experience</div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
});

export default OurStory;
