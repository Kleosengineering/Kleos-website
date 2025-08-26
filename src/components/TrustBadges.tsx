import React from 'react';
import { Shield, Globe, FileCheck, Award } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: 'NDA-First Engagement',
      description: 'Enterprise-grade security with strict confidentiality protocols.',
    },
    {
      icon: Globe,
      title: 'International Standards Compliance',
      description: 'Adhering to ASME, DIN, and global engineering norms from our India base.',
    },
    {
      icon: FileCheck,
      title: 'Audit-Ready Documentation',
      description: 'Comprehensive, traceable records for seamless compliance.',
    },
    {
      icon: Award,
      title: 'Quality Commitment',
      description: 'Dedicated processes ensuring consistent excellence.',
    }
  ];

  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">Built on Trust</h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto leading-tight">
            Our standards and practices ensure reliability, security, and excellence in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow space-y-2">
              <badge.icon className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-primary mb-0">{badge.title}</h3>
              <p className="text-dark-gray text-sm leading-tight">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
