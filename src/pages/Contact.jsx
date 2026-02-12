import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import OfficeLocations from '../components/contact/OfficeLocations';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div>
            {/* Page Header */}
            <section className="relative py-32 bg-secondary overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1516383740770-fbcc5cbece03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Contact Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-wider"
                    >
                        Contact
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-bold text-lg uppercase tracking-widest"
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
