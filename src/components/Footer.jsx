import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="bg-white p-4 rounded-xl inline-flex items-center gap-4 mb-6 shadow-lg border border-gray-100">
                            <img src={logo} alt="Powerbenz Logo" className="h-14 w-auto" />
                            <div className="flex flex-col border-l border-gray-200 pl-4">
                                <span className="text-xl font-black text-secondary tracking-tighter leading-none">POWERBENZ</span>
                                <span className="text-[8px] font-bold text-gray-400 tracking-[0.15em] leading-none mt-1 uppercase">Industries Pvt. Ltd.</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Leading the industry with precision, integrity, and sustainable solutions.
                            Powering the future through innovation and excellence.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                                    <span className="mr-2">›</span> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                                    <span className="mr-2">›</span> About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                                    <span className="mr-2">›</span> Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                                    <span className="mr-2">›</span> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                                    <span className="mr-2">›</span> Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                                    <span className="mr-2">›</span> Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                                    <span className="mr-2">›</span> Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                                    <span className="mr-2">›</span> Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-400">
                                <MapPin size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                                <span>
                                    Plot No.-22, Goverdhan Industrial Estate-3,<br />
                                    Kamrej, Surat, Gujarat - 394150
                                </span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Phone size={20} className="mr-3 text-primary flex-shrink-0" />
                                <span>+91 98251 89167</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Mail size={20} className="mr-3 text-primary flex-shrink-0" />
                                <span>info@powerbenzindustries.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Powerbenz Industries Pvt Ltd. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Developed by Antigravity</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
