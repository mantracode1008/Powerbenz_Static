import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

function AppContent() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <SmoothScroll />
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
