import React from 'react';
import { CheckCircle, Users, Lock, Target } from 'lucide-react';

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
      description: 'Structured management with documented reviews and checkpoints, inspired by global standards.',
    },
    {
      icon: Users,
      title: 'Remote-Friendly Collaboration',
      description: 'Flexible remote work from India with on-site visits as needed for seamless integration.',
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
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Approach Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">Our Approach</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center space-y-2">
                <item.icon className="h-10 w-10 text-primary mx-auto mb-2" />
                <h4 className="text-xl font-semibold text-primary mb-0">{item.title}</h4>
                <p className="text-dark-gray text-sm leading-tight">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">Step-by-Step Process</h3>
          <div className="relative">
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative text-center space-y-2">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 z-10 relative">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-0">{item.title}</h4>
                  <p className="text-dark-gray text-sm leading-tight">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="bg-primary text-white rounded-xl p-10 space-y-8">
          <h3 className="text-3xl font-bold mb-4 text-center">Why Partner with Kleos</h3>
          <ul className="space-y-4 max-w-3xl mx-auto">
            {whyChoose.map((reason, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 text-gold" />
                <span className="text-lg leading-tight">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
