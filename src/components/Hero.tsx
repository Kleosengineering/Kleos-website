import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBackground from '../../constants/home-bg.jpg';

const Hero: React.FC = React.memo(() => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: 'linear-gradient(135deg, hsl(189 100% 14%), hsl(189 100% 35%))' }}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ background: 'linear-gradient(135deg, hsl(189 100% 14% / 0.4), hsl(189 100% 35% / 0.5))' }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl animate-pulse"
          style={{ background: 'hsl(189 100% 44% / 0.2)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ background: 'hsl(189 100% 35% / 0.2)' }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="flex flex-col w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div
              className="inline-flex items-center space-x-3 px-5 py-2 rounded-full border"
              style={{
                background: 'hsl(0 0% 100%  / 0.1)',
                borderColor: 'hsl(0 0% 100% / 0.2)',
                backdropFilter: 'blur(12px)'
              }}
            >
              <span
                className="text-base font-medium"
                style={{ color: 'hsl(0 0% 100%)' }}
              >
                Engineering Excellence
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-6xl max-w-5xl font-bold leading-tight tracking-tight"
              style={{ color: 'hsl(0 0% 100%)' }}
            >
              Building the Future with Precision Engineering
            </h1>
            <p
              className="text-xl max-w-2xl leading-relaxed"
              style={{ color: 'hsl(0 0% 86%)' }}
            >
              Innovating globally with sustainable, high-impact solutions for tomorrow's industrial challenges.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 ease-in-out"
                style={{
                  background: 'hsl(0 0% 100%)',
                  color: 'hsl(189 100% 14%)',
                  boxShadow: '0 20px 25px -5px hsl(189 100% 14% / 0.2)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'hsl(0 0% 100% / 0.9)';
                  e.currentTarget.style.boxShadow = '0 0 40px hsl(189 100% 44% / 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'hsl(0 0% 100%)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px hsl(189 100% 14% / 0.2)';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = 'none';
                  e.currentTarget.style.boxShadow = '0 0 0 2px hsl(0 0% 100%), 0 0 0 4px hsl(189 100% 14%)';
                }}
                aria-label="Get Started with Kleos Engineering"
              >
                Get Started
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 font-semibold rounded-full border transition-all duration-300 ease-in-out"
                style={{
                  background: 'hsl(0 0% 100% / 0.1)',
                  color: 'hsl(0 0% 100%)',
                  borderColor: 'hsl(0 0% 100% / 0.2)',
                  backdropFilter: 'blur(12px)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'hsl(0 0% 100% / 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'hsl(0 0% 100% / 0.1)';
                }}
                aria-label="Learn More About Our Services"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span
            className="text-sm"
            style={{ color: 'hsl(0 0% 100% / 0.6)' }}
          >
            Scroll to explore
          </span>
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: 'hsl(0 0% 100% / 0.3)' }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 rounded-full mt-2"
              style={{ background: 'hsl(0 0% 100% / 0.6)' }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
});


export default Hero;