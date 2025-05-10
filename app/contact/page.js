'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactPage = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 300], [0, -100]);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New Website Enquiry:%0A%0AName: ${encodeURIComponent(
      formData.name
    )} %0AEmail: ${encodeURIComponent(
      formData.email
    )}%0APhone: ${encodeURIComponent(
      formData.phone
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/918961598876?text=${text}`, "_blank");
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
    >
      {/* Contact Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-[url('/blog1.jpeg')] bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ y: yValue }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div 
          className="relative z-10 max-w-3xl px-6 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-cor font-bold text-white mb-6">
            GET IN <span className="text-green-500">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your next architectural project
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Content */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl text-gray-900 mb-8 tracking-tight">
              Contact <span className="text-neutral-500">Details</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-green-600 mt-1">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-cor text-gray-900 mb-1">Our Office</h3>
                  <p className="text-gray-600">
                    First Floor, 2/50 Viveknagar<br />
                    Jadavpur, Kolkata - 700075<br />
                    West Bengal, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-600 mt-1">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-cor text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    +91 89615 98876<br />
                    Mon-Sat: 10AM - 6PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-600 mt-1">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-cor text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    roy.archen@gmail.com<br />
                    Response within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-600 mt-1">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-cor text-gray-900 mb-1">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9AM - 6PM<br />
                    Saturday: 10AM - 4PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gray-50 p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-cor text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-green-600 text-white font-bold hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[60vh] w-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1257386396196!2d88.3780476!3d22.499465100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271ae1c7954b3%3A0x935c591f2f1e67fc!2sRoy%20Architects%20And%20Engineers!5e0!3m2!1sen!2sin!4v1746853669586!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="filter grayscale(50%) contrast(110%)"
          ></iframe>
        </motion.div>
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-5xl font-cor font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            READY TO <span className="text-green-400">START YOUR PROJECT?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Schedule a free consultation with our team
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-green-600 text-white font-bold hover:bg-green-700 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Consultation
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;