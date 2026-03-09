# Powerbenz Static Website

Modern static website built with React and Vite.

## 🚀 Performance Optimizations

- **WebP Images**: Converted all hero images to WebP format (86% size reduction)
- **Lazy Loading**: Implemented intersection Observer for progressive image loading
- **Code Splitting**: Separated vendor, router, and animation chunks
- **Tree Shaking**: Removed unused code and dependencies
- **Minification**: Terser for JavaScript, optimized CSS
- **Caching**: Browser caching headers via .htaccess

## 📦 Build Stats

- Build Size: **9.3MB** (down from 69MB)
- Main Bundle: **212KB** (gzipped: 66.88KB)
- Animation Chunk: **122KB** (gzipped: 39.19KB)
- Router Chunk: **45KB** (gzipped: 15.68KB)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚢 Deployment

### Automatic Deployment (GitHub Actions)

Push to `main` branch triggers automatic deployment to Hostinger VPS.

**Required GitHub Secrets:**
- `VPS_HOST`: 145.223.22.204
- `VPS_USERNAME`: root
- `VPS_PASSWORD`: Your VPS password

### Manual Deployment

```bash
npm run build
# Upload dist folder to /var/www/powerbenz-static on VPS
```

## 📁 Project Structure

```
powerbenz-react/
├── public/
│   ├── images/          # WebP optimized images
│   └──.htaccess        # Apache configuration
├── src/
│   ├── components/     # React components
│   │   ├── LazyImage.jsx    # Lazy loading image component
│   │   ├── ErrorBoundary.jsx # Error handling
│   │   └── ...
│   ├── pages/          # Page components
│   └── App.jsx         # Main app component
└── vite.config.js      # Build configuration
```

## 🔧 Key Features

- **React 19** with latest performance improvements
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Error Boundaries** for production error handling
- **SPA routing** with .htaccess fallbacks

## 📊 Core Web Vitals Target

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## 📝 License

Private - Powerbenz