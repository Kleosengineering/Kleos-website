import React from 'react';
import { TrendingUp, Award, Mail, Briefcase, Users, Globe2, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Careers: React.FC = React.memo(() => {
  const heroImage = 'https://images.unsplash.com/photo-1516321310762-7f54c77973b6?auto=format&fit=crop&q=80';

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
      image: 'https://images.unsplash.com/photo-1516321310762-7f54c77973b6?auto=format&fit=crop&q=80',
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
      image: 'https://images.unsplash.com/photo-1531482615713-2afd674bf4ac?auto=format&fit=crop&q=80',
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

  const testimonials = [
    {
      quote: 'Joining Kleos was a game-changer. The mentorship and global projects helped me grow as an engineer.',
      author: 'Priya Sharma',
      role: 'Piping Engineer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    {
      quote: 'The innovation-driven culture at Kleos pushes me to think beyond boundaries every day.',
      author: 'Arjun Patel',
      role: 'Structural Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">What Our Team Says</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
              Hear from our engineers about their journey with Kleos.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
              >
                <Quote className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">{testimonial.quote}</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.author} profile`}
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
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
                src="https://images.unsplash.com/photo-1519337265831-4f1d0b8b7a73?auto=format&fit=crop&q=80"
                alt="Diverse team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </motion.div> {/* ✅ FIXED: Proper closing */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Shape the Future?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Join Kleos Engineering and contribute to global innovation. Submit your application today.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-md mx-auto space-y-2">
              <div className="text-sm text-gray-200 mb-0">Email applications to:</div>
              <div className="text-lg font-bold text-white mb-0">careers@kleosengineering.com</div>
              <div className="text-sm text-gray-200 mb-0">Subject: "Application for [Position] - Your Name"</div>
            </div>
            <a
              href="mailto:careers@kleosengineering.com"
              className="mt-6 inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              aria-label="Apply to Kleos Engineering"
            >
              Apply Now
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

export default Careers;
