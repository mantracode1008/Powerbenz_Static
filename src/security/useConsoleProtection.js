import { useEffect } from 'react';

/**
 * Hook to clear the console and replace logging functions.
 * @param {boolean} enable - Whether to enable console protection.
 */
const useConsoleProtection = (enable = true) => {
    useEffect(() => {
        if (!enable) return;

        // Save original console methods if needed for internal logging
        const originalConsole = { ...console };

        // Override console methods to be no-ops
        console.log = () => { };
        console.info = () => { };
        console.warn = () => { };
        console.error = () => { };
        console.debug = () => { };
        console.table = () => { };
        console.trace = () => { };

        // Restore original console methods on cleanup
        return () => {
            console.log = originalConsole.log;
            console.info = originalConsole.info;
            console.warn = originalConsole.warn;
            console.error = originalConsole.error;
            console.debug = originalConsole.debug;
            console.table = originalConsole.table;
            console.trace = originalConsole.trace;
        };
    }, [enable]);
};

export default useConsoleProtection;
