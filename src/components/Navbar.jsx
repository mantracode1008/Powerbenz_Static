import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
];

const Navbar = React.memo(() => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <header>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'h-20 bg-[#011627]/95 backdrop-blur-xl shadow-2xl' : 'h-24 bg-transparent'
                }`}>
                <div className="max-w-[1800px] mx-auto h-full px-4 md:px-12 flex justify-between items-center">

                    {/* Brand Section - Fixed Contrast */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2 md:gap-4 group">
                            <div className="bg-white p-1.5 md:p-2.5 rounded-[1rem] md:rounded-2xl shadow-xl transition-transform group-hover:rotate-12 flex items-center justify-center">
                                <img src={logo} alt="Powerbenz" className="h-6 md:h-8 w-auto" loading="eager" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-none text-white">
                                    POWER<span className="text-primary">BENZ</span>
                                </h1>
                                <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] mt-0.5 md:mt-1 text-white/40">
                                    Industries Pvt Ltd
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation Links - Centered Pill */}
                    <div className="hidden lg:flex items-center bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-white/10 shadow-inner">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-10 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${isActive(link.path) ? 'text-white' : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-primary rounded-full z-0 shadow-lg shadow-primary/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-6">
                        <Link
                            to="/contact"
                            className="hidden md:flex items-center gap-3 bg-white/10 hover:bg-primary border border-white/5 text-white px-8 py-3.5 rounded-xl font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-500 shadow-xl group"
                        >
                            Get A Quote
                            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-4 rounded-xl bg-white/10 text-white border border-white/10"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            className="fixed inset-0 z-50 bg-[#011627] flex flex-col items-center justify-center p-10"
                        >
                            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white/40 hover:text-white">
                                <X size={48} />
                            </button>

                            <div className="flex flex-col items-center space-y-8">
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
                                            className={`text-5xl font-black uppercase tracking-tighter ${isActive(link.path) ? 'text-primary' : 'text-white'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-10 bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl"
                                >
                                    Get A Quote
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
});

export default Navbar;
