import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Wrench, Monitor, Cpu, ChevronDown, CheckCircle } from 'lucide-react';
import { ComponentType } from 'react'; // Import ComponentType for TypeScript
import asBuiltImage from '../../constants/t-t1.png';
import toolsImage from '../../constants/technology.jpg';
import pipingImage from '../../constants/powerplant.jpg';

interface Service {
    id: string;
    icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
    title: string;
    description: string;
    details: string[];
    deliverables: string[];
    backgroundImage: string;
    benefits: string[];
    caseStudy: string;
}

const HomeServices: React.FC = () => {
    const [expandedService, setExpandedService] = useState<string | null>(null);

    const services: Service[] = [
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
            caseStudy: 'Successfully optimized piping systems for a major oil refinery, reducing material costs by 15% while maintaining compliance with international standards.',
        },
        {
            id: 'modeling',
            icon: Monitor,
            title: 'As-Built 3D Modeling',
            description: 'Precise models from point cloud data for retrofit planning and asset management.',
            details: [
                'Clash detection and gap analysis.',
                'As-built docs for brownfield projects.',
                'Point cloud to 3D conversion.', // Fixed typo: "converion" to "conversion"
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
            caseStudy: 'Created detailed 3D models for a pharmaceutical plant retrofit, identifying 50+ clashes early and saving over $200K in rework.',
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
            backgroundImage: toolsImage,
            benefits: [
                'Seamless integration across project phases.',
                'Real-time collaboration with cloud-based tools.',
                'Custom solutions for unique project needs.',
            ],
            caseStudy: 'Implemented advanced simulation tools for a chemical processing facility, optimizing energy efficiency by 20%.',
        },
    ];

    const toggleService = useCallback((id: string) => {
        setExpandedService((prev) => (prev === id ? null : id));
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Services Grid */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="py-24 bg-gradient-to-b from-white to-gray-100/50" // Fixed gradient
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
                            Our <span className="bg-clip-text bg-gradient-to-r from-primary to-blue-600">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Three core competencies that drive engineering excellence across industries
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="group"
                            >
                                <div
                                    className="h-full flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
                                    role="region"
                                    aria-labelledby={`${service.id}-title`}
                                >
                                    {/* Service Image */}
                                    <div className="relative h-64 flex-shrink-0 overflow-hidden">
                                        <img
                                            src={service.backgroundImage}
                                            alt={`${service.title} visualization`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        <div className="absolute top-6 left-6">
                                            <div className="bg-primary/30 backdrop-blur-lg p-3 rounded-xl">
                                                <service.icon className="h-6 w-6 text-yellow-500" aria-hidden="true" /> {/* Uncommented and fixed color */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 id={`${service.id}-title`} className="text-xl font-bold text-gray-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                                            {service.description}
                                        </p>

                                        {/* Benefits Preview */}
                                        <div className="space-y-2 mb-6">
                                            {service.benefits.slice(0, 2).map((benefit, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                                                    <span className="text-sm text-gray-600">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => toggleService(service.id)}
                                            className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors font-medium flex items-center justify-center gap-2"
                                            aria-expanded={expandedService === service.id}
                                            aria-controls={`${service.id}-details`}
                                        >
                                            {expandedService === service.id ? 'Hide Details' : 'View Details'}
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform duration-300 ${expandedService === service.id ? 'rotate-180' : ''}`}
                                                aria-hidden="true"
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {expandedService === service.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                                    className="overflow-hidden"
                                                    id={`${service.id}-details`}
                                                >
                                                    <div className="pt-6 space-y-6">
                                                        {/* Case Study */}
                                                        <div className="bg-gray-100/50 p-5 rounded-lg">
                                                            <h4 className="font-semibold text-gray-900 mb-2">Case Study</h4>
                                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                                {service.caseStudy}
                                                            </p>
                                                        </div>

                                                        {/* Technical Details */}
                                                        <div className="grid md:grid-cols-2 gap-4">
                                                            <div className="space-y-2">
                                                                <h4 className="font-semibold text-gray-900">Services</h4>
                                                                {service.details.map((detail, idx) => (
                                                                    <div key={idx} className="flex items-start gap-2">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                        <span className="text-xs text-gray-600">{detail}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="space-y-2">
                                                                <h4 className="font-semibold text-gray-900">Deliverables</h4>
                                                                {service.deliverables.map((deliverable, idx) => (
                                                                    <div key={idx} className="flex items-start gap-2">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                        <span className="text-xs text-gray-600">{deliverable}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default HomeServices;