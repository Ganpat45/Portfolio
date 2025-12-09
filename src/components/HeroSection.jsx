"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Ganpat1 from "../assets/Ganpat1.jpg";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, 
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 md:pt-20">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className="absolute inset-0 bg-blue-800 z-10"></div>

      
      <motion.div
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a href="https://github.com/Ganpat45" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
          <Github className="w-6 h-6 text-white hover:text-cyan-400 transition-colors" />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/Ganpat Makvana" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
          <Linkedin className="w-6 h-6 text-white hover:text-cyan-400 transition-colors" />
        </motion.a>
        <motion.a href="mailto:ganpatlmakvana2001@gmail.com" variants={itemVariants}>
          <Mail className="w-6 h-6 text-white hover:text-cyan-400 transition-colors" />
        </motion.a>
        <motion.a href="https://www.instagram.com/p/CrFUecLStxa6lABs2X3El2HTdiBrK8CeyM3x6E0/?igsh=dnl0cjl4amd4a3hw" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
          <Instagram className="w-6 h-6 text-white hover:text-cyan-400 transition-colors" />
        </motion.a>
      </motion.div>

      <motion.div
        className="relative container mx-auto px-6 lg:px-12 z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12 lg:gap-4">

          
          <motion.div
            className="flex-1 flex justify-center lg:justify-center mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-red-900/50 to-red-950/80 blur-xl animate-pulse"></div>
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-white to-white-500 p-3 sm:p-4 shadow-2xl"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="w-full h-full rounded-full  p-2">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-inner relative">
                    <Image
                      src={Ganpat1}
                      alt="Ganpat1"
                      fill
                      className="object-cover transform-3d transition-shadow hover:transition-opacity"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-2 sm:inset-4 rounded-full border-2 border-red-400/30 animate-pulse"></div>
            </div>
          </motion.div>

         
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8">
            <motion.p
              className="text-cyan-200 text-md sm:text-lg mb-2 font-light tracking-wide"
              variants={itemVariants}
            >
              Hi, I'm a
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-white drop-shadow-lg">Web</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg animate-shimmer-text">
                Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-md"
              variants={itemVariants}
            >
              100% Modern Web Applications Made By Ganpat.
              <br />
              <span className="text-cyan-200 text-md">Specialized in Full Stack, Next.js, React.js and Tailwind CSS.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => scrollToSection && scrollToSection('projects')}
                className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full border border-cyan-400/20 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                GET STARTED
              </motion.button>
              <motion.button
                onClick={() => scrollToSection && scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-3 sm:py-4 border-2 border-cyan-400/80 text-cyan-300 font-semibold rounded-full backdrop-blur-sm bg-black/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.2)", color: "#FFFFFF", borderColor: "#67e8f9" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                VIEW PORTFOLIO
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;