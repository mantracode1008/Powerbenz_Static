# Frontend Content Protection System

This directory contains hooks and components designed to protect the content of the Powerbenz application.

## Components & Hooks

### `useDevToolsProtection`
- **Purpose**: Detects and deters the use of browser Developer Tools.
- **Mechanism**: Listen for common keyboard shortcuts (F12, Ctrl+Shift+I, etc.) and uses a `debugger` loop to freeze execution if DevTools is open.
- **Limitations**: Cannot fully prevent a determined user. The `debugger` loop only works if the user has DevTools open.

### `useContentProtection`
- **Purpose**: Disables common content extraction methods.
- **Mechanism**: Prevents `contextmenu` (right-click), `copy`, `cut`, `dragstart`, and `selectstart` events.
- **Usage**: Automatically enabled by `SecurityWrapper`.

### `useDomainLock`
- **Purpose**: Ensures the application only runs on authorized domains.
- **Mechanism**: Checks `window.location.hostname`.
- **Usage**: Currently commented out in `SecurityWrapper` for development ease. Uncomment for production.

### `useConsoleProtection`
- **Purpose**: Prevents sensitive information from being logged to the console.
- **Mechanism**: Overrides `console` methods with empty functions.

### `WatermarkOverlay`
- **Purpose**: Displays a visual watermark on the screen.
- **Mechanism**: Fixed position `div` with SVG background. Pointer events are disabled to allow clicks to pass through.

### `SecurityWrapper`
- **Purpose**: Central integration point.
- **Usage**: Wrap your main application component with `<SecurityWrapper watermarkText="Your Text">`.

## Browser Limitations

Frontend protection is **not** absolute security.
- **JavaScript Disabling**: If a user disables JavaScript, these protections will not run.
- **Network Inspection**: Users can still inspect network traffic to see API responses.
- **Source Code**: Start-up code is still visible in "View Source".
- **Screenshot/Photos**: Cannot prevent users from taking screenshots or photos of the screen.

These measures are intended to raise the bar for casual scraping and content theft, not to provide military-grade security.
