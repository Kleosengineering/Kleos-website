import React, { useState } from 'react';
import { Wrench, Monitor, Cpu, ChevronDown, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import asBuiltImage from '../../constants/t-t1.png';
import toolsImage from "../../constants/technology.jpg"
import pipingImage from "../../constants/powerplant.jpg"
import heroImage1 from "../../constants/services1.jpg"

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const heroImage = heroImage1;

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
      backgroundImage: pipingImage,
      benefits: [
        'Reduced project timelines through optimized designs.',
        'Cost savings with accurate material take-offs.',
        'Enhanced safety with thorough stress analysis.',
      ],
      caseStudy: 'Optimized piping systems for a major oil refinery, reducing material costs by 15% while maintaining compliance.'
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
      backgroundImage: asBuiltImage,
      benefits: [
        'Accurate documentation for legacy systems.',
        'Minimized downtime during retrofits.',
        'Improved asset management with digital twins.',
      ],
      caseStudy: 'Created 3D models for a pharmaceutical plant retrofit, identifying 50+ clashes early, saving over $200K.'
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
        'Supporting digital twins and 3D visualizations.',
        'Integrated project databases.',
        'Custom automation scripts.',
      ],
      backgroundImage: toolsImage,
      benefits: [
        'Seamless integration across project phases.',
        'Real-time collaboration with cloud-based tools.',
        'Custom solutions for unique project needs.',
      ],
      caseStudy: 'Implemented simulation tools for a chemical processing facility, optimizing energy efficiency by 20%.'
    },
  ];

  return (
    <div className="min-h-screen  font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[75vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${heroImage})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-6 max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Transformative Engineering Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge technology to deliver precise, sustainable solutions for industrial challenges.
          </p>
        </motion.div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 0 ? 'lg:grid-cols-[1fr_1.3fr]' : 'lg:grid-cols-[1.3fr_1fr]'}`}>
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`space-y-6 ${index % 2 === 0 ? 'order-1' : 'order-2 lg:order-1'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-700 p-3 rounded-full text-white shadow-md">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>

                {/* Benefits */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study */}
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Case Study</h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">{service.caseStudy}</p>
                </div>

                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="group flex items-center text-blue-600 dark:text-blue-400 font-semibold text-lg hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-expanded={expandedService === service.id}
                  aria-controls={`${service.id}-details`}
                >
                  {expandedService === service.id ? 'Hide Technical Details' : 'View Technical Details'}
                  <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${expandedService === service.id ? 'rotate-180' : ''}`} />
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
                className={`relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ${index % 2 === 0 ? 'order-2' : 'order-1 lg:order-2'}`}
              >
                <img
                  src={service.backgroundImage}
                  alt={`${service.title} visualization`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action Section */}
      <div className='max-w-7xl mx-auto py-24 '>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative  py-16 px-4 rounded-3xl sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
        >
          <div
            className="absolute  inset-0 opacity-10"

          />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-4xl sm:text-4xl font-bold text-white">Ready to Elevate Your Project?</h3>
            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
              Partner with Kleos Engineering for innovative solutions that drive success. Contact our experts today.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              aria-label="Contact Kleos Engineering"
            >
              Get in Touch
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;