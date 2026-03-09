import { useEffect } from 'react';

/**
 * Hook to clear console and prevent logging to deter analysis.
 */
const useConsoleProtection = ({
    clearConsole = true,
    disableLogging = true,
    warningMessage = "Warning: This browser session is protected. Access to developer tools is restricted."
} = {}) => {

    useEffect(() => {
        let intervalId;

        if (clearConsole) {
            // Clear immediately
            console.clear();

            // And periodically
            intervalId = setInterval(() => {
                console.clear();
                if (warningMessage) {
                    console.log(
                        `%c${warningMessage}`,
                        "color: red; font-size: 20px; font-weight: bold; text-shadow: 1px 1px 2px black;"
                    );
                }
            }, 2000);
        }

        // Override console methods to no-op
        const originalConsole = {
            log: console.log,
            warn: console.warn,
            error: console.error,
            info: console.info,
            debug: console.debug,
            table: console.table
        };

        if (disableLogging) {
            const noOp = () => { };

            console.log = noOp;
            console.warn = noOp;
            console.error = noOp;
            console.info = noOp;
            console.debug = noOp;
            console.table = noOp;
        }

        return () => {
            if (clearConsole) {
                clearInterval(intervalId);
            }

            // Restore original console methods
            if (disableLogging) {
                console.log = originalConsole.log;
                console.warn = originalConsole.warn;
                console.error = originalConsole.error;
                console.info = originalConsole.info;
                console.debug = originalConsole.debug;
                console.table = originalConsole.table;
            }
        };
    }, [clearConsole, disableLogging, warningMessage]);
};

export default useConsoleProtection;
