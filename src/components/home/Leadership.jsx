import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import existing assets
import raviImg from '../../assets/leadership/ravi_italiya.jpeg';
import jerambhaiImg from '../../assets/leadership/jerambhai.jpg';
import prakashbhaiImg from '../../assets/leadership/prakashbhai.jpeg';
import deepImg from '../../assets/leadership/deep.png';

// Fallback for missing images
const mayurbhaiImg = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';

const leaders = [
    {
        id: 1,
        name: 'Isamaliya Jerambhai',
        role: 'Founder',
        image: jerambhaiImg,
    },
    {
        id: 2,
        name: 'Khanpara Prakashbhai',
        role: 'Founder',
        image: prakashbhaiImg,
    },
    {
        id: 3,
        name: 'Mayurbhai Bokarvadiya',
        role: 'Managing Director',
        image: mayurbhaiImg,
    },
    {
        id: 4,
        name: 'Ravi Italiya',
        role: 'CEO',
        image: raviImg,
    },
    {
        id: 5,
        name: 'Deep Rasadiya',
        role: 'Executive Director',
        image: deepImg,
    },
];

const Leadership = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % leaders.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const visibleLeaders = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleLeaders.push(leaders[(currentIndex + i) % leaders.length]);
    }

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Our Visionaries</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tight">Leadership Team</h3>
                </div>

                <div className="relative h-[480px]">
                    <div className="flex justify-center gap-8 px-4">
                        <AnimatePresence mode='popLayout'>
                            {visibleLeaders.map((leader, index) => (
                                <motion.div
                                    key={`${leader.id}-${(currentIndex + index) % leaders.length}`}
                                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px -15px rgba(249, 115, 22, 0.3)"
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="w-[280px] md:w-[320px] bg-white rounded-3xl overflow-hidden group border border-gray-100 relative shadow-lg"
                                >
                                    <div className="h-[400px] overflow-hidden relative">
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.8 }}
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-secondary via-secondary/80 to-transparent opacity-100 transition-opacity duration-500" />

                                        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end">
                                            <h4 className="text-xl md:text-2xl font-black text-white leading-[1.1] uppercase tracking-tighter mb-3 group-hover:text-primary transition-colors duration-300">
                                                {leader.name.split(' ').map((word, i) => (
                                                    <span key={i} className="block">{word}</span>
                                                ))}
                                            </h4>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-[3px] bg-primary"></div>
                                                <p className="text-primary font-black uppercase text-[11px] md:text-[13px] tracking-[0.25em] shadow-sm">
                                                    {leader.role}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 border-[8px] border-white/0 group-hover:border-white/10 transition-all duration-500 pointer-events-none rounded-3xl" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Leadership;
