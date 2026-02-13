import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaTags = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = "Powerbenz Industries | Global Logistics & Scrap Solutions";
        let description = "Powerbenz Industries Pvt Ltd is a global leader in sustainable scrap management and logistics. Connecting markets with precision, integrity, and innovation since 2003.";

        switch (path) {
            case '/':
                title = "Powerbenz Industries | Global Scrap Trading & Industrial Logistics";
                description = "Powerbenz Industries Pvt Ltd is a global leader in sustainable scrap management and logistics. Connecting markets with precision, integrity, and innovation since 2003.";
                break;
            case '/about':
                title = "About Powerbenz Industries | Our Legacy, Vision & Values";
                description = "Learn about the Powerbenz legacy. Established in 2003, we are pioneers in professionally managed scrap trading and global material supply.";
                break;
            case '/services':
                title = "Powerbenz Global Solutions | Scrap Trading, Logistics & Inspection";
                description = "Discover the industrial solutions offered by Powerbenz Industries: precision engineering, global logistics, and material science for a circular economy.";
                break;
            case '/contact':
                title = "Contact Powerbenz Industries | Global Office Locations";
                description = "Get in touch with the Powerbenz team. Reach our global hubs in Surat, Dubai, and Singapore for all industrial and recycling queries.";
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
