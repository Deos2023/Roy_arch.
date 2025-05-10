'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Enhanced animation values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);

  return (
    <motion.div 
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-25%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* First Section - Enhanced with better spacing and typography */}
      <section className='relative py-20 px-6 md:px-12 lg:px-24'>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col gap-12"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2
            }}
          >
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                delay: 0.4,
                duration: 0.8
              }}
            >
              <span className="block text-gray-500 text-lg sm:text-xl mb-4">ROY ARCHITECTS & ENGINEERS</span>
              <span className="block">We transform visions into</span>
              <span className="block text-green-600">exceptional spaces</span>
            </motion.h1>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.6,
                duration: 0.6
              }}
            >
              <motion.button 
                className="px-8 py-3 bg-gray-800 text-white rounded-full text-lg font-medium hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                About Our Studio
              </motion.button>
              <motion.button 
                className="px-8 py-3 bg-green-600 text-white rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - More sophisticated layout */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.2,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
                Our <span className="text-green-600">Signature</span> Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                Where innovative design meets impeccable execution
              </p>
            </div>
            <motion.button 
              className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <span className="text-lg font-medium">View all projects</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>

          {/* Enhanced Project Grid with better animations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              className="relative w-full h-[70vh] rounded-2xl overflow-hidden"
              style={{ y: y1 }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Image
                src="/img2.jpeg" // Replace with your image
                alt="Luxury Residence Project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute bottom-8 left-8">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-medium text-gray-900">Villa Serenity</h3>
                  <p className="text-gray-600">Modern Luxury Residence</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col gap-8"
              style={{ y: y2 }}
            >
              <motion.div 
                className="relative w-full h-[33vh] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Image
                  src="/blog5.jpeg" // Replace with your image
                  alt="Commercial Complex"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
                    <h3 className="text-xl font-medium text-gray-900">Horizon Towers</h3>
                    <p className="text-gray-600">Mixed-Use Development</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative w-full h-[33vh] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Image
                  src="/blog1.jpeg" // Replace with your image
                  alt="Interior Design Project"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
                    <h3 className="text-xl font-medium text-gray-900">Azure Interiors</h3>
                    <p className="text-gray-600">Premium Office Spaces</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhatWeDo;