import React from 'react';
import useDevToolsProtection from './useDevToolsProtection';
import useContentProtection from './useContentProtection';
import useDomainLock from './useDomainLock';
import useConsoleProtection from './useConsoleProtection';
import WatermarkOverlay from './WatermarkOverlay';

/**
 * Main Security Wrapper Component.
 * Wraps the entire application to provide comprehensive frontend protection.
 */
const SecurityWrapper = ({
    children,
    watermarkText = 'Powerbenz',
    config = {
        devTools: {
            enabled: true,
            disableShortcuts: true,
            detectDevTools: true,
            debugMode: false,
        },
        content: {
            enabled: true,
            disableRightClick: true,
            disableSelection: true,
            disableCopy: true,
            allowedClass: 'allow-copy'
        },
        domain: {
            enabled: false,
            allowedDomains: ['localhost', '127.0.0.1', 'powerbenz.com'],
            redirectUrl: 'https://google.com'
        },
        console: {
            enabled: true,
            clearConsole: true,
            disableLogging: true
        },
        watermark: {
            enabled: true,
            blurOnInactive: true
        }
    }
}) => {

    // 1. DevTools Protection
    const isDevToolsOpen = useDevToolsProtection({
        disableShortcuts: config.devTools.enabled && config.devTools.disableShortcuts,
        detectDevTools: config.devTools.enabled && config.devTools.detectDevTools,
        debugMode: config.devTools.enabled && config.devTools.debugMode
    });

    // 2. Content Protection
    useContentProtection({
        disableRightClick: config.content.enabled && config.content.disableRightClick,
        disableSelection: config.content.enabled && config.content.disableSelection,
        disableCopy: config.content.enabled && config.content.disableCopy,
        allowedClass: config.content.allowedClass
    });

    // 3. Domain Lock
    const isAuthorized = useDomainLock({
        enabled: config.domain.enabled,
        allowedDomains: config.domain.allowedDomains,
        redirectUrl: config.domain.redirectUrl
    });

    // 4. Console Protection
    useConsoleProtection({
        clearConsole: config.console.enabled && config.console.clearConsole,
        disableLogging: config.console.enabled && config.console.disableLogging
    });

    // Unauthorized Domain
    if (!isAuthorized) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8d7da',
                color: '#721c24',
                fontFamily: 'sans-serif'
            }}>
                <h1>Unauthorized Domain</h1>
                <p>This application is not authorized to run on this domain.</p>
            </div>
        );
    }

    // DevTools Detected (Overlay)
    if (isDevToolsOpen) {
        return (
            <div style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: '#000',
                color: '#fff',
                zIndex: 99999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem'
            }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Security Alert</h1>
                <p>Developer tools manipulation detected.</p>
                <p>Please close DevTools to continue using this application.</p>
            </div>
        );
    }

    return (
        <>
            <WatermarkOverlay
                showWatermark={config.watermark.enabled}
                text={watermarkText}
                blurOnInactive={config.watermark.enabled && config.watermark.blurOnInactive}
            />
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
                    pointerEvents: 'none',
                }}
            />
            {children}
        </>
    );
};

export default SecurityWrapper;
