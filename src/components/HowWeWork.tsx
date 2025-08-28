import React from 'react';
import { CheckCircle, Users, Lock, Target, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HowWeWork: React.FC = () => {
  const approach = [
    {
      icon: Target,
      title: 'Ownership & Accountability',
      description: 'We take full responsibility for deliverables from inception to completion.',
    },
    {
      icon: CheckCircle,
      title: 'Quality-Aligned Processes',
      description: 'Structured management with documented reviews and checkpoints.',
    },
    {
      icon: Users,
      title: 'Remote-Friendly Collaboration',
      description: 'Flexible remote work with on-site visits as needed for seamless integration.',
    },
    {
      icon: Lock,
      title: 'Security-First Approach',
      description: 'NDA-protected engagements with strict data controls and access protocols.',
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Scope Definition',
      description: 'Capturing objectives, standards, constraints, and interfaces upfront.',
    },
    {
      step: '02',
      title: 'Project Kickoff',
      description: 'Establishing file structures, templates, units, and naming conventions.',
    },
    {
      step: '03',
      title: 'Design Iterations',
      description: 'Progressive reviews at 30%, 60%, 90% milestones with action tracking.',
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Checklist-based verification and cross-discipline coordination.',
    },
    {
      step: '05',
      title: 'Final Handover',
      description: 'Delivering native files, PDFs, indexes, and comprehensive documentation.',
    }
  ];

  const whyChoose = [
    'First-time-right outputs through rigorous reviews and standardized checklists.',
    'Cost-effective, timely delivery without compromising quality.',
    'Secure handling of sensitive data with minimal access and NDA compliance.',
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(0 0% 100%), hsl(224 10% 96%))' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'hsl(224 65% 33% / 0.05)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'hsl(224 65% 50% / 0.05)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'hsl(224 65% 33%)' }}
          >
            How We Work
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'hsl(0 0% 45%)' }}
          >
            Our proven methodology ensures project success through structured processes and unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Approach Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: 'hsl(224 65% 33%)' }}
          >
            Our Approach
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl text-center border"
                style={{
                  background: 'hsl(0 0% 100% / 0.8)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)',
                  borderColor: 'hsl(0 0% 100% / 0.5)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px hsl(224 65% 33% / 0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px hsl(224 65% 33% / 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                >
                  <item.icon className="h-7 w-7" style={{ color: 'hsl(0 0% 100%)' }} />
                </div>
                <h4 
                  className="text-xl font-semibold mb-2"
                  style={{ color: 'hsl(224 65% 33%)' }}
                >
                  {item.title}
                </h4>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'hsl(0 0% 45%)' }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: 'hsl(224 65% 33%)' }}
          >
            Step-by-Step Process
          </motion.h3>
          <div className="relative">
            {/* Connection line */}
            <div 
              className="hidden lg:block absolute top-6 left-0 right-0 h-0.5"
              style={{ 
                background: 'linear-gradient(to right, hsl(224 65% 33%), hsl(224 65% 50%), hsl(224 65% 33%))',
                opacity: 0.2 
              }}
            />
            
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center group"
                >
                  <div className="relative z-10">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4"
                      style={{
                        background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))',
                        color: 'hsl(0 0% 100%)',
                        boxShadow: '0 10px 15px -3px hsl(224 65% 33% / 0.15)'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 40px hsl(224 65% 50% / 0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px hsl(224 65% 33% / 0.15)';
                      }}
                    >
                      {item.step}
                    </div>
                    <h4 
                      className="text-lg font-semibold mb-2"
                      style={{ color: 'hsl(224 65% 33%)' }}
                    >
                      {item.title}
                    </h4>
                    <p 
                      className="text-sm leading-tight"
                      style={{ color: 'hsl(0 0% 45%)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-10 overflow-hidden"
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
          
          <div className="relative z-10">
            <h3 
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: 'hsl(0 0% 100%)' }}
            >
              Why Partner with Kleos
            </h3>
            <ul className="space-y-4 max-w-3xl mx-auto mb-8">
              {whyChoose.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle 
                    className="h-6 w-6 flex-shrink-0 mt-1"
                    style={{ color: 'hsl(0 0% 100%)' }}
                  />
                  <span 
                    className="text-lg leading-relaxed"
                    style={{ color: 'hsl(0 0% 100% / 0.95)' }}
                  >
                    {reason}
                  </span>
                </motion.li>
              ))}
            </ul>
            <div className="text-center">
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
    </section>
  );
};

export default HowWeWork;