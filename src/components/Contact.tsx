import React, { useState } from 'react';
import { Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      id="contact"
      className="py-24 bg-light-gray dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-2">Let’s Discuss Your Project</h2>
          <p className="text-lg text-dark-gray dark:text-gray-300 max-w-2xl mx-auto leading-tight">
            From our base in India, share your requirements for a tailored plan with deliverables and timelines.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg dark:bg-gray-700 space-y-6"
          >
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-green transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
            {submitStatus === 'success' && <p className="text-green-600 mt-4">Message sent successfully!</p>}
            {submitStatus === 'error' && <p className="text-red-600 mt-4">Error sending message. Please try again.</p>}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg dark:bg-gray-700 space-y-6">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-primary dark:text-blue-400" />
                  <div>
                    <p className="font-semibold text-primary dark:text-white mb-0">Email</p>
                    <a
                      href="mailto:info@kleosengineering.com"
                      className="text-secondary hover:underline text-sm dark:text-blue-400"
                    >
                      info@kleosengineering.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-5 w-5 text-primary dark:text-blue-400" />
                  <div>
                    <p className="font-semibold text-primary dark:text-white mb-0">Response Time</p>
                    <p className="text-dark-gray dark:text-gray-300 text-sm mb-0">Within 24 business hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light-gray rounded-2xl p-8 dark:bg-blue-900 space-y-4">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Request RFP Template</h3>
              <p className="text-dark-gray dark:text-gray-300 text-sm mb-2 leading-tight">
                Use our structured RFP template to define your project needs effectively.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-green transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
                aria-label="Download RFP template"
              >
                Download Template
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

export default Contact;
