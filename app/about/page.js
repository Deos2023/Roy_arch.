'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FiAward, FiUsers, FiHome, FiMapPin } from 'react-icons/fi';

const AboutPage = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 300], [0, -100]);
  const opacityValue = useTransform(scrollY, [0, 200], [1, 0.5]);
  // Animation values
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div 
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      style={{ opacity }}
    >
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
                className="absolute inset-0 bg-[url('/hero2.jpeg')] bg-cover bg-center bg-no-repeat"
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
            BUILDING <span className="text-green-500">FUTURES</span> SINCE 2016
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming visions into enduring structures .
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
             through innovative design and precision engineering.
          </p>
        </motion.div>
      </motion.section>

      {/* Founding Story */}
      <motion.section 
        className="py-20 px-6 md:px-12 lg:px-24 bg-white"
        style={{ y }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl   text-gray-900 mb-8 tracking-tight">
              Our <span className="text-green-600">Foundation</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Founded in 2016 by Subhadeep Roy, ROY ARCHITECTS & ENGINEERS began as a small Kolkata-based practice with 
                a bold vision: to challenge conventional design norms while maintaining structural integrity.
              </p>
              <p>
                What started as a team of three architects has grown into a multidisciplinary firm of 45+ professionals, 
                completing 90+ projects across residential, commercial, and institutional sectors.
              </p>
              <p>
                Our approach combines traditional Bengali architectural influences with cutting-edge technology, creating 
                spaces that respect their context while pushing boundaries.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative h-96 w-full"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image
              src="/ourFoun.jpeg" // Replace with founder/early projects image
              alt="Founding team"
              fill
              className="object-cover shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-neutral-700 text-white p-4 w-3/4">
              <h3 className="font-bold text-lg">Subhadeep Roy</h3>
              <p className="text-sm">Founder & Principal Architect</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="  text-center  mb-16 text-3xl sm:text-5xl   text-gray-900  tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-green-600">Design Philosophy</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiAward className="w-8 h-8" />,
                title: "Innovation",
                content: "We challenge conventions with forward-thinking solutions that balance aesthetics and functionality."
              },
              {
                icon: <FiHome className="w-8 h-8" />,
                title: "Contextual Design",
                content: "Every project responds to its cultural, environmental, and urban context."
              },
              {
                icon: <FiUsers className="w-8 h-8" />,
                title: "Client-Centric",
                content: "Collaboration is at our core - we listen first, then design."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 border border-gray-200"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              >
                <div className="text-green-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-cor text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl  text-gray-900 mb-4     tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-green-600">Process</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-16 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From initial concept to final construction, our methodology ensures precision at every stage.
          </motion.p>
          
          <div className="space-y-16">
            {[
              {
                title: "Discovery & Analysis",
                content: "Detailed site studies, client interviews, and regulatory research form our foundation.",
                stats: "2-4 Weeks"
              },
              {
                title: "Concept Development",
                content: "Our team generates multiple design approaches through sketches and 3D modeling.",
                stats: "3-5 Weeks"
              },
              {
                title: "Design Development",
                content: "Technical drawings, material selections, and engineering integrations.",
                stats: "4-8 Weeks"
              },
              {
                title: "Construction",
                content: "On-site supervision ensuring design intent meets execution quality.",
                stats: "Varies by Project"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-3 gap-8 border-b border-gray-200 pb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              >
                <div>
                  <span className="text-5xl font-bold text-gray-300">0{index + 1}</span>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-cor tracking-tight text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.content}</p>
                  <div className="text-green-600 font-medium">{step.stats}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl tracking-tight text-white mb-4">
              Meet The <span className="text-green-400">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our multidisciplinary team brings diverse expertise to every project.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Subhadeep Roy",
                role: "Principal Architect",
                expertise: "Design Strategy, Project Management"
              },
              {
                name: "Priyanka Chatterjee",
                role: "Senior Architect",
                expertise: "Residential Design, 3D Visualization"
              },
              {
                name: "Arjun Mehta",
                role: "Structural Engineer",
                expertise: "Seismic Design, High-Rise Structures"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-64 bg-gray-700 mb-4 relative overflow-hidden">
                  <Image
                    src={`/team-${index+1}.jpg`} // Replace with team photos
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-green-400 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </motion.div>
  );
};

export default AboutPage;