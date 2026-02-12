import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                    {product.type}
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-secondary mb-4">{product.name}</h3>

                <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between border-b border-gray-50 pb-1">
                        <span className="text-gray-500">Grade</span>
                        <span className="font-semibold text-secondary">{product.grade}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-50 pb-1">
                        <span className="text-gray-500">Purity</span>
                        <span className="font-semibold text-secondary">{product.purity}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-50 pb-1">
                        <span className="text-gray-500">Form</span>
                        <span className="font-semibold text-secondary">{product.form}</span>
                    </div>
                </div>

                <a
                    href="/contact"
                    className="w-full bg-primary text-white text-center py-2.5 rounded font-bold text-sm tracking-wide uppercase hover:bg-orange-600 transition-colors mt-auto"
                >
                    Request Quote
                </a>
            </div>
        </motion.div>
    );
};

export default ProductCard;
