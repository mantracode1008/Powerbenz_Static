import { useState, useEffect } from 'react';

/**
 * Hook to detect and deter DevTools usage.
 * @returns {boolean} isDevToolsOpen - Whether DevTools is detected (heuristic)
 */
const useDevToolsProtection = ({
    disableShortcuts = true,
    detectDevTools = true,
    debugMode = false
} = {}) => {
    const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

    useEffect(() => {
        // 1. Disable Keyboard Shortcuts
        const handleKeyDown = (e) => {
            if (!disableShortcuts) return;

            // F12
            if (e.key === 'F12' || e.keyCode === 123) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            // Ctrl+Shift+I (Inspect)
            if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            // Ctrl+Shift+J (Console)
            if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            // Ctrl+Shift+C (Inspect Element)
            if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.keyCode === 67)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            // Ctrl+U (View Source)
            if (e.ctrlKey && (e.key === 'u' || e.keyCode === 85)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // 2. Detect DevTools via Window Size Difference
        let intervalId;
        let detect = () => { };

        if (detectDevTools) {
            const threshold = 160;

            detect = () => {
                const widthDiff = window.outerWidth - window.innerWidth > threshold;
                const heightDiff = window.outerHeight - window.innerHeight > threshold;

                if (widthDiff || heightDiff) {
                    setIsDevToolsOpen(true);
                } else {
                    setIsDevToolsOpen(false);
                }
            };

            intervalId = setInterval(detect, 1000);
            window.addEventListener('resize', detect);
        }

        // 3. Debugger Statement Deterrence
        let debuggerInterval;
        if (debugMode) {
            debuggerInterval = setInterval(() => {
                if (isDevToolsOpen) {
                    // eslint-disable-next-line no-eval
                    eval("debugger");
                }
            }, 1000);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (detectDevTools) {
                clearInterval(intervalId);
                window.removeEventListener('resize', detect);
            }
            if (debuggerInterval) clearInterval(debuggerInterval);
        };
    }, [disableShortcuts, detectDevTools, debugMode, isDevToolsOpen]);

    return isDevToolsOpen;
};

export default useDevToolsProtection;
