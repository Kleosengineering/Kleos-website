import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = React.memo(({ activeSection, setActiveSection }) => {
  const navigation = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'industries', label: 'Industries', path: '/industries' },
    { id: 'careers', label: 'Careers', path: '/careers' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const resources = [
    { label: 'About Us', path: '/about' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Use', path: '/terms' },
    { label: 'Sitemap', path: '/sitemap' },
  ];

  const socialLinks = [
    { Icon: Twitter, path: 'https://twitter.com/kleoseng', ariaLabel: 'Follow us on Twitter' },
    { Icon: Linkedin, path: 'https://linkedin.com/company/kleosengineering', ariaLabel: 'Connect with us on LinkedIn' },
    { Icon: Github, path: 'https://github.com/kleosengineering', ariaLabel: 'Check our GitHub' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-300 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
              className="flex items-center space-x-2 mb-4"
              onClick={() => setActiveSection('home')}
              aria-label="Kleos Engineering Homepage"
            >
              <Settings className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Kleos Engineering</span>
            </Link>
            <p className="text-sm text-center md:text-left mb-4">
              Delivering precision engineering solutions for global industries.
            </p>
            <div className="flex flex-col items-center md:items-start space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Engineering St, Tech City, USA 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+11234567890" className="hover:text-blue-400 transition-colors">+1-123-456-7890</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@kleosengineering.com" className="hover:text-blue-400 transition-colors">info@kleosengineering.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400 font-semibold' : 'text-gray-300'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <nav className="flex flex-col space-y-2">
              {resources.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label={item.ariaLabel}
                >
                  <item.Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kleos Engineering. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
});

export default Footer;