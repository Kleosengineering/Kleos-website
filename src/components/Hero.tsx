import React from 'react';
import { ArrowRight, Globe2, Users, Shield, CheckCircle2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = React.memo(() => {
  const features = [
    { Icon: Globe2, title: 'Global Reach', desc: 'Innovative solutions serving clients worldwide.' },
    { Icon: Users, title: 'Expert Team', desc: 'Skilled professionals focused on engineering excellence.' },
    { Icon: Shield, title: 'Quality Commitment', desc: 'Delivers sustainable, reliable engineering outcomes.' },
    { Icon: CheckCircle2, title: 'Innovative Solutions', desc: 'Empowering modern challenges with technology.' },
  ];

  const heroImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'; // High-quality engineering image

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[90vh] bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/60 dark:from-blue-800/80 dark:to-gray-900/60" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <span className="text-base font-medium text-white">Engineering Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Building the Future with Precision Engineering
            </h1>
            <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
              Innovating globally with sustainable, high-impact solutions for tomorrow’s industrial challenges.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                aria-label="Get Started with Kleos Engineering"
              >
                Get Started
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </div>
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                  className="flex items-start space-x-3 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-sm"
                >
                  <feature.Icon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-gray-300 leading-tight">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image with Asymmetric Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl transform -rotate-3">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Engineering innovation visualization"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg shadow-md flex items-center space-x-3">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-300">Quality</div>
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400">Committed</div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-blue-600/90 dark:bg-blue-500/90 text-white px-4 py-2 rounded-lg shadow-md">
              <div className="text-xl font-bold">Proven</div>
              <div className="text-xs">Track Record</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full shadow-md flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="text-xs font-medium">Client Focus</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg text-center space-y-4">
          <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
          <p className="text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
            To be a trusted global leader in engineering innovation, delivering precise, sustainable solutions with unwavering integrity.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
});

export default Hero;