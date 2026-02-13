import React from 'react';
import { motion } from 'framer-motion';

// Import existing assets
import raviImg from '../../assets/leadership/ravi_italiya.jpeg';
import jerambhaiImg from '../../assets/leadership/jerambhai.jpg';
import prakashbhaiImg from '../../assets/leadership/prakashbhai.jpeg';
import deepImg from '../../assets/leadership/deep.png';

// Fallback for missing images
const mayurbhaiImg = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';

const leaders = [
    { name: 'Jerambhai Isamaliya ', role: 'Founder', img: jerambhaiImg },
    { name: 'Prakashbhai Khanpara', role: 'Founder', img: prakashbhaiImg },
    { name: 'Mayurbhai Bokarvadiya', role: 'Managing Director', img: mayurbhaiImg },
    { name: 'Ravi Italiya', role: 'CEO', img: raviImg },
    { name: 'Deep Rasadiya', role: 'Executive Director', img: deepImg },
];

const Leadership = React.memo(() => {
    // Duplicate the leaders array to create a seamless infinite loop
    const displayLeaders = [...leaders, ...leaders, ...leaders];

    return (
        <section className="py-24 bg-white text-secondary overflow-hidden">
            <div className="max-w-[1800px] mx-auto">

                {/* Header */}
                <div className="text-center mb-16 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-secondary/5 rounded-full text-secondary/60 font-black text-[10px] uppercase tracking-[0.3em] mb-4"
                    >
                        Our Visionaries
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl font-black text-secondary uppercase tracking-tighter"
                    >
                        Leadership <span className="text-primary italic">Team</span>
                    </motion.h2>
                </div>

                {/* Auto Sliding Track */}
                <div className="relative flex overflow-hidden group">
                    <motion.div
                        className="flex gap-8 py-8"
                        animate={{
                            x: [0, -1 * (leaders.length * 350 + leaders.length * 32)]
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                            pauseOnHover: true
                        }}
                    >
                        {displayLeaders.map((member, index) => (
                            <div
                                key={index}
                                className="w-[300px] md:w-[350px] flex-shrink-0"
                            >
                                {/* Image Container - Simplified */}
                                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-secondary/5 mb-6 w-full shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                    />
                                    {/* Minimal Tint Overlay */}
                                    <div className="absolute inset-0 bg-primary/10 opacity-40 mix-blend-multiply" />
                                </div>

                                {/* Name & Role */}
                                <div className="text-center">
                                    <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Left/Right Fade Out edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
});

export default Leadership;
