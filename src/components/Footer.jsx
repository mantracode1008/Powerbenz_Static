import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.svg';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
];

const socialLinks = [
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' }
];

const Footer = React.memo(() => {
    return (
        <footer className="bg-[#011627] text-white pt-20 pb-12 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-[1400px] mx-auto px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">

                    {/* Brand Section - Slimmer spacing */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="group inline-block">
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded-xl shadow-xl">
                                    <img src={logo} alt="Powerbenz" className="h-7 w-auto" loading="lazy" decoding="async" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-black tracking-tighter leading-none">
                                        POWER<span className="text-primary">BENZ</span>
                                    </span>
                                    <span className="text-[7.5px] font-bold text-white/30 tracking-[0.3em] uppercase mt-1">
                                        Industries Pvt Ltd
                                    </span>
                                </div>
                            </div>
                        </Link>

                        <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">
                            Precision logistics and sustainable scrap solutions for the global industrial landscape.
                        </p>

                        <div className="flex gap-2.5">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -3, backgroundColor: 'rgba(243, 112, 33, 1)', borderColor: 'rgba(243, 112, 33, 1)' }}
                                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
                                >
                                    <social.icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Section - Compact list */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/30 hover:text-primary text-[11px] font-bold uppercase tracking-widest transition-all inline-flex items-center group gap-2"
                                    >
                                        <span className="w-0 group-hover:w-3 h-[1.5px] bg-primary transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section - Compact and clean */}
                    <div className="lg:col-span-5">
                        <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-8">Get In Touch</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 group">
                                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <MapPin size={16} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">Corporate Office</p>
                                    <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                                        PLOT NO.E/6, 5-7, MANSI TEXTILE IND-2, Navi Pardi, Kamrej, Surat - 394150
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="flex gap-4 group">
                                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Phone size={16} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">Direct Line</p>
                                        <p className="text-lg font-black text-white">+91 98251 89167</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Mail size={16} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">Email Support</p>
                                        <p className="text-[11px] font-bold text-white group-hover:text-primary transition-colors">info@powerbenz.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Super slim */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.4em]">
                        &copy; {new Date().getFullYear()} Powerbenz Industries Pvt Ltd.
                    </p>
                    <div className="flex gap-8 text-[8px] font-black text-white/10 uppercase tracking-[0.2em]">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
