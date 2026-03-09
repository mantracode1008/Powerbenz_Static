# Frontend Security System

This module provides a realistic "deterrence-first" security layer for the frontend application.

> **Note**: Frontend security cannot fully prevent determined attackers with technical knowledge. All sensitive data must be secured on the backend.

## Features

### 1. DevTools Deterrence (`useDevToolsProtection`)
- **Key Blocking**: Intercepts `F12`, `Ctrl+Shift+I`, `Ctrl+Shift+J`, `Ctrl+U`.
- **Size Detection**: Detects if window size changes significantly (indicative of docked DevTools).
- **Reaction**: displays a full-screen "Security Alert" overlay if DevTools is detected.

### 2. Content Protection (`useContentProtection`)
- **Anti-Right-Click**: Disables context menu globally.
- **Anti-Copy**: Disables text selection and copy/cut/paste shortcuts.
- **Image Protection**: Prevents dragging images.
- **Exclusion**: Add class `.allow-copy` to any element to bypass these protections.

### 3. Domain Locking (`useDomainLock`)
- **Validation**: Checks `window.location.hostname` against an allowed list.
- **Reaction**: Replaces app content with "Unauthorized Domain" message if validation fails.
- **Configuration**: Set `enabled: true` and add your domains in `SecurityWrapper.jsx`.

### 4. Console Protection (`useConsoleProtection`)
- **Clearing**: Periodically clears the console.
- **No-Op**: Overrides `console.log`, `warn`, `error` with empty functions to hide app logs.

### 5. Visual Watermarking (`WatermarkOverlay`)
- **Watermark**: SVG overlay preventing direct image saving.
- **Blur**: Blurs the application when the window loses focus or becomes invisible (preventing screenshots via task switcher).

## Integration

The system is implemented via `SecurityWrapper` which wraps the main application.

```javascript
// App.jsx
import SecurityWrapper from './security/SecurityWrapper';

function App() {
  return (
    <SecurityWrapper>
      <AppContent />
    </SecurityWrapper>
  );
}
```

## Configuration

You can toggle features in `src/security/SecurityWrapper.jsx`:

```javascript
const SecurityWrapper = ({ 
    config = {
        devTools: { enabled: true, ... },
        content: { enabled: true, ... },
        domain: { enabled: false, allowedDomains: [...] }, // Enable this for production!
        // ...
    }
}) => { ... }
```

## Browser Limitations

- **JavaScript Disabling**: If a user disables JS, protections will not load (add a `<noscript>` tag for fallback).
- **Network Inspection**: Requests can still be inspected via external proxies (Wireshark, etc.).
- **Screenshot Tools**: OS-level screenshot tools cannot be blocked by the browser.
