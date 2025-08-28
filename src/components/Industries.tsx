import React from 'react';
import { Droplets, Pill, Coffee, Factory, Wind, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import oilIMAGE from "../../constants/oil&gas.jpg"
import pharmaceuticalsIMAGE from "../../constants/pharma.jpg"
import wasteWaterIMAGE from "../../constants/water-waste.jpg"
import manufracturingIMAGE from "../../constants/manufacturing.jpg"


const Industries: React.FC = () => {
  const heroImage = 'https://images.unsplash.com/photo-1506629083149-d072d3067bf4?auto=format&fit=crop&q=80'; // Industrial engineering background

  const industries = [
    {
      id: 'oil-gas',
      icon: Droplets,
      name: 'Oil & Gas',
      description: 'Delivering efficient, compliant piping and plant designs for global energy projects.',
      benefits: [
        'Optimized layouts reduce operational costs.',
        'Compliance with API, ASME, and ISO standards.',
        'Enhanced safety through advanced stress analysis.',
      ],
      caseStudy: 'Streamlined piping design for a Middle East refinery, cutting costs by 12% while meeting strict safety standards.',
      image: oilIMAGE,
      alt: 'Oil and gas refinery engineering',
    },
    {
      id: 'pharmaceuticals',
      icon: Pill,
      name: 'Pharmaceuticals',
      description: 'GMP-compliant cleanrooms and systems for high-quality drug manufacturing.',
      benefits: [
        'FDA and EMA-compliant facility designs.',
        'Reduced contamination risks with hygienic layouts.',
        'Scalable solutions for rapid production scaling.',
      ],
      caseStudy: 'Designed a GMP-compliant cleanroom for a vaccine production facility, ensuring regulatory approval in record time.',
      image: pharmaceuticalsIMAGE,
      alt: 'Pharmaceutical manufacturing facility',
    },
    {
      id: 'food-beverage',
      icon: Coffee,
      name: 'Food & Beverage',
      description: 'Hygienic, FDA-compliant systems for safe and efficient food production.',
      benefits: [
        'Hygienic designs minimize contamination risks.',
        'Optimized processes for high-throughput production.',
        'Compliance with FDA and HACCP standards.',
      ],
      caseStudy: 'Revamped a beverage production line, increasing output by 20% while maintaining hygiene standards.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      alt: 'Food and beverage production line',
    },
    {
      id: 'water-wastewater',
      icon: Factory,
      name: 'Water & Wastewater',
      description: 'Sustainable solutions for water treatment and management systems.',
      benefits: [
        'Eco-friendly designs reduce environmental impact.',
        'Cost-effective piping and instrumentation solutions.',
        'Reliable systems for long-term performance.',
      ],
      caseStudy: 'Developed a wastewater treatment system for a municipality, reducing energy consumption by 15%.',
      image: wasteWaterIMAGE,
      alt: 'Water treatment plant engineering',
    },
    {
      id: 'manufacturing',
      icon: Wind,
      name: 'Manufacturing',
      description: 'Custom automation and scalable designs for optimized production.',
      benefits: [
        'Increased efficiency with automated workflows.',
        'Scalable designs for growing production needs.',
        'Reduced downtime with robust system integration.',
      ],
      caseStudy: 'Implemented automation for an automotive parts manufacturer, boosting productivity by 25%.',
      image: manufracturingIMAGE,
      alt: 'Manufacturing facility optimization',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[75vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroImage})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">Industries We Empower</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            From energy to manufacturing, our tailored engineering solutions drive success across diverse sectors.
          </p>
        </motion.div>
      </section>

      {/* Industries Sections with Asymmetric Layout */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
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
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{industry.name}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{industry.description}</p>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Case Study</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{industry.caseStudy}</p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg"
                  aria-label={`Learn more about our ${industry.name} solutions`}
                >
                  Explore Solutions
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl transform ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'}`}
              >
                <img
                  src={industry.image}
                  alt={industry.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}


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
            <h3 className="text-4xl sm:text-4xl font-bold text-white">Your Industry, Our Expertise</h3>
            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
              Not seeing your industry? Our adaptable solutions tackle unique challenges. Contact us to discuss your needs.
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

export default Industries;