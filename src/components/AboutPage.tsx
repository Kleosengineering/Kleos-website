import React from 'react';
import { motion } from 'framer-motion';
import {
    Target, Shield, Lightbulb, HeartHandshake,
    CheckCircle, Globe, Award, Zap,
    Quote, ArrowRight, Building2, Gauge,
    Rocket, Star,
    Users
} from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen" style={{ background: 'hsl(0 0% 100%)' }}>
            {/* Hero Section with Parallax */}
            <section
                className="relative min-h-[75vh] overflow-hidden"
                style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div
                        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-pulse"
                        style={{ background: 'hsl(224 65% 50% / 0.2)' }}
                    />
                    <div
                        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
                        style={{ background: 'hsl(224 65% 50% / 0.2)' }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border"
                            style={{
                                background: 'hsl(0 0% 100% / 0.1)',
                                backdropFilter: 'blur(12px)',
                                borderColor: 'hsl(0 0% 100% / 0.2)'
                            }}
                        >
                            <Building2 className="w-5 h-5" style={{ color: 'hsl(0 0% 100%)' }} />
                            <span className="font-medium" style={{ color: 'hsl(0 0% 100%)' }}>
                                About Kleos Engineering
                            </span>
                        </motion.div>

                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                            style={{ color: 'hsl(0 0% 100%)' }}
                        >
                            Engineering Precision.
                            <span
                                className="block bg-clip-text "
                            >
                                Powering Innovation.
                            </span>
                        </h1>

                        <p
                            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
                            style={{ color: 'hsl(0 0% 100%)' }}

                        >
                            At Kleos Engineering, we design, build, and optimize engineering systems with accuracy and innovation,
                            delivering reliable solutions tailored to industries worldwide.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* Mission & Vision Section */}
            <section
                className="py-24"
                style={{ background: 'linear-gradient(180deg, hsl(0 0% 100%), hsl(224 10% 96%))' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-3xl border"
                            style={{
                                background: 'hsl(0 0% 100% / 0.8)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 10px 15px -3px hsl(224 65% 33% / 0.15)',
                                borderColor: 'hsl(224 15% 91%)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 40px hsl(224 65% 50% / 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px hsl(224 65% 33% / 0.15)';
                            }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div
                                    className="p-3 rounded-xl"
                                    style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                                >
                                    <Target className="w-8 h-8" style={{ color: 'hsl(0 0% 100%)' }} />
                                </div>
                                <h2
                                    className="text-3xl font-bold"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    Our Mission
                                </h2>
                            </div>
                            <p
                                className="text-lg leading-relaxed"
                                style={{ color: 'hsl(0 0% 45%)' }}
                            >
                                To deliver engineering solutions that combine accuracy, innovation, and reliability for industries
                                across the globe. We transform complex challenges into sustainable, efficient systems that drive
                                industrial progress.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-3xl border"
                            style={{
                                background: 'hsl(0 0% 100% / 0.8)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 10px 15px -3px hsl(224 65% 33% / 0.15)',
                                borderColor: 'hsl(224 15% 91%)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 40px hsl(224 65% 50% / 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px hsl(224 65% 33% / 0.15)';
                            }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div
                                    className="p-3 rounded-xl"
                                    style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                                >
                                    <Rocket className="w-8 h-8" style={{ color: 'hsl(0 0% 100%)' }} />
                                </div>
                                <h2
                                    className="text-3xl font-bold"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    Our Vision
                                </h2>
                            </div>
                            <p
                                className="text-lg leading-relaxed"
                                style={{ color: 'hsl(0 0% 45%)' }}
                            >
                                To be recognized internationally as a trusted partner for engineering services, leveraging advanced
                                technology to drive industrial growth and delivering excellence across global markets while pioneering
                                sustainable solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24" style={{ background: 'hsl(0 0% 100%)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            Our Core Values
                        </h2>
                        <p
                            className="text-xl max-w-3xl mx-auto"
                            style={{ color: 'hsl(0 0% 45%)' }}
                        >
                            The principles that guide every project, every decision, and every innovation
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                                style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                            />
                            <div
                                className="p-8 rounded-2xl border h-full"
                                style={{
                                    background: 'hsl(0 0% 100% / 0.7)',
                                    backdropFilter: 'blur(12px)',
                                    borderColor: 'hsl(224 15% 91%)',
                                    boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = 'hsl(224 65% 50% / 0.5)';
                                    e.currentTarget.style.boxShadow = '0 0 40px hsl(224 65% 50% / 0.3)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = 'hsl(224 15% 91%)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px hsl(224 65% 33% / 0.1)';
                                }}
                            >
                                <div
                                    className="p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300"
                                    style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                                >
                                    <Gauge className="w-8 h-8" style={{ color: 'hsl(0 0% 100%)' }} />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-3"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    Precision in Design
                                </h3>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: 'hsl(0 0% 45%)' }}
                                >
                                    Ensuring accuracy in every detail through structured reviews and checklists.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                                style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                            />
                            <div
                                className="p-8 rounded-2xl border h-full"
                                style={{
                                    background: 'hsl(0 0% 100% / 0.7)',
                                    backdropFilter: 'blur(12px)',
                                    borderColor: 'hsl(224 15% 91%)',
                                    boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = 'hsl(224 65% 50% / 0.5)';
                                    e.currentTarget.style.boxShadow = '0 0 40px hsl(224 65% 50% / 0.3)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = 'hsl(224 15% 91%)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px hsl(224 65% 33% / 0.1)';
                                }}
                            >
                                <div
                                    className="p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300"
                                    style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                                >
                                    <Shield className="w-8 h-8" style={{ color: 'hsl(0 0% 100%)' }} />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-3"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    Integrity in Service
                                </h3>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: 'hsl(0 0% 45%)' }}
                                >
                                    Upholding NDA-first engagements, global standards (ASME, DIN, IS), and audit-ready documentation.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                                style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                            />
                            <div
                                className="p-8 rounded-2xl border h-full"
                                style={{
                                    background: 'hsl(0 0% 100% / 0.7)',
                                    backdropFilter: 'blur(12px)',
                                    borderColor: 'hsl(224 15% 91%)',
                                    boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = 'hsl(224 65% 50% / 0.5)';
                                    e.currentTarget.style.boxShadow = '0 0 40px hsl(224 65% 50% / 0.3)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = 'hsl(224 15% 91%)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px hsl(224 65% 33% / 0.1)';
                                }}
                            >
                                <div
                                    className="p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300"
                                    style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                                >
                                    <Lightbulb className="w-8 h-8" style={{ color: 'hsl(0 0% 100%)' }} />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-3"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    Innovation through Technology
                                </h3>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: 'hsl(0 0% 45%)' }}
                                >
                                    Utilizing cutting-edge tools like AutoCAD Plant 3D, Smart P&ID, Aveva PDMS/E3D, Revit MEP, and Navisworks.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                                style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                            />
                            <div
                                className="p-8 rounded-2xl border h-full"
                                style={{
                                    background: 'hsl(0 0% 100% / 0.7)',
                                    backdropFilter: 'blur(12px)',
                                    borderColor: 'hsl(224 15% 91%)',
                                    boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = 'hsl(224 65% 50% / 0.5)';
                                    e.currentTarget.style.boxShadow = '0 0 40px hsl(224 65% 50% / 0.3)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = 'hsl(224 15% 91%)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px hsl(224 65% 33% / 0.1)';
                                }}
                            >
                                <div
                                    className="p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300"
                                    style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                                >
                                    <HeartHandshake className="w-8 h-8" style={{ color: 'hsl(0 0% 100%)' }} />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-3"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    Commitment to Clients
                                </h3>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: 'hsl(0 0% 45%)' }}
                                >
                                    Ownership and accountability over deliverables with a client-first approach.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section
                className="py-24"
                style={{ background: 'linear-gradient(180deg, hsl(0 0% 100%), hsl(224 10% 96%))' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            Our Expertise & Experience
                        </h2>
                        <div
                            className="w-24 h-1 mx-auto mb-8"
                            style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                        ></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-3xl border"
                        style={{
                            background: 'hsl(0 0% 100% / 0.9)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 10px 15px -3px hsl(224 65% 33% / 0.15)',
                            borderColor: 'hsl(224 15% 91%)'
                        }}
                    >
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3
                                    className="text-2xl font-bold mb-6 flex items-center"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    <Globe className="w-8 h-8 mr-3" style={{ color: 'hsl(224 65% 50%)' }} />
                                    Global Project Capability
                                </h3>
                                <p
                                    className="text-lg leading-relaxed mb-6"
                                    style={{ color: 'hsl(0 0% 45%)' }}
                                >
                                    With over 20+ years of combined experience, Kleos Engineering serves mission-critical industries
                                    where precision is paramount. We deliver end-to-end support—from concept design to detailed
                                    engineering and documentation.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle
                                            className="w-5 h-5 flex-shrink-0"
                                            style={{ color: 'hsl(224 65% 50%)' }}
                                        />
                                        <span style={{ color: 'hsl(0 0% 45%)' }}>Oil & Gas</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle
                                            className="w-5 h-5 flex-shrink-0"
                                            style={{ color: 'hsl(224 65% 50%)' }}
                                        />
                                        <span style={{ color: 'hsl(0 0% 45%)' }}>Pharmaceuticals</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle
                                            className="w-5 h-5 flex-shrink-0"
                                            style={{ color: 'hsl(224 65% 50%)' }}
                                        />
                                        <span style={{ color: 'hsl(0 0% 45%)' }}>Food & Beverage</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle
                                            className="w-5 h-5 flex-shrink-0"
                                            style={{ color: 'hsl(224 65% 50%)' }}
                                        />
                                        <span style={{ color: 'hsl(0 0% 45%)' }}>Water & Wastewater</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle
                                            className="w-5 h-5 flex-shrink-0"
                                            style={{ color: 'hsl(224 65% 50%)' }}
                                        />
                                        <span style={{ color: 'hsl(0 0% 45%)' }}>Manufacturing/Industrial</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle
                                            className="w-5 h-5 flex-shrink-0"
                                            style={{ color: 'hsl(224 65% 50%)' }}
                                        />
                                        <span style={{ color: 'hsl(0 0% 45%)' }}>HVAC & Building Services</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3
                                    className="text-2xl font-bold mb-6 flex items-center"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    <Zap className="w-8 h-8 mr-3" style={{ color: 'hsl(224 65% 50%)' }} />
                                    Standards & Compliance
                                </h3>
                                <p
                                    className="text-lg leading-relaxed mb-6"
                                    style={{ color: 'hsl(0 0% 45%)' }}
                                >
                                    We adhere to ASME, DIN, IS, and customer-specified standards, with ISO-aligned quality practices.
                                    Our workflows emphasize right-first-time outputs, remote-friendly collaboration with on-site visits
                                    when needed, and strict security measures.
                                </p>
                                <div
                                    className="p-6 rounded-xl border"
                                    style={{
                                        background: 'hsl(224 65% 50% / 0.05)',
                                        borderColor: 'hsl(224 65% 50% / 0.2)'
                                    }}
                                >
                                    <h4
                                        className="font-semibold mb-3"
                                        style={{ color: 'hsl(224 65% 33%)' }}
                                    >
                                        Key Differentiators:
                                    </h4>
                                    <ul
                                        className="space-y-2"
                                        style={{ color: 'hsl(0 0% 45%)' }}
                                    >
                                        <li>• NDA-protected engagements</li>
                                        <li>• Audit-ready documentation</li>
                                        <li>• ISO-aligned quality practices</li>
                                        <li>• Remote-friendly collaboration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24" style={{ background: 'hsl(0 0% 100%)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            Why Choose Kleos
                        </h2>
                        <p
                            className="text-xl max-w-3xl mx-auto"
                            style={{ color: 'hsl(0 0% 45%)' }}
                        >
                            Partner with excellence, deliver with confidence
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                                style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                            />
                            <div
                                className="p-8 rounded-2xl border h-full"
                                style={{
                                    background: 'hsl(0 0% 100% / 0.8)',
                                    boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)',
                                    borderColor: 'hsl(224 15% 91%)'
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
                                <Award
                                    className="w-12 h-12 mb-6"
                                    style={{ color: 'hsl(224 65% 50%)' }}
                                />
                                <h3
                                    className="text-2xl font-bold mb-4"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    Trusted Expertise
                                </h3>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: 'hsl(0 0% 45%)' }}
                                >
                                    Multidisciplinary engineering with agile, cost-effective project execution.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                                style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                            />
                            <div
                                className="p-8 rounded-2xl border h-full"
                                style={{
                                    background: 'hsl(0 0% 100% / 0.8)',
                                    boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)',
                                    borderColor: 'hsl(224 15% 91%)'
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
                                <CheckCircle
                                    className="w-12 h-12 mb-6"
                                    style={{ color: 'hsl(224 65% 50%)' }}
                                />
                                <h3
                                    className="text-2xl font-bold mb-4"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    Proven Processes
                                </h3>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: 'hsl(0 0% 45%)' }}
                                >
                                    Scope capture, iterative design sprints (30/60/90% reviews), quality gates, and clean handovers.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                                style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                            />
                            <div
                                className="p-8 rounded-2xl border h-full"
                                style={{
                                    background: 'hsl(0 0% 100% / 0.8)',
                                    boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)',
                                    borderColor: 'hsl(224 15% 91%)'
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
                                <Users
                                    className="w-12 h-12 mb-6"
                                    style={{ color: 'hsl(224 65% 50%)' }}
                                />
                                <h3
                                    className="text-2xl font-bold mb-4"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                >
                                    Client-Centric Approach
                                </h3>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: 'hsl(0 0% 45%)' }}
                                >
                                    Continuous learning, hands-on mentorship, and reduced RFIs through clear deliverables.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                className="py-24"
                style={{ background: 'linear-gradient(180deg, hsl(0 0% 100%), hsl(224 10% 96%))' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            What Clients Value
                        </h2>
                        <p style={{ color: 'hsl(0 0% 45%)' }}>
                            Real feedback from real projects
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl border"
                            style={{
                                background: 'hsl(0 0% 100% / 0.9)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)',
                                borderColor: 'hsl(224 15% 91%)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px hsl(224 65% 33% / 0.15)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px hsl(224 65% 33% / 0.1)';
                            }}
                        >
                            <Quote
                                className="w-10 h-10 mb-4"
                                style={{ color: 'hsl(224 65% 50% / 0.2)' }}
                            />
                            <p
                                className="text-lg italic mb-6"
                                style={{ color: 'hsl(0 0% 45%)' }}
                            >
                                "Clear GA and isometric packages. Fewer RFIs."
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p
                                        className="font-semibold"
                                        style={{ color: 'hsl(224 65% 33%)' }}
                                    >
                                        Project Manager
                                    </p>
                                    <p
                                        className="text-sm"
                                        style={{ color: 'hsl(0 0% 45%)' }}
                                    >
                                        Oil & Gas (India)
                                    </p>
                                </div>
                                <div className="flex space-x-1">
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl border"
                            style={{
                                background: 'hsl(0 0% 100% / 0.9)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)',
                                borderColor: 'hsl(224 15% 91%)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px hsl(224 65% 33% / 0.15)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px hsl(224 65% 33% / 0.1)';
                            }}
                        >
                            <Quote
                                className="w-10 h-10 mb-4"
                                style={{ color: 'hsl(224 65% 50% / 0.2)' }}
                            />
                            <p
                                className="text-lg italic mb-6"
                                style={{ color: 'hsl(0 0% 45%)' }}
                            >
                                "Point cloud to model was accurate. Retrofit planning was smooth."
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p
                                        className="font-semibold"
                                        style={{ color: 'hsl(224 65% 33%)' }}
                                    >
                                        Engineering Lead
                                    </p>
                                    <p
                                        className="text-sm"
                                        style={{ color: 'hsl(0 0% 45%)' }}
                                    >
                                        Utilities (MEA)
                                    </p>
                                </div>
                                <div className="flex space-x-1">
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl border"
                            style={{
                                background: 'hsl(0 0% 100% / 0.9)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 6px -1px hsl(224 65% 33% / 0.1)',
                                borderColor: 'hsl(224 15% 91%)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px hsl(224 65% 33% / 0.15)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px hsl(224 65% 33% / 0.1)';
                            }}
                        >
                            <Quote
                                className="w-10 h-10 mb-4"
                                style={{ color: 'hsl(224 65% 50% / 0.2)' }}
                            />
                            <p
                                className="text-lg italic mb-6"
                                style={{ color: 'hsl(0 0% 45%)' }}
                            >
                                "Smart P&IDs improved handover quality."
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p
                                        className="font-semibold"
                                        style={{ color: 'hsl(224 65% 33%)' }}
                                    >
                                        Ops Head
                                    </p>
                                    <p
                                        className="text-sm"
                                        style={{ color: 'hsl(0 0% 45%)' }}
                                    >
                                        Pharma (EU)
                                    </p>
                                </div>
                                <div className="flex space-x-1">
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                    <Star
                                        className="w-4 h-4"
                                        style={{ fill: 'hsl(224 65% 50%)', color: 'hsl(224 65% 50%)' }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-sm text-center mt-8"
                        style={{ color: 'hsl(0 0% 45%)' }}
                    >
                        Note: Client names withheld under NDA. Full references available upon request.
                    </motion.p>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-24 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
            >
                <div
                    className="absolute inset-0 opacity-50"
                    style={{ background: 'linear-gradient(135deg, hsl(224 65% 33%), hsl(224 65% 50%))' }}
                />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ color: 'hsl(0 0% 100%)' }}
                        >
                            Let's Build Together
                        </h2>
                        <p
                            className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
                            style={{ color: 'hsl(0 0% 100% / 0.9)' }}
                        >
                            Share your scope, standards, and timeline. We'll reply with a clear deliverables plan and schedule.
                        </p>

                        <div
                            className="inline-block px-8 py-6 rounded-2xl border mb-8"
                            style={{
                                background: 'hsl(0 0% 100% / 0.1)',
                                backdropFilter: 'blur(12px)',
                                borderColor: 'hsl(0 0% 100% / 0.2)'
                            }}
                        >
                            <p
                                className="text-lg mb-2"
                                style={{ color: 'hsl(0 0% 100%)' }}
                            >
                                Email: <a
                                    href="mailto:info@kleosengineering.com"
                                    className="underline transition-colors"
                                    style={{ color: 'hsl(0 0% 100%)' }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.color = 'hsl(224 65% 50%)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.color = 'hsl(0 0% 100%)';
                                    }}
                                >
                                    info@kleosengineering.com
                                </a>
                            </p>
                            <p
                                className="text-sm"
                                style={{ color: 'hsl(0 0% 100% / 0.8)' }}
                            >
                                Typical response time: within one business day
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:info@kleosengineering.com"
                                className="inline-flex items-center px-8 py-4 font-semibold rounded-full group transition-all duration-300"
                                style={{
                                    background: 'hsl(0 0% 100%)',
                                    color: 'hsl(224 65% 33%)',
                                    boxShadow: '0 10px 15px -3px hsl(224 65% 33% / 0.15)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'hsl(0 0% 90%)';
                                    e.currentTarget.style.boxShadow = '0 0 40px hsl(224 65% 50% / 0.3)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'hsl(0 0% 100%)';
                                    e.currentTarget.style.boxShadow = '0 10px 15px -3px hsl(224 65% 33% / 0.15)';
                                }}
                            >
                                Get in Touch
                                <ArrowRight
                                    className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform"
                                    style={{ color: 'hsl(224 65% 33%)' }}
                                />
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300"
                                style={{
                                    background: 'transparent',
                                    color: 'hsl(0 0% 100%)',
                                    border: '2px solid hsl(0 0% 100% / 0.5)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'hsl(0 0% 100% / 0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                View Our Process
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;