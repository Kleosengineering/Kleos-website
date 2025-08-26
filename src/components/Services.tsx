import React, { useState } from 'react';
import { Wrench, Monitor, Cpu, ChevronDown, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const heroImage = 'https://images.unsplash.com/photo-1498050108023-c52474f90263?auto=format&fit=crop&q=80'; // Engineering blueprint background

  const services = [
    {
      id: 'piping',
      icon: Wrench,
      title: 'Piping & Plant Engineering',
      description: 'Comprehensive designs from PFDs to isometrics, optimized for efficiency and compliance.',
      details: [
        'PFDs, P&IDs, line lists, and valve schedules.',
        'Layouts, sections, elevations, and 3D models.',
        'Isometrics with BOMs, weld maps, and spool IDs.',
        'Pipe support design, stress analysis, and MTOs.',
        'Modular skids and utility optimization.',
      ],
      deliverables: [
        'Review-ready PDFs and native CAD files.',
        'Tagged P&IDs with libraries and BOQs.',
        'Detailed isometrics with lengths, welds, and tags.',
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80', // Piping engineering image
      benefits: [
        'Reduced project timelines through optimized designs.',
        'Cost savings with accurate material take-offs.',
        'Enhanced safety with thorough stress analysis.',
      ],
      caseStudy: 'Successfully optimized piping systems for a major oil refinery, reducing material costs by 15% while maintaining compliance with international standards.'
    },
    {
      id: 'modeling',
      icon: Monitor,
      title: 'As-Built 3D Modeling',
      description: 'Precise models from point cloud data for retrofit planning and asset management.',
      details: [
        'Clash detection and gap analysis.',
        'As-built docs for brownfield projects.',
        'Point cloud to 3D conversion.',
        'Retrofit with interference checks.',
      ],
      deliverables: [
        'Native models (e.g., PDMS, Revit).',
        'Clash reports and resolutions.',
        'Full as-built packages.',
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1581093450026-33ee228e75c4?auto=format&fit=crop&q=80', // 3D modeling image
      benefits: [
        'Accurate documentation for legacy systems.',
        'Minimized downtime during retrofits.',
        'Improved asset management with digital twins.',
      ],
      caseStudy: 'Created detailed 3D models for a pharmaceutical plant retrofit, identifying 50+ clashes early and saving over $200K in rework.'
    },
    {
      id: 'technology',
      icon: Cpu,
      title: 'Technology & Tools',
      description: 'Industry-leading software for accuracy, compliance, and innovative solutions.',
      details: [
        'AutoCAD Plant 3D and Smart P&ID.',
        'Caesar II for stress analysis.',
        'Aspen HYSYS for simulations.',
        'Bentley AutoPIPE for piping.',
      ],
      deliverables: [
        'Supporting Digital twins and 3D visualizations.',
        'Integrated project databases.',
        'Custom automation scripts.',
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef0d225d86c1?auto=format&fit=crop&q=80', // Technology tools image
      benefits: [
        'Seamless integration across project phases.',
        'Real-time collaboration with cloud-based tools.',
        'Custom solutions for unique project needs.',
      ],
      caseStudy: 'Implemented advanced simulation tools for a chemical processing facility, optimizing energy efficiency by 20%.'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroImage})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">Transformative Engineering Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Harnessing cutting-edge technology to deliver precise, sustainable solutions for complex industrial challenges.
          </p>
        </motion.div>
      </section>

      {/* Services Sections with Asymmetric Layout */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? 'lg:grid-cols-[1fr_1.5fr]' : 'lg:grid-cols-[1.5fr_1fr]'}`}>
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`space-y-6 ${index % 2 === 0 ? 'order-1' : 'order-2 lg:order-1'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                
                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Case Study */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Case Study</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.caseStudy}</p>
                </div>
                
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg"
                  aria-expanded={expandedService === service.id}
                  aria-controls={`${service.id}-details`}
                >
                  {expandedService === service.id ? 'Hide Technical Details' : 'View Technical Details'}
                  <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${expandedService === service.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                      id={`${service.id}-details`}
                    >
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What We Do</h3>
                          <ul className="space-y-3">
                            {service.details.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                                <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Deliverables</h3>
                          <ul className="space-y-3">
                            {service.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                                <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 0 ? 'order-2' : 'order-1 lg:order-2'}`}
              >
                <img
                  src={service.backgroundImage}
                  alt={`${service.title} visualization`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Elevate Your Project?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Partner with Kleos Engineering for innovative solutions that drive success. Contact our experts today.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;