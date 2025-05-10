'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { FiZoomIn, FiDownload, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const GalleryPage = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 300], [0, -100]);

  // Generate image paths
  const images = Array.from({ length: 60 }, (_, i) => `/img/1 (${i + 1}).jpeg`);

  // Lightbox state
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Navigation functions
  const goToPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setIsLoading(true);
      setSelectedImage(selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setIsLoading(true);
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
    >
      {/* Gallery Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-[url('/hero5.jpeg')] bg-cover bg-center bg-no-repeat"
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
            PROJECT <span className="text-green-500">GALLERY</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visual documentation of our architectural journey
          </p>
        </motion.div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl sm:text-6xl text-gray-900 mb-16 tracking-tight"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-green-600">Portfolio</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: Math.floor(index/4) * 0.1 + (index%4) * 0.05, 
                  duration: 0.6 
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={src}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_PLACEHOLDER]"
                    onClick={() => setSelectedImage(index)}
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button 
                    className="text-white p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(index);
                    }}
                  >
                    <FiZoomIn className="w-5 h-5" />
                  </button>
                  <a 
                    href={src} 
                    download 
                    className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiDownload className="w-5 h-5" />
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">Project {index + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
              Load More Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white p-2 hover:bg-gray-800 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FiX className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute left-4 text-white p-2 hover:bg-gray-800 rounded-full transition-colors disabled:opacity-50"
            onClick={goToPrevious}
            disabled={selectedImage === 0}
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="relative w-full max-w-6xl h-[80vh]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse text-white">Loading...</div>
              </div>
            )}
            <Image
              src={images[selectedImage]}
              alt={`Project ${selectedImage + 1}`}
              fill
              className="object-contain"
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
          
          <button 
            className="absolute right-4 text-white p-2 hover:bg-gray-800 rounded-full transition-colors disabled:opacity-50"
            onClick={goToNext}
            disabled={selectedImage === images.length - 1}
          >
            <FiChevronRight className="w-8 h-8" />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            Project {selectedImage + 1} of {images.length}
          </div>
        </div>
      )}

      {/* Gallery CTA */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-5xl font-cor font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            SEE OUR <span className="text-green-400">WORK IN PERSON</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Schedule a visit to our completed projects
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-green-600 text-white font-bold hover:bg-green-700 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Site Visit
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default GalleryPage;