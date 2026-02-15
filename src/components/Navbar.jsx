import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

import MobileMenu from './MobileMenu';

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
            <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'h-20 bg-[#011627]/95 backdrop-blur-xl shadow-2xl' : 'h-24 bg-transparent'
                }`}>
                <div className="max-w-[1800px] mx-auto h-full px-4 md:px-12 flex justify-between items-center">

                    {/* Brand Section - Fixed Contrast */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="bg-white p-1.5 md:p-2 rounded-[1rem] md:rounded-2xl shadow-xl transition-transform group-hover:rotate-12 flex items-center justify-center">
                                <img src={logo} alt="Powerbenz" className="h-8 md:h-10 w-auto" loading="eager" />
                            </div>
                            <div className="flex flex-col items-start justify-center -space-y-0.5">
                                <h1 className="text-lg md:text-2xl font-serif font-bold text-white tracking-wide uppercase leading-none">
                                    POWERBENZ
                                </h1>
                                <span className="text-[7px] md:text-[9px] font-serif text-white/90 tracking-[0.2em] font-medium uppercase">
                                    INDUSTRIES PVT. LTD.
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

                <MobileMenu
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    navLinks={navLinks}
                    isActive={isActive}
                />
            </nav>
        </header>
    );
});


export default Navbar;
