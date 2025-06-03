import React from 'react';
import { motion } from 'framer-motion';
import Homebg2 from '@/assets/images/HomeBg2.png';
import starIcon from '@/assets/svg/star.svg';
import m1 from '@/assets/svg/m1.svg';
import m2 from '@/assets/svg/m1.svg';
import m3 from '@/assets/svg/m1.svg';
import m4 from '@/assets/svg/m1.svg';
import m5 from '@/assets/svg/m1.svg';

const FullStackAI = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={starIcon} 
          alt="star" 
          className="absolute top-20 right-20 w-4 h-4 animate-pulse"
        />
        <img 
          src={starIcon} 
          alt="star" 
          className="absolute top-32 left-32 w-3 h-3 animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <img 
          src={starIcon} 
          alt="star" 
          className="absolute top-40 right-1/3 w-2 h-2 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <img 
          src={starIcon} 
          alt="star" 
          className="absolute bottom-1/3 left-20 w-3 h-3 animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        <img 
          src={starIcon} 
          alt="star" 
          className="absolute bottom-40 right-16 w-4 h-4 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <img 
          src={starIcon} 
          alt="star" 
          className="absolute top-1/2 right-32 w-3 h-3 animate-pulse"
          style={{ animationDelay: '2.5s' }}
        />
        <img 
          src={starIcon} 
          alt="star" 
          className="absolute top-60 left-16 w-2 h-2 animate-pulse"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center items-center px-4 py-10 mb-16"
      >
        <h1
          className="text-[34px] sm:text-[40px] md:text-[47px] lg:text-[54px] xl:text-[65px] text-center leading-[38px] sm:leading-[42px] md:leading-[48px] lg:leading-[54px] xl:leading-[70px] font-medium z-[1]"
          style={{
            background: 'linear-gradient(108.89deg, rgb(255, 255, 255) 43.71%, rgb(66, 140, 252) 74.14%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Full Stack <span className="text-[#428CFC]">AI</span> for
          <br />
          Businesses
        </h1>
      </motion.div>

      {/* Service Cards - Vertical Layout */}
      <div className="w-full max-w-5xl flex flex-col gap-6 mb-20 z-10">
        
        {/* Model Studio Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={m1} alt="Model Studio" className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-2">Model Studio</h2>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
                  Build, fine-tune, and scale LLMs - elegantly tailored to your business.
                </p>
              </div>
            </div>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-400/30 transition-colors ml-4">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Cloud Studio Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={m2} alt="Cloud Studio" className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-2">Cloud Studio</h2>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
                  Flexible AI deployment - optimized to scale on any cloud or on-premises.
                </p>
              </div>
            </div>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-400/30 transition-colors ml-4">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* AI Marketplace Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={m3} alt="AI Marketplace" className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-2">AI Marketplace</h2>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
                  Intelligent, ready to use agents for fast, accurate operations.
                </p>
              </div>
            </div>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-400/30 transition-colors ml-4">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Agent Studio Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={m4} alt="Agent Studio" className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-2">Agent Studio</h2>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
                  Turn enterprise workflows into AI-powered agents and copilots, delivering efficiency and cost savings.
                </p>
              </div>
            </div>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-400/30 transition-colors ml-4">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* App Studio Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={m5} alt="App Studio" className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-2">App Studio</h2>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
                  Ideas to Apps in Minutes. Deploy Anywhere. No Code Needed.
                </p>
              </div>
            </div>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-400/30 transition-colors ml-4">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Background Image at Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <img 
          src={Homebg2} 
          alt="Background" 
          className="w-full h-auto object-cover opacity-30"
        />
      </div>
    </div>
  );
};

export default FullStackAI;