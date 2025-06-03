import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/button';
import eyeLogo from '@/assets/svg/eye-logo.svg';
import vanijVideo from '@/assets/video/vanij.mp4';
import vanijThumbnail from '@/assets/images/vanij-thumbnail.png';
import Featurepage from './Featurepage';
import agentsNetworkImage from '@/assets/images/agent-network.png';

const InfoSection = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-10 gap-20">
      {/* Hero Content Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-12 mt-16 sm:mt-20 md:mt-24 lg:mt-28"
      >
        <img src={eyeLogo} alt="Eye Logo" className="w-20 h-20 sm:w-24 sm:h-24" />
        
        <p
          className="text-center font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] max-w-[720px] leading-tight"
          style={{
            background: 'linear-gradient(120deg, rgb(255, 255, 255) 55.55%, rgb(66, 140, 252) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Discover a cutting-edge orchestration platform that empowers businesses to build and deploy
          customized AI Agents and enterprise apps in minutes.
        </p>

        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-[30px] py-[12px] font-medium font-manrope text-base z-50">
          Check it out
        </button>
      </motion.div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl"
      >
        <div className="relative group">
          <div className="aspect-video w-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/10 to-indigo-600/10 backdrop-blur-sm">
            <video 
              src={vanijVideo} 
              poster={vanijThumbnail}
              controls
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full flex justify-center"
      >
        <Featurepage />
      </motion.div>

      {/* Multi-Agent Network Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl flex justify-center px-4"
      >
        <div className="relative w-full max-w-4xl">
          <img 
            src={agentsNetworkImage} 
            alt="Multi-Agent Network Diagram" 
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Multi-Agent Framework Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-[1000px] flex flex-col items-center justify-center px-4 py-10 gap-10"
      >
        <p
          className="text-center font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[35px] leading-tight"
          style={{
            background: 'linear-gradient(120deg, rgb(255, 255, 255) 55.55%, rgb(66, 140, 252) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          "Multiple Minds, One Mission:
          <br />
          Our proprietary Multi-Agent Framework enables
          <br />
          AI systems to collaborate, reason, and solve together.
          <br />
          The first step to true AGI."
        </p>
        
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-[30px] py-[12px] font-medium font-manrope text-base z-50">
          Schedule Demo
        </button>
      </motion.div>
    </div>
  );
};

export default InfoSection;