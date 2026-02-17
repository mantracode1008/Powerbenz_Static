import React from 'react';
import useDevToolsProtection from './useDevToolsProtection';
import useContentProtection from './useContentProtection';
import useDomainLock from './useDomainLock';
import useConsoleProtection from './useConsoleProtection';
import WatermarkOverlay from './WatermarkOverlay';

/**
 * SecurityWrapper component to combine all security features.
 * Use this wrapper at the top level of your application (e.g., in App.jsx).
 */
const SecurityWrapper = ({ children, watermarkText }) => {
    // Activate security hooks
    useDevToolsProtection();
    useContentProtection();
    // Commented out domain lock for development flexibility
    // useDomainLock(); 
    useConsoleProtection();

    return (
        <>
            <WatermarkOverlay text={watermarkText} />
            {/* Additional invisible overlay to prevent right-click */}
            <div
                onContextMenu={(e) => e.preventDefault()}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 9998,
                    pointerEvents: 'none', // Allow interactions
                }}
            />
            {children}
        </>
    );
};

export default SecurityWrapper;
