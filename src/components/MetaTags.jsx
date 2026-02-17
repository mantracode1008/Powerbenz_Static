import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaTags = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = "Powerbenz Industries Pvt Ltd | Professional Scrap Trading in Surat";
        let description = "Powerbenz Industries Pvt Ltd is a professionally managed scrap trading company specializing in the procurement and supply of ferrous and non-ferrous metals.";

        switch (path) {
            case '/':
                title = "Powerbenz Industries Pvt Ltd | Professional Scrap Trading in Surat";
                description = "Powerbenz Industries Pvt Ltd is a professionally managed scrap trading company specializing in the procurement and supply of ferrous and non-ferrous metals.";
                break;
            case '/about':
                title = "About Powerbenz | Leading the Scrap Recycling Industry Since 2003";
                description = "Powerbenz Industries has pioneered scrap management for over 20 years. We are a trusted global partner for sustainable metal recycling and supply chain solutions.";
                break;
            case '/services':
                title = "Scrap Trading Services | Buying, Selling & Logistics | Powerbenz";
                description = "Our services include Global Scrap Trading, Industrial Material Inspection, and End-to-End Logistics. We handle Ferrous and Non-Ferrous scrap with expertise.";
                break;
            case '/contact':
                title = "Contact Powerbenz | Get a Quote for Your Scrap";
                description = "Connect with Powerbenz Industries for scrap trading inquiries. Offices in Surat, Dubai, and Singapore. Call us today for the best scrap metal rates.";
                break;
            default:
                break;
        }

        document.title = title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }
    }, [location]);

    return null;
};

export default MetaTags;
