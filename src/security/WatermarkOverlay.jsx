import React from 'react';

/**
 * WatermarkOverlay component to overlay a watermark text on the page.
 * @param {string} text - The watermark text.
 * @param {number} opacity - The opacity of the watermark (0-1).
 */
const WatermarkOverlay = ({ text = 'POWERBENZ CONFIDENTIAL', opacity = 0.05 }) => {
    const style = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Allow clicks to pass through
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: '5vw',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        opacity: opacity,
        userSelect: 'none',
        transform: 'rotate(-45deg)',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><text x="100" y="100" font-family="Arial" font-size="20" fill="gray" transform="rotate(-45 100 100)" text-anchor="middle" opacity="0.1">${text}</text></svg>')`,
    };

    return <div style={style}></div>;
};

export default WatermarkOverlay;
