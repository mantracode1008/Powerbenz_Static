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
            enabled: false, // Default off to prevent accidental locking during dev
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
            text: 'Protected Content - Powerbenz',
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

    // Render Logic

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
                showWatermark={false}
                text={config.watermark.text}
                blurOnInactive={config.watermark.enabled && config.watermark.blurOnInactive}
            />
            {children}
        </>
    );
};

export default SecurityWrapper;
