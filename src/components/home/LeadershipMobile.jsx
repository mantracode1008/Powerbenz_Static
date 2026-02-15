import React from 'react';
import { motion } from 'framer-motion';

// Import existing assets
import raviImg from '../../assets/leadership/ravi_italiya.jpeg';
import jerambhaiImg from '../../assets/leadership/jerambhai.jpg';
import prakashbhaiImg from '../../assets/leadership/prakashbhai.jpeg';
import deepImg from '../../assets/leadership/deep.png';

// Fallback for missing images
// Fallback for missing images
// const mayurbhaiImg = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';

const leaders = [
    { name: 'Jerambhai Isamaliya ', role: 'Founder', img: jerambhaiImg },
    { name: 'Prakashbhai Khanpara', role: 'Founder', img: prakashbhaiImg },
    { name: 'Mayurbhai Bokarvadiya', role: 'Managing Director', img: null },
    { name: 'Ravi Italiya', role: 'CEO', img: raviImg },
    { name: 'Deep Rasadiya', role: 'Executive Director', img: deepImg },
];

const LeadershipMobile = React.memo(() => {
    return (
        <section className="block md:hidden py-16 bg-white text-secondary">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
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
                        className="text-4xl font-black text-secondary uppercase tracking-tighter"
                    >
                        Leadership <span className="text-primary italic">Team</span>
                    </motion.h2>
                </div>

                {/* Mobile Grid Layout - Better for visibility on small screens */}
                <div className="grid grid-cols-1 gap-12">
                    {leaders.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-secondary/5 mb-6 w-full max-w-[280px] shadow-lg">
                                {member.img ? (
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover filter grayscale"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-secondary/5 text-secondary/20">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">No Image</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-primary/10 opacity-30 mix-blend-multiply" />
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default LeadershipMobile;
