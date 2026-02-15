import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isFocused, setIsFocused] = useState(null);

    return (
        <section className="py-20 bg-white relative">
            <div className="max-w-[1200px] mx-auto px-8">

                {/* Scaled down "Power-Benz Master Unit" Form */}
                <div className="relative bg-[#020D16] rounded-[3.5rem] p-10 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden">

                    {/* Background Decorative Blur - Softer */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

                        {/* Sidebar: Status & Contact (4 Columns) - Tightened */}
                        <div className="lg:col-span-4 space-y-8 border-r border-white/5 pr-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-1.5 w-1.5 bg-primary rounded-full animate-ping" />
                                    <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Operational</span>
                                </div>
                                <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                                    Direct <br />
                                    <span className="text-primary italic">Inquiry</span>
                                </h3>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { icon: Mail, label: 'Email Support', val: 'info@powerbenz.com' },
                                    { icon: Phone, label: 'Direct Line', val: '+91 98251 89167' },
                                    { icon: Clock, label: 'Uptime', val: '09:00 - 19:00 IST' }
                                ].map((item, i) => (
                                    <div key={i} className="group flex items-start gap-4 transition-transform hover:translate-x-1">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <item.icon size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] mb-0.5">{item.label}</p>
                                            <p className="text-base font-bold text-white tracking-tight">{item.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 mt-8 border-t border-white/5">
                                <div className="flex items-center gap-3 text-white/10">
                                    <CheckCircle size={14} className="text-primary/40" />
                                    <span className="text-[8px] font-black uppercase tracking-[0.3em]">Secure Data Channel</span>
                                </div>
                            </div>
                        </div>

                        {/* The Engine: Interactive Form (8 Columns) - Compact inputs */}
                        <div className="lg:col-span-8">
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="relative">
                                        <p className={`absolute -top-5 left-0 text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${isFocused === 'name' ? 'text-primary' : 'text-white/40'}`}>01 // Name</p>
                                        <input
                                            type="text"
                                            onFocus={() => setIsFocused('name')}
                                            onBlur={() => setIsFocused(null)}
                                            className="w-full bg-transparent border-b border-white/5 py-3 text-lg font-bold text-white outline-none focus:border-primary transition-colors placeholder:text-white/40 h-12"
                                            placeholder="Your Name"
                                        />
                                        <div className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-700 ${isFocused === 'name' ? 'w-full' : 'w-0'}`} />
                                    </div>
                                    <div className="relative">
                                        <p className={`absolute -top-5 left-0 text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${isFocused === 'company' ? 'text-primary' : 'text-white/40'}`}>02 // Company</p>
                                        <input
                                            type="text"
                                            onFocus={() => setIsFocused('company')}
                                            onBlur={() => setIsFocused(null)}
                                            className="w-full bg-transparent border-b border-white/5 py-3 text-lg font-bold text-white outline-none focus:border-primary transition-colors placeholder:text-white/40 h-12"
                                            placeholder="Company Name"
                                        />
                                        <div className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-700 ${isFocused === 'company' ? 'w-full' : 'w-0'}`} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="relative">
                                        <p className={`absolute -top-5 left-0 text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${isFocused === 'email' ? 'text-primary' : 'text-white/40'}`}>03 // Email</p>
                                        <input
                                            type="email"
                                            onFocus={() => setIsFocused('email')}
                                            onBlur={() => setIsFocused(null)}
                                            className="w-full bg-transparent border-b border-white/5 py-3 text-lg font-bold text-white outline-none focus:border-primary transition-colors placeholder:text-white/40 h-12"
                                            placeholder="John@doe.com"
                                        />
                                        <div className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-700 ${isFocused === 'email' ? 'w-full' : 'w-0'}`} />
                                    </div>
                                    <div className="relative">
                                        <p className={`absolute -top-5 left-0 text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${isFocused === 'phone' ? 'text-primary' : 'text-white/40'}`}>04 // Support</p>
                                        <input
                                            type="tel"
                                            onFocus={() => setIsFocused('phone')}
                                            onBlur={() => setIsFocused(null)}
                                            className="w-full bg-transparent border-b border-white/5 py-3 text-lg font-bold text-white outline-none focus:border-primary transition-colors placeholder:text-white/40 h-12"
                                            placeholder="+91 --- --- ----"
                                        />
                                        <div className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-700 ${isFocused === 'phone' ? 'w-full' : 'w-0'}`} />
                                    </div>
                                </div>

                                <div className="relative">
                                    <p className={`absolute -top-5 left-0 text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${isFocused === 'message' ? 'text-primary' : 'text-white/40'}`}>05 // Message</p>
                                    <textarea
                                        rows="3"
                                        onFocus={() => setIsFocused('message')}
                                        onBlur={() => setIsFocused(null)}
                                        className="w-full bg-transparent border-b border-white/5 py-3 text-lg font-bold text-white outline-none focus:border-primary transition-colors placeholder:text-white/40 resize-none min-h-[100px]"
                                        placeholder="How can we help?"
                                    />
                                    <div className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-700 ${isFocused === 'message' ? 'w-full' : 'w-0'}`} />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="group w-full h-16 bg-primary rounded-xl flex items-center justify-center gap-4 overflow-hidden relative shadow-lg shadow-primary/20"
                                >
                                    <span className="relative z-10 flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.4em]">
                                        Submit Request <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
