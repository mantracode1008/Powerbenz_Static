import { useState, useEffect } from 'react';

/**
 * Hook to lock the application to specific domains.
 * @returns {boolean} isAuthorized - Whether the current domain is allowed.
 */
const useDomainLock = ({
    allowedDomains = [],
    redirectUrl = '',
    enabled = true
} = {}) => {
    const [isAuthorized, setIsAuthorized] = useState(true);

    useEffect(() => {
        if (!enabled || allowedDomains.length === 0) {
            setIsAuthorized(true);
            return;
        }

        const currentHostname = window.location.hostname;

        // Current check is simple, can be expanded to regex if needed
        const isAllowed = allowedDomains.some(domain =>
            currentHostname === domain || currentHostname.endsWith(`.${domain}`) || currentHostname === 'localhost' || currentHostname === '127.0.0.1'
        );

        if (!isAllowed) {
            setIsAuthorized(false);

            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
        } else {
            setIsAuthorized(true);
        }

    }, [allowedDomains, redirectUrl, enabled]);

    return isAuthorized;
};

export default useDomainLock;
