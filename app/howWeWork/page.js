'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FiLayers, FiCheckCircle, FiSettings, FiHome, FiUsers } from 'react-icons/fi';

const HowWeWork = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 300], [0, -100]);
  const opacityValue = useTransform(scrollY, [0, 200], [1, 0.5]);

  return (
    <motion.div 
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
    >
      {/* Process Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-[url('/hero3.jpeg')] bg-cover bg-center bg-no-repeat"
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
            PRECISION <span className="text-green-500">PROCESS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our systematic approach ensures every project meets
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            the highest standards of design and execution.
          </p>
        </motion.div>
      </motion.section>

      {/* Methodology Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl text-gray-900 mb-8 tracking-tight">
              Our <span className="text-neutral-500">Methodology</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              A rigorous 5-phase framework that adapts to project complexity while maintaining design integrity.
            </p>
          </motion.div>

          <div className="space-y-20">
            {[
              {
                icon: <FiLayers className="w-8 h-8" />,
                title: "Discovery & Analysis",
                description: "We begin with comprehensive site analysis, client interviews, and regulatory research.",
                features: [
                  "Site surveys & topographic studies",
                  "Zoning & code compliance review",
                  "Stakeholder requirement documentation"
                ],
                duration: "2-4 Weeks"
              },
              {
                icon: <FiSettings className="w-8 h-8" />,
                title: "Conceptual Design",
                description: "Our team generates multiple design approaches through iterative sketching.",
                features: [
                  "Preliminary massing studies",
                  "Conceptual 3D visualizations",
                  "Material & system exploration"
                ],
                duration: "3-5 Weeks"
              },
              {
                icon: <FiCheckCircle className="w-8 h-8" />,
                title: "Design Development",
                description: "Technical refinement of selected concepts with engineering integration.",
                features: [
                  "Detailed construction drawings",
                  "Structural & MEP coordination",
                  "Sustainability analysis"
                ],
                duration: "4-8 Weeks"
              },
              {
                icon: <FiHome className="w-8 h-8" />,
                title: "Construction Documentation",
                description: "Production of comprehensive bid packages and permit-ready drawings.",
                features: [
                  "Technical specification writing",
                  "Building department submissions",
                  "Bid process management"
                ],
                duration: "6-10 Weeks"
              },
              {
                icon: <FiUsers className="w-8 h-8" />,
                title: "Construction Administration",
                description: "Ongoing site supervision to ensure design intent meets execution quality.",
                features: [
                  "Weekly site inspections",
                  "Submittal reviews",
                  "Punch list management"
                ],
                duration: "Project Duration"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-5 gap-8 border-b border-gray-200 pb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
              >
                <div className="md:col-span-1">
                  <div className="text-green-600 mb-4">{phase.icon}</div>
                  <div className="text-gray-400 font-medium">{phase.duration}</div>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-cor tracking-tight text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 mb-6">{phase.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {phase.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-center mb-16 text-3xl sm:text-5xl text-gray-900 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-green-600">Tech Stack</span>
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "3D Modeling & BIM",
                tools: "Revit, SketchUp, Rhino",
                description: "Advanced modeling for design development"
              },
              {
                title: "Structural Analysis",
                tools: "ETABS, STAAD.Pro",
                description: "Precise engineering calculations"
              },
              {
                title: "Sustainability Tools",
                tools: "Ecotect, Climate Consultant",
                description: "Energy and environmental analysis"
              },
              {
                title: "Project Management",
                tools: "Asana, Microsoft Project",
                description: "Streamlined workflow coordination"
              },
              {
                title: "Visualization",
                tools: "Lumion, Enscape",
                description: "Photorealistic renderings"
              },
              {
                title: "Documentation",
                tools: "Bluebeam, BIM 360",
                description: "Cloud-based collaboration"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 border border-gray-200"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              >
                <h3 className="text-xl font-cor text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-green-600 font-medium mb-3">{tech.tools}</p>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-5xl text-gray-900 mb-16 text-center tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Your <span className="text-green-600">Journey</span> With Us
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2" />
            
            <div className="space-y-16">
              {[
                {
                  title: "Initial Consultation",
                  content: "Free 60-minute meeting to understand your vision"
                },
                {
                  title: "Proposal & Agreement",
                  content: "Detailed scope of work and contract signing"
                },
                {
                  title: "Design Workshops",
                  content: "Collaborative sessions to refine concepts"
                },
                {
                  title: "Progress Reviews",
                  content: "Bi-weekly updates and milestone presentations"
                },
                {
                  title: "Final Delivery",
                  content: "Complete documentation handover"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative pl-16 md:pl-0 md:even:pl-16 md:odd:pr-16 md:odd:text-right"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                >
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'md:left-auto md:right-0'} w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div className={`${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                    <h3 className="text-xl font-cor tracking-tight text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
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
            READY TO START YOUR <span className="text-green-400">PROJECT?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our team is ready to guide you through every step.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-green-600 text-white font-bold hover:bg-green-700 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Free Consultation
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default HowWeWork;