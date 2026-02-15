import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ isOpen, setIsOpen, navLinks, isActive }) => {
    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Dark Backdrop / Overlay - Higher z-index and darker */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[1001] bg-[#011627]/90 backdrop-blur-md lg:hidden"
                    />

                    {/* Sidebar Drawer - Solid Background and highest z-index */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-[85%] max-w-[360px] z-[1002] bg-[#011627] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] lg:hidden flex flex-col border-l border-white/5"
                    >
                        {/* Header Area */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Navigation</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-3 bg-white/5 rounded-2xl text-white/60 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex-grow overflow-y-auto py-8 px-6 custom-scrollbar">
                            <nav className="flex flex-col space-y-4">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`group flex items-center justify-between py-5 border-b border-white/5 transition-all ${isActive(link.path) ? 'text-primary' : 'text-white/70 hover:text-white'
                                                }`}
                                        >
                                            <div className="flex flex-col">
                                                <span className="text-3xl font-black uppercase tracking-tighter leading-none mb-1">
                                                    {link.name}
                                                </span>
                                                <span className={`text-[8px] uppercase tracking-widest font-bold opacity-30 group-hover:opacity-60 transition-opacity ${isActive(link.path) ? 'opacity-60' : ''
                                                    }`}>
                                                    {link.path === '/' ? 'Welcome' : `Explore ${link.name}`}
                                                </span>
                                            </div>
                                            <ChevronRight
                                                size={22}
                                                className={`transition-all duration-300 ${isActive(link.path)
                                                        ? 'translate-x-0 opacity-100 text-primary'
                                                        : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                                                    }`}
                                            />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Contact Quick Info */}
                            <div className="mt-12 space-y-6 pt-8 border-t border-white/5">
                                <div className="flex items-center gap-4 text-white/40">
                                    <Phone size={16} className="text-primary" />
                                    <span className="text-[11px] font-bold uppercase tracking-widest">+91 999 888 7777</span>
                                </div>
                                <div className="flex items-center gap-4 text-white/40">
                                    <Mail size={16} className="text-primary" />
                                    <span className="text-[11px] font-bold uppercase tracking-widest">info@powerbenz.com</span>
                                </div>
                            </div>

                            {/* CTA Action */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12"
                            >
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="relative block w-full group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative bg-primary text-white text-center py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                        Get A Quote
                                        <ChevronRight size={18} />
                                    </div>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Footer Info */}
                        <div className="p-8 bg-white/[0.02] border-t border-white/5">
                            <div className="flex flex-col gap-1">
                                <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">
                                    Powerbenz Industries
                                </p>
                                <p className="text-[8px] text-white/20 uppercase tracking-[0.2em]">
                                    Global Recycling Standards © 2026
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
