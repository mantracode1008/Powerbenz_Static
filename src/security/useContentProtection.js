import { useEffect } from 'react';

/**
 * Hook to disable standard content interaction like copy/paste and right-click.
 * @param {string} mode - "strict" for full lock, "loose" for simpler restrictions.
 */
const useContentProtection = (mode = 'strict') => {
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        const handleCopy = (e) => {
            e.preventDefault();
            // Optionally copy a copyright notice instead
            // e.clipboardData.setData('text/plain', 'Copied content is protected.');
        };

        const handleCut = (e) => {
            e.preventDefault();
        };

        const handleDragStart = (e) => {
            e.preventDefault();
        };

        const handleSelectStart = (e) => {
            e.preventDefault();
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('copy', handleCopy);
        document.addEventListener('cut', handleCut);
        document.addEventListener('dragstart', handleDragStart);
        document.addEventListener('selectstart', handleSelectStart);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('copy', handleCopy);
            document.removeEventListener('cut', handleCut);
            document.removeEventListener('dragstart', handleDragStart);
            document.removeEventListener('selectstart', handleSelectStart);
        };
    }, [mode]);
};

export default useContentProtection;
