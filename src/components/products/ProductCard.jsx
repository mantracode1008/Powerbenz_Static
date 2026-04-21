import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full"
        >
            <div className="relative h-52 overflow-hidden bg-black/30">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest">
                    {product.type}
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-black text-white mb-1 leading-tight">{product.name}</h3>
                <p className="text-white/40 text-xs mb-5 leading-relaxed">{product.description}</p>

                <div className="space-y-2 mb-6 text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40 uppercase tracking-widest font-bold">Grade</span>
                        <span className="font-black text-primary">{product.grade}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40 uppercase tracking-widest font-bold">Purity</span>
                        <span className="font-black text-white">{product.purity}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40 uppercase tracking-widest font-bold">Form</span>
                        <span className="font-black text-white">{product.form}</span>
                    </div>
                </div>

                <a
                    href="/contact"
                    className="w-full bg-primary/10 border border-primary/40 text-primary text-center py-3 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300 mt-auto"
                >
                    Request Quote
                </a>
            </div>
        </motion.div>
    );
};

export default ProductCard;

