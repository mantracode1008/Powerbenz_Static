import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        type: 'General Inquiry',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry. We will get back to you soon!');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-3xl mx-auto -mt-32 relative z-20"
        >
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-secondary mb-2">Send an Inquiry</h2>
                <p className="text-gray-500">Fill out the form below and our team will contact you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Company Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                            placeholder="Powerbenz Industries"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Inquiry Type</label>
                    <select
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-orange-200 outline-none transition-all appearance-none bg-white"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                        <option>General Inquiry</option>
                        <option>Request a Quote</option>
                        <option>Material Partnership</option>
                        <option>Logistics Support</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Your Message</label>
                    <textarea
                        rows="4"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg uppercase tracking-widest hover:bg-orange-600 transition-all transform hover:scale-[1.01] shadow-lg flex items-center justify-center gap-3"
                >
                    Send Message <Send size={20} />
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
