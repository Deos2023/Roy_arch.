'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

const BlogPage = () => {
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
      {/* Blog Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-[url('/hero4.jpeg')] bg-cover bg-center bg-no-repeat"
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
            ARCHITECTURAL <span className="text-green-500">INSIGHTS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring design innovation and construction excellence
          </p>
        </motion.div>
      </motion.section>

      {/* Featured Posts */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl sm:text-6xl text-gray-900 mb-16 tracking-tight"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Featured <span className="text-neutral-500">Articles</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Sustainable Materials in Modern Architecture",
                excerpt: "How innovative materials are reshaping eco-friendly design in urban environments",
                date: "May 15, 2023",
                readTime: "8 min read",
                author: "Priyanka Chatterjee",
                image: "/img1.jpeg"
              },
              {
                title: "The Future of High-Rise Structural Engineering",
                excerpt: "Exploring seismic-resistant designs for tomorrow's skyscrapers",
                date: "April 28, 2023",
                readTime: "12 min read",
                author: "Arjun Mehta",
                image: "/img2.jpeg"
              }
            ].map((post, index) => (
              <motion.article
                key={index}
                className="group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-80 w-full mb-6 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 bg-green-600 text-white px-4 py-2">
                    Featured
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FiCalendar className="mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <FiClock className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-cor tracking-tight text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-gray-500">
                  <FiUser className="mr-2" />
                  <span>By {post.author}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-center mb-16 text-3xl sm:text-5xl text-gray-900 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Latest <span className="text-green-600">Articles</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
  {
    title: "Bengali Architectural Heritage Preservation",
    excerpt: "Documenting traditional techniques for contemporary adaptation",
    date: "March 22, 2023",
    readTime: "6 min read",
    category: "Heritage",
    image: "/blog1.jpeg"
  },
  {
    title: "Smart Home Integration in Residential Design",
    excerpt: "Balancing technology with aesthetic considerations",
    date: "March 10, 2023",
    readTime: "5 min read",
    category: "Residential",
    image: "/blog2.jpeg"
  },
  {
    title: "Cost-Effective Commercial Space Planning",
    excerpt: "Maximizing functionality without compromising design",
    date: "February 28, 2023",
    readTime: "7 min read",
    category: "Commercial",
    image: "/blog3.jpeg"
  },
  {
    title: "Urban Green Spaces in High-Density Areas",
    excerpt: "Innovative solutions for vertical gardens and pocket parks",
    date: "February 15, 2023",
    readTime: "9 min read",
    category: "Urban Design",
    image: "/blog4.jpeg"
  },
  {
    title: "Adaptive Reuse of Industrial Buildings",
    excerpt: "Case studies of successful warehouse conversions",
    date: "January 30, 2023",
    readTime: "10 min read",
    category: "Adaptive Reuse",
    image: "/blog5.jpeg"
  },
  {
    title: "Lighting Strategies for Public Buildings",
    excerpt: "Enhancing user experience through daylight optimization",
    date: "January 18, 2023",
    readTime: "6 min read",
    category: "Lighting Design",
    image: "/blog1.jpeg"
  }
]
.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white p-6 border border-gray-200 group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: Math.floor(index/3) * 0.1 + (index%3) * 0.05, duration: 0.6 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                  borderColor: "#10B981"
                }}
              >
                <div className="relative h-48 w-full mb-4 overflow-hidden">
                <Image
  src={post.image}
  alt={post.title}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-500"
/>
                  <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FiCalendar className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-cor tracking-tight text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-5xl font-cor font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            STAY <span className="text-green-600">INFORMED</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Subscribe to receive our latest articles and design insights
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-6 py-3 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;