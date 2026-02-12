import React from 'react';
import { motion } from 'framer-motion';

// Import newly provided JPEG/JPG images and existing assets
import raviImg from '../../assets/leadership/ravi_italiya.jpeg';
import jerambhaiImg from '../../assets/leadership/jerambhai.jpg';
import prakashbhaiImg from '../../assets/leadership/prakashbhai.jpeg';
import mayurbhaiImg from '../../assets/leadership/mayurbhai.png';
import deepImg from '../../assets/leadership/deep.png';

const leaders = [
    {
        id: 1,
        name: 'Ravi Italiya',
        role: 'CEO',
        image: raviImg,
    },
    {
        id: 2,
        name: 'Isamaliya Jerambhai',
        role: 'Founder',
        image: jerambhaiImg,
    },
    {
        id: 3,
        name: 'Khanpara Prakashbhai',
        role: 'Founder',
        image: prakashbhaiImg,
    },
    {
        id: 4,
        name: 'Mayurbhai Bokarvadiya',
        role: 'Managing Director',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        name: 'Deep Rasadiya',
        role: 'Executive Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
];

const Leadership = () => {

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Our Visionaries</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tight">Leadership Team</h3>
                </div>

                <div
                    className="flex overflow-x-auto gap-8 pb-8 no-scrollbar touch-pan-x"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={leader.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="min-w-[300px] md:min-w-[380px] bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            <div className="h-[450px] overflow-hidden relative bg-white">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <h4 className="text-2xl font-bold">{leader.name}</h4>
                                        <p className="text-primary font-bold uppercase text-sm tracking-widest">{leader.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export default Leadership;
