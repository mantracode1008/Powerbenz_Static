import React from 'react';

/**
 * Component to overlay watermarks on images and blur content when inactive.
 * Also handles screenshot deterrence via blurring.
 */
const WatermarkOverlay = ({
    text = "Protected Content",
    showWatermark = true,
    blurOnInactive = true
}) => {
    const [isActive, setIsActive] = React.useState(true);

    React.useEffect(() => {
        if (!blurOnInactive) return;

        const handleFocus = () => setIsActive(true);
        const handleBlur = () => setIsActive(false);
        const handleVisibilityChange = () => {
            setIsActive(!document.hidden);
        };

        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [blurOnInactive]);

    // CSS for watermark pattern
    const watermarkStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.1,
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='100px' width='100px'><text transform='translate(20, 100) rotate(-45)' fill='rgb(150,150,150)' font-size='20'>${encodeURIComponent(text)}</text></svg>")`
    };

    // Blur overlay style
    const blurStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 10000,
        display: isActive ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'all' // Blocks interaction when blurred
    };

    return (
        <>
            {showWatermark && (
                <div style={watermarkStyle} />
            )}

            {blurOnInactive && !isActive && (
                <div style={blurStyle}>
                    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ margin: 0, color: '#333' }}>Content Hidden</h3>
                        <p style={{ margin: '10px 0 0', color: '#666' }}>Return to this window to view content.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default WatermarkOverlay;
