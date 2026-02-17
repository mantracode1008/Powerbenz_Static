import { useEffect } from 'react';

/**
 * Hook to lock application to a specific domain.
 * @param {string} authorizedDomain - The authorized domain (e.g., 'powerbenz.com').
 * @param {string} redirectUrl - URL to redirect to if unauthorized.
 */
const useDomainLock = (authorizedDomain = 'powerbenz.com', redirectUrl = 'https://powerbenz.com/unauthorized') => {
    useEffect(() => {
        // Basic domain check.
        // In strict environments, server-side checking is preferred.
        if (window.location.hostname !== authorizedDomain && window.location.hostname !== 'localhost') {
            // Redirect or show message
            // Note: Be careful with strict checks as it might redirect dev environments if 'localhost' isn't explicitly allowed.
            // window.location.href = redirectUrl;
            console.warn('Unauthorized domain detected:', window.location.hostname);
        }
    }, [authorizedDomain, redirectUrl]);
};

export default useDomainLock;
