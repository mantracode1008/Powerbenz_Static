import { useEffect } from 'react';

/**
 * Hook to prevent content copying, context menu, and text selection.
 */
const useContentProtection = ({
    disableRightClick = true,
    disableSelection = true,
    disableCopy = true,
    allowedClass = 'allow-copy' // Elements with this class will bypass protection
} = {}) => {

    useEffect(() => {
        // Helper to check if element or its parent has the allowed class
        const isAllowed = (target) => {
            if (!target) return false;
            if (target.classList && target.classList.contains(allowedClass)) return true;
            if (target.parentElement) return isAllowed(target.parentElement);
            return false;
        };

        // 1. Disable Right Click (Context Menu)
        const handleContextMenu = (e) => {
            if (disableRightClick && !isAllowed(e.target)) {
                e.preventDefault();
                return false;
            }
        };

        // 2. Disable Selection (via CSS injection for global coverage)
        if (disableSelection) {
            const style = document.createElement('style');
            style.id = 'content-protection-style';
            style.innerHTML = `
        *:not(.${allowedClass}):not(.${allowedClass} *) {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
        }
      `;
            document.head.appendChild(style);
        }

        // 3. Disable Copy/Cut/Paste Shortcuts
        const handleCopy = (e) => {
            if (disableCopy && !isAllowed(e.target)) {
                e.preventDefault();
                return false;
            }
        };

        // 4. Disable Dragging (Images/Links)
        const handleDragStart = (e) => {
            if (!isAllowed(e.target)) {
                e.preventDefault();
                return false;
            }
        }

        if (disableRightClick) {
            document.addEventListener('contextmenu', handleContextMenu);
        }

        if (disableCopy) {
            document.addEventListener('copy', handleCopy);
            document.addEventListener('cut', handleCopy);
            document.addEventListener('paste', handleCopy);
        }

        document.addEventListener('dragstart', handleDragStart);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('copy', handleCopy);
            document.removeEventListener('cut', handleCopy);
            document.removeEventListener('paste', handleCopy);
            document.removeEventListener('dragstart', handleDragStart);

            const style = document.getElementById('content-protection-style');
            if (style) {
                document.head.removeChild(style);
            }
        };
    }, [disableRightClick, disableSelection, disableCopy, allowedClass]);
};

export default useContentProtection;
