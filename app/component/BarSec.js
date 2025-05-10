"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { FiStar } from 'react-icons/fi';

const BarSec = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Animation values
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div 
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Stats Section */}
      <motion.section 
        className="bg-black py-20"
        style={{ opacity, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: 90, suffix: "+", label: "Projects Done Successfully" },
            { value: 4.8, suffix: <FiStar className="inline text-yellow-400" />, label: "Client Rating" },
            { value: 10, suffix: "+", label: "Years of Experience" },
            { value: 235, suffix: "", label: "Categories" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                <CountUp 
                  end={stat.value} 
                  duration={3} 
                  decimals={stat.value === 4.8 ? 1 : 0}
                  className="inline-block"
                />
                {stat.suffix}
              </h2>
              <p className="text-sm font-medium text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Partner Section */}
      <motion.section 
        className="flex flex-col sm:flex-row justify-between py-20 px-6 md:px-12 lg:px-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div 
          className="sm:w-2/5 mb-10 sm:mb-0"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl font-medium text-gray-900 leading-tight">
            We dare you to name a company <span className="text-green-600 block sm:inline"> we haven't partnered with.</span>
          </h1>
        </motion.div> 
        
        <motion.div 
          className="sm:w-2/5 text-gray-600 text-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            With over a decade in architecture and engineering, we've collaborated with industry leaders across residential, 
            commercial, and institutional sectors. Our portfolio includes award-winning projects with Fortune 500 companies, 
            government agencies, and innovative startups.
          </p>
          <motion.button
            className="mt-6 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Our Partners
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Optional: Animated divider */}
      <motion.div 
        className="w-full h-px bg-gray-200"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default BarSec;