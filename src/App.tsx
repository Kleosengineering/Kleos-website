import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import HowWeWork from './components/HowWeWork';
import Testimonials from './components/Testimonials';
import AboutPage from './components/AboutPage';
import HomeServices from './components/homeSerivces'; // Corrected import name

// Lazy-loaded components
const Services = React.lazy(() => import('./components/Services'));
const Industries = React.lazy(() => import('./components/Industries'));
const Careers = React.lazy(() => import('./components/Careers'));

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="py-24 text-center bg-light-gray dark:bg-gray-800 min-h-screen flex items-center justify-center">
          <div>
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Something Went Wrong</h2>
            <p className="text-xl text-dark-gray dark:text-gray-300 mb-8">Please try refreshing the page or contact support.</p>
            <a
              href="/"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-green transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Return to homepage"
            >
              Return to Home
            </a>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

// Scroll to Top Component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setActiveSection(path || 'home');
  }, [location]);

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Kleos Engineering - Precision Solutions from India</title>
          <meta
            name="description"
            content="India-based engineering startup offering global piping, modeling, and plant design services. Tailored, sustainable solutions with precision."
          />
          <meta name="keywords" content="engineering services India, piping design, 3D modeling, plant engineering, startup India global" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Kleos Engineering - Precision Solutions from India" />
          <meta
            property="og:description"
            content="Emerging leader in engineering innovation, delivering cost-effective, quality solutions worldwide from our India base."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.kleosengineering.com" />
          <meta property="og:image" content="https://www.kleosengineering.com/og-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Kleos Engineering - Precision Solutions from India" />
          <meta
            name="twitter:description"
            content="India's innovative engineering partner for global clients—precision, sustainability, and value."
          />
          <meta name="twitter:image" content="https://www.kleosengineering.com/twitter-image.jpg" />
          <link rel="canonical" href="https://www.kleosengineering.com" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kleos Engineering',
              url: 'https://www.kleosengineering.com',
              logo: 'https://www.kleosengineering.com/logo.png',
              description: 'India-based startup providing precision engineering services globally.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                postalCode: 'Your ZIP',
                streetAddress: 'Your Address',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-Your-Number',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
              sameAs: ['https://www.linkedin.com/company/kleosengineering', 'https://twitter.com/kleoseng'],
            })}
          </script>
        </Helmet>

        <ScrollToTop />
        <Header
          activeSection={activeSection}
          setActiveSection={(section: string) => {
            setActiveSection(section);
            navigate(section === 'home' ? '/' : `/${section}`);
          }}
        />
        <main id="main-content" tabIndex={-1} className="outline-none flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Suspense
                fallback={
                  <div className="py-24 text-center bg-light-gray dark:bg-gray-800">
                    <div className="animate-pulse text-xl text-dark-gray dark:text-gray-300">Loading...</div>
                  </div>
                }
              >
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Hero />
                        <TrustBadges />
                        <HomeServices />

                        <HowWeWork />
                        <Testimonials />
                      </>
                    }
                  />
                  <Route path="/services" element={<Services />} />
                  <Route path="/industries" element={<Industries />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="*" element={<h1 className="py-24 text-center text-4xl font-bold text-primary">404 - Not Found</h1>} />
                </Routes>
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;