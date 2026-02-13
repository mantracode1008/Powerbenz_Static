import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.svg';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mb-20">
                    {/* Brand Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1"
                    >
                        <Link to="/" className="bg-white p-4 rounded-xl inline-flex items-center gap-4 mb-8 shadow-2xl border border-gray-100 group">
                            <motion.img
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                                src={logo}
                                alt="Powerbenz Logo"
                                className="h-14 w-auto"
                            />
                            <div className="flex flex-col border-l border-gray-200 pl-4">
                                <span className="text-xl font-black text-secondary tracking-tighter leading-none group-hover:text-primary transition-colors">POWERBENZ</span>
                                <span className="text-[8px] font-bold text-gray-400 tracking-[0.15em] leading-none mt-1 uppercase">Industries Pvt. Ltd.</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-8 leading-relaxed text-base font-light">
                            Leading the industry with precision, integrity, and sustainable solutions.
                            Powering the future through innovation and excellence.
                        </p>
                        <div className="flex space-x-5">
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, backgroundColor: '#f97316' }}
                                    className="bg-white/10 hover:bg-primary p-3 rounded-xl transition-all duration-300"
                                >
                                    <Icon size={20} className="text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:pl-10"
                    >
                        <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-primary transition-all flex items-center group">
                                        <motion.span
                                            whileHover={{ x: 5 }}
                                            className="font-medium"
                                        >
                                            {link.name}
                                        </motion.span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary">Get in Touch</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start text-gray-400 group">
                                <div className="bg-white/5 p-3 rounded-xl mr-5 group-hover:bg-primary transition-colors duration-300">
                                    <MapPin size={24} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm leading-relaxed mt-1">
                                    Plot No.-22, Goverdhan Industrial Estate-3,<br />
                                    Kamrej, Surat, Gujarat - 394150
                                </span>
                            </li>
                            <li className="flex items-center text-gray-400 group">
                                <div className="bg-white/5 p-3 rounded-xl mr-5 group-hover:bg-primary transition-colors duration-300">
                                    <Phone size={24} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <span className="font-bold text-lg">+91 98251 89167</span>
                            </li>
                            <li className="flex items-center text-gray-400 group">
                                <div className="bg-white/5 p-3 rounded-xl mr-5 group-hover:bg-primary transition-colors duration-300">
                                    <Mail size={24} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm">info@powerbenzindustries.com</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-10 flex justify-center items-center text-sm text-gray-500 text-center"
                >
                    <p>&copy; {new Date().getFullYear()} Powerbenz Industries Pvt Ltd. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
