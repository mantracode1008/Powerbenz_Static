import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0 flex items-center"
                    >
                        <Link to="/" className="flex items-center gap-3 group">
                            <motion.img
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.6 }}
                                src={logo}
                                alt="Powerbenz Logo"
                                className="h-14 w-auto"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-secondary tracking-tighter leading-none group-hover:text-primary transition-colors duration-300 uppercase">POWERBENZ</span>
                                <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] leading-none mt-1 uppercase">Industries Pvt. Ltd.</span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1 items-center">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Link
                                    to={link.path}
                                    className={`relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 group ${isActive(link.path)
                                        ? 'text-primary'
                                        : 'text-secondary hover:text-primary'
                                        }`}
                                >
                                    {link.name}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: isActive(link.path) ? 1 : 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Link
                                to="/contact"
                                className="ml-4 bg-primary text-white px-6 py-2.5 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-orange-600 transition-all transform hover:scale-110 shadow-lg"
                            >
                                Get a Quote
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-secondary hover:text-primary transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 top-24 z-50 bg-white md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-4xl font-black uppercase tracking-tighter ${isActive(link.path) ? 'text-primary' : 'text-secondary'}`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-primary text-white px-10 py-4 rounded-md font-black text-lg uppercase tracking-widest shadow-xl"
                                >
                                    Get a Quote
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
