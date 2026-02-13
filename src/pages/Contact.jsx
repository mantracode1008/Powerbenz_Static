import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import OfficeLocations from '../components/contact/OfficeLocations';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div>
            {/* Page Header */}
            <section className="relative py-40 bg-secondary overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1950"
                        alt="Contact Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter"
                    >
                        Contact <span className="text-primary">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.3em" }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="text-primary font-bold text-lg uppercase"
                    >
                        Connect with Our Global Network
                    </motion.p>
                </div>
            </section>

            <ContactForm />
            <OfficeLocations />
        </div>
    );
};

export default Contact;
