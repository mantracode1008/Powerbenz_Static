import { useEffect } from 'react';

/**
 * Hook to detect and deter DevTools usage.
 * Note: It is impossible to fully prevent DevTools, but we can make it annoying.
 */
const useDevToolsProtection = () => {
    useEffect(() => {
        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        const handleKeyDown = (e) => {
            if (
                e.keyCode === 123 || // F12
                (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
                (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
                (e.ctrlKey && e.keyCode === 85) // Ctrl+U
            ) {
                e.preventDefault();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Context menu disable is handled in useContentProtection.js usually, 
        // but sometimes added here as a backup for DevTools opening via right click.

        // Cleanup function
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        // Debugger loop to freeze the page if devtools is open
        const interval = setInterval(() => {
            const startTime = performance.now();
            // This debugger statement will pause execution if DevTools is open
            debugger;
            const endTime = performance.now();

            // If execution was paused for a significant amount of time, it suggests DevTools was open
            if (endTime - startTime > 100) {
                // Optional: take action, redirect, or clear DOM
                // document.body.innerHTML = 'DevTools Detected';
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
};

export default useDevToolsProtection;
