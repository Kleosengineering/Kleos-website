import React, { useState } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import Logo from "../../constants/logo-light.png"

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'about', label: 'About' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveSection('home')}>
            <img 
              src={Logo}
              width={200}
            />
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-secondary ${activeSection === item.id ? 'text-primary font-semibold' : 'text-dark-gray'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setActiveSection('contact')}
              className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-green transition-colors shadow-sm"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-dark-gray" /> : <Menu className="h-6 w-6 text-dark-gray" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeSection === item.id ? 'bg-light-gray text-primary' : 'text-dark-gray hover:bg-light-gray'}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setActiveSection('contact');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-accent-green"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
