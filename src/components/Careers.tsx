import React from 'react';
import { TrendingUp, Award, Briefcase, Users, Globe2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import growthImage from "../../constants/growth.jpg"
import focusImage from "../../constants/focus.jpg"
import diversityImage from "../../constants/diversity.jpg"
import heroImage1 from "../../constants/innovation-focus1.jpg"


const Careers: React.FC = React.memo(() => {
  const heroImage = heroImage1;

  const benefits = [
    {
      Icon: Globe2,
      title: 'India-Based Global Projects',
      description: 'Work on cutting-edge international projects from our India hub, spanning aerospace, energy, and sustainability.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80',
      alt: 'Global engineering collaboration',
    },
    {
      Icon: TrendingUp,
      title: 'Professional Growth',
      description: 'Advance your skills with hands-on training in CAD, FEA, and advanced simulation tools.',
      image: growthImage,
      alt: 'Engineer training session',
    },
    {
      Icon: Users,
      title: 'Mentorship Opportunities',
      description: 'Grow under expert guidance with structured mentorship programs, fostering leadership in our innovative team.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
      alt: 'Team mentorship meeting',
    },
    {
      Icon: Award,
      title: 'Innovation Focus',
      description: 'Lead R&D and contribute to groundbreaking projects shaping the future of global engineering.',
      image: focusImage,
      alt: 'Engineering innovation lab',
    },
  ];

  const openPositions = [
    {
      title: 'Mechanical Engineer',
      description: 'Design and optimize mechanical systems for industrial applications.',
      requirements: ["Bachelor's in Mechanical Engineering", 'Proficiency in SolidWorks/AutoCAD', 'Strong analytical skills'],
    },
    {
      title: 'Structural Analyst',
      description: 'Perform finite element analysis for complex structures.',
      requirements: ["Master's in Structural Engineering", 'Expertise in ANSYS or similar FEA tools', 'Project management skills'],
    },
    {
      title: 'Junior CAD Designer',
      description: 'Support the creation of technical drawings and 3D models.',
      requirements: ["Associate's degree or equivalent", 'Basic CAD knowledge', 'Eagerness to learn'],
    },
    {
      title: 'Piping Engineer',
      description: 'Develop piping designs and conduct stress analysis for energy projects.',
      requirements: ["Degree in Mechanical or Chemical Engineering", 'Experience with AutoPIPE', 'Knowledge of ASME standards'],
    },
    {
      title: 'Process Engineer',
      description: 'Optimize plant processes using advanced simulation tools.',
      requirements: ["Chemical Engineering degree", 'Proficiency in Aspen HYSYS', 'Process optimization experience'],
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">Join Our Engineering Revolution</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Build the future with Kleos Engineering, where innovation meets opportunity in a dynamic, India-based team.
          </p>
        </motion.div>
      </section>

      {/* Benefits Sections with Asymmetric Layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">Why Kleos?</h2>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? 'lg:grid-cols-[1fr_1.5fr]' : 'lg:grid-cols-[1.5fr_1fr]'}`}>
                <div className={`space-y-6 ${index % 2 === 0 ? 'order-1' : 'order-2 lg:order-1'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full text-white">
                      <benefit.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg"
                    aria-label={`Learn more about ${benefit.title}`}
                  >
                    Discover More
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </a>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl transform ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'}`}
                >
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Open Positions Section */}
      <section className="py-24 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Open Positions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
              Explore exciting opportunities to shape the future of engineering with Kleos.
            </p>
          </motion.div>
          {/* First row: 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.slice(0, 3).map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{position.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{position.description}</p>
                <ul className="space-y-2">
                  {position.requirements.map((req, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300 text-sm">
                      <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
                  aria-label={`Apply for ${position.title}`}
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
          {/* Second row: 2 centered cards */}
          <div className="flex justify-center gap-8 mt-8 lg:max-w-[66.666%] lg:mx-auto">
            {openPositions.slice(3, 5).map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow lg:w-[calc(50%-1rem)]"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{position.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{position.description}</p>
                <ul className="space-y-2">
                  {position.requirements.map((req, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300 text-sm">
                      <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
                  aria-label={`Apply for ${position.title}`}
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* ✅ Diversity & Inclusion Section — FIXED */}
      <section className="py-24 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Diversity & Inclusion</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At Kleos, diversity fuels innovation. As an Equal Opportunity Employer based in India, we foster an inclusive environment where all talents thrive, promoting accessibility and non-discrimination.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 text-lg"
                aria-label="Learn about our diversity initiatives"
              >
                Learn More
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3"
            >
              <img
                src={diversityImage}
                alt="Diverse team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 " />
            </motion.div>
          </motion.div> {/* ✅ FIXED: Proper closing */}
        </div>
      </section>
      <div className='py-24'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto rounded-2xl p-10 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))',
            boxShadow: '0 20px 25px -5px hsl(224 65% 33% / 0.2)'
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`
            }}
          />

          <div className="relative z-10 text-center">
            <h3
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: 'hsl(0 0% 100%)' }}
            >
              Ready to Shape the Future?
            </h3>
            <p className="text-xl  max-w-2xl mx-auto text-white leading-relaxed">
              Join Kleos Engineering and contribute to global innovation.
            </p>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white leading-relaxed">
              Submit your application today.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-md mx-auto space-y-2">
              <div className="text-sm text-gray-200 mb-0">Email applications to:</div>
              <div className="text-lg font-bold text-white mb-0">careers@kleosengineering.com</div>
              <div className="text-sm text-gray-200 mb-0">Subject: "Application for [Position] - Your Name"</div>
            </div>


            <div className="text-center mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 ease-in-out"
                style={{
                  background: 'hsl(0 0% 100%)',
                  color: 'hsl(224 65% 33%)',
                  boxShadow: '0 20px 25px -5px hsl(224 65% 33% / 0.2)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'hsl(0 0% 100% / 0.9)';
                  e.currentTarget.style.boxShadow = '0 0 40px hsl(224 65% 50% / 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'hsl(0 0% 100%)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px hsl(224 65% 33% / 0.2)';
                }}
              >
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default Careers;
