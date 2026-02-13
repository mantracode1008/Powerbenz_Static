import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/services/services_hero.jpg';
import img2 from '../../assets/services/logistics_1.jpg';
import img3 from '../../assets/services/logistics_2.jpg';

const LogisticsGallery = () => {
    const images = [
        { src: img1, title: 'Global Operations' },
        { src: img2, title: 'Efficient Loading' },
        { src: img3, title: 'Hub Logistics' }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 uppercase tracking-wide">Logistics Excellence</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Visualizing our robust shipping and container management network spanning across international borders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <h4 className="text-white font-bold text-lg uppercase tracking-wider">{img.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogisticsGallery;
