import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
    'Material verification and preliminary sorting on arrival.',
    'Advanced spectroscopy for precise chemical composition analysis.',
    'Physical property testing including density and magnetic checks.',
    'Final grading and certification by our quality control experts.',
    'Packaging and preparation for secure international transit.',
];

const InspectionProcess = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1544411047-c491e34a24e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="Container Inspection Logistics"
                            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 uppercase tracking-tight">Our Inspection Process</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We leave nothing to chance. Our comprehensive 5-step inspection protocol ensures that every batch of material meets the rigorous specifications required by our global clients.
                        </p>

                        <ul className="space-y-4">
                            {steps.map((step, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className="text-primary mr-4 mt-1 flex-shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{step}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 p-6 bg-orange-50 rounded-lg border-l-4 border-primary">
                            <p className="text-secondary font-bold italic">
                                "Our reputation is built on the precision of our testing. We guarantee 100% compliance with international standards."
                            </p>
                            <p className="text-sm text-gray-500 mt-2 font-bold uppercase">— Quality Assurance Team</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InspectionProcess;
