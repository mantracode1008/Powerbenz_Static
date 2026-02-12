import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const offices = [
    {
        id: 1,
        city: 'Surat Office',
        country: 'India',
        address: 'Plot No.-22, Goverdhan Industrial Estate-3, Nr. Pipodra Canal, Kamrej, Navi Paradi, Surat, Gujarat-394150 IN.',
        phone: '+91 98251 89167',
        email: 'info@powerbenzindustries.com',
        mapUrl: 'https://maps.app.goo.gl/YmtBjnX6rw9cSM5i8?g_st=ac',
    },
    {
        id: 2,
        city: 'Surat Warehouse',
        country: 'India',
        address: 'PLOT NO.E/6, 5, 6, 7, MANSI TEXTILE INDUSTRIES-2, Nr-Pipodara Canal, Navi Pardi, Kamrej, Surat, Gujarat-394150.',
        phone: '+91 98251 89167',
        email: 'info@powerbenzindustries.com',
        mapUrl: 'https://maps.app.goo.gl/YmtBjnX6rw9cSM5i8?g_st=ac',
    },
];

const OfficeLocations = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 uppercase tracking-wide">Our Locations</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {offices.map((office, index) => (
                        <motion.div
                            key={office.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-orange-100 p-2 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-secondary">{office.city}</h3>
                                    <p className="text-primary text-xs font-bold uppercase tracking-widest">{office.country}</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                                    <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="text-gray-400 flex-shrink-0" size={18} />
                                    <p className="text-gray-600 text-sm">{office.phone}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="text-gray-400 flex-shrink-0" size={18} />
                                    <p className="text-gray-600 text-sm">{office.email}</p>
                                </div>
                            </div>

                            <a
                                href={office.mapUrl}
                                className="text-primary font-bold text-sm uppercase tracking-wider hover:underline flex items-center gap-2"
                            >
                                View on Google Maps →
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfficeLocations;
