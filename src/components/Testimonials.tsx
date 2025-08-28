import React from 'react';
import { Quote, Star, Building2, MapPin } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Kleos' attention to detail in deliverables reduced our project timeline by 30% with fewer RFIs and better coordination.",
      author: "Project Manager",
      company: "Oil & Gas Firm, India",
      rating: 5,
      projectType: "Refinery Expansion"
    },
    {
      quote: "Their as-built modeling identified clashes early, ensuring zero field issues and significant cost savings.",
      author: "Engineering Lead",
      company: "Utilities Provider, MEA",
      rating: 5,
      projectType: "Plant Modernization"
    },
    {
      quote: "Smart P&IDs and digital documentation streamlined our handover process by 50%, exceeding expectations.",
      author: "Operations Head",
      company: "Pharmaceutical Company, EU",
      rating: 5,
      projectType: "GMP Facility"
    }
  ];

  const stats = [
    { number: "Proven", label: "Track Record", icon: Building2, description: "In key engineering projects" },
    { number: "Global", label: "Client Reach", icon: MapPin, description: "From our base in India" },
    { number: "High", label: "Client Retention", icon: Star, description: "Based on successful collaborations" },
  ];

  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">What Our Clients Say</h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto leading-tight">
            Hear from partners who value our precision engineering solutions from India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md space-y-4">
              <Quote className="h-8 w-8 text-primary mb-2" />
              <p className="text-dark-gray italic leading-relaxed">{testimonial.quote}</p>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-primary font-semibold mb-0">{testimonial.author}</p>
              <p className="text-dark-gray text-sm mb-0">{testimonial.company} - {testimonial.projectType}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-xl shadow-md space-y-2">
              <stat.icon className="h-10 w-10 text-primary mx-auto mb-2" />
              <h3 className="text-3xl font-bold text-primary mb-0">{stat.number}</h3>
              <p className="text-dark-gray font-semibold mb-0">{stat.label}</p>
              <p className="text-dark-gray text-sm mb-0">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-green transition-colors">
            Share Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
