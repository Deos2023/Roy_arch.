"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 300], [0, -100]);
  const opacityValue = useTransform(scrollY, [0, 200], [1, 0.5]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-[url('/hero.jpeg')] bg-cover bg-center bg-no-repeat"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y: yValue }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content with Scroll-Triggered Opacity */}
      <motion.section 
        className="relative min-h-[100vh] flex pt-32 flex-col items-center justify-center text-center px-4"
        style={{ opacity: opacityValue }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div 
          className="max-w-3xl z-10"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl sm:text-7xl font-extrabold font-cor text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ROY ARCHITECTS & ENGINEERS
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-2xl text-white mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="block">Designing Dreams, Building Realities</span>
            <span className="block mt-2">Where Vision Meets Precision</span>
          </motion.p>

          <motion.button
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;