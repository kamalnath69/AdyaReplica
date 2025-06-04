import { motion } from 'framer-motion';
import Homebg2 from '@/assets/images/HomeBg2.png';
import starIcon from '@/assets/svg/star.svg';
import m1 from '@/assets/svg/m1.svg';
import m2 from '@/assets/svg/m2.svg';
import m3 from '@/assets/svg/m3.svg';
import m4 from '@/assets/svg/m4.svg';
import m5 from '@/assets/svg/m5.svg';

const FullStackAI = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
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

      {/* Service Cards - Grid Layout */}
      <div className="w-full max-w-5xl flex flex-col gap-6 mb-20 z-10">

        {/* 1st Card - Agent Studio with Star */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="group cursor-pointer w-full grid grid-cols-2 gap-3 sm:gap-5 justify-evenly py-[22px] lg:py-8 px-5 lg:px-10 rounded-[14px] sm:rounded-[18px] md:rounded-[22px] lg:rounded-[35px] bg-gradient-to-b from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] h-[150px] sm:h-[165px] md:h-[180px] lg:h-[200px] xl:h-[220px] md:items-center z-[1] relative transform transition-transform duration-300 group-hover:scale-105"
        >
          {/* Star 1 - Top right of 1st card - Responsive */}
          <img 
            src={starIcon} 
            alt="star" 
            className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-10 md:-right-10 lg:-top-11 lg:-right-11 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 animate-pulse"
          />
          <div></div>
          <img src={m1} alt="Agent Studio" className="justify-self-end max-md:w-[20px]" draggable="false" />
          <h3 className="text-[18px] sm:text-[24px] md:text-[36px] lg:text-[42px] xl:text-[54px] font-medium self-end leading-tight md:leading-[54px]">Agent Studio</h3>
          <div className="flex items-end justify-between sm:justify-end min-[370px]:gap-5 md:gap-7 lg:gap-10 xl:gap-16 2xl:gap-20 max-md:col-span-2">
            <p className="font-nunito text-[10px] md:text-[12px] lg:text-[14px] xl:text-base font-medium md:w-[350px] md:place-self-end leading-[12px] md:leading-[18px] lg:leading-[22px]">
              <span>Turn enterprise workflows into AI-powered <br className="sm:hidden" /> agents and copilots, delivering efficiency <br className="sm:hidden" />and cost savings.</span>
            </p>
            <div className="bg-white bg-opacity-10 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right pl-0.5">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* 2nd Card - App Studio */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="group cursor-pointer w-full grid grid-cols-2 gap-3 sm:gap-5 justify-evenly py-[22px] lg:py-8 px-5 lg:px-10 rounded-[14px] sm:rounded-[18px] md:rounded-[22px] lg:rounded-[35px] bg-gradient-to-b from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] h-[150px] sm:h-[165px] md:h-[180px] lg:h-[200px] xl:h-[220px] md:items-center z-[1] transform transition-transform duration-300 group-hover:scale-105"
        >
          <div></div>
          <img src={m2} alt="App Studio" className="justify-self-end max-md:w-[20px]" draggable="false" />
          <h3 className="text-[18px] sm:text-[24px] md:text-[36px] lg:text-[42px] xl:text-[54px] font-medium self-end leading-tight md:leading-[54px]">App Studio</h3>
          <div className="flex items-end justify-between sm:justify-end min-[370px]:gap-5 md:gap-7 lg:gap-10 xl:gap-16 2xl:gap-20 max-md:col-span-2">
            <p className="font-nunito text-[10px] md:text-[12px] lg:text-[14px] xl:text-base font-medium md:w-[350px] md:place-self-end leading-[12px] md:leading-[18px] lg:leading-[22px]">
              <span>Ideas to Apps in Minutes. Deploy <br className="sm:hidden" /> Anywhere. No Code Needed.</span>
            </p>
            <div className="bg-white bg-opacity-10 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right pl-0.5">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
        </motion.div>
        
        {/* 3rd Card - Model Studio */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="group cursor-pointer w-full grid grid-cols-2 gap-3 sm:gap-5 justify-evenly py-[22px] lg:py-8 px-5 lg:px-10 rounded-[14px] sm:rounded-[18px] md:rounded-[22px] lg:rounded-[35px] bg-gradient-to-b from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] h-[150px] sm:h-[165px] md:h-[180px] lg:h-[200px] xl:h-[220px] md:items-center z-[1] transform transition-transform duration-300 group-hover:scale-105"
        >
          <div></div>
          <img src={m3} alt="Model Studio" className="justify-self-end max-md:w-[20px]" draggable="false" />
          <h3 className="text-[18px] sm:text-[24px] md:text-[36px] lg:text-[42px] xl:text-[54px] font-medium self-end leading-tight md:leading-[54px]">Model Studio</h3>
          <div className="flex items-end justify-between sm:justify-end min-[370px]:gap-5 md:gap-7 lg:gap-10 xl:gap-16 2xl:gap-20 max-md:col-span-2">
            <p className="font-nunito text-[10px] md:text-[12px] lg:text-[14px] xl:text-base font-medium md:w-[350px] md:place-self-end leading-[12px] md:leading-[18px] lg:leading-[22px]">
              <span>Build, fine-tune, and scale LLMs - <br className="sm:hidden" /> elegantly tailored to your business.</span>
            </p>
            <div className="bg-white bg-opacity-10 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right pl-0.5">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* 4th Card - Cloud Studio with Star */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="group cursor-pointer w-full grid grid-cols-2 gap-3 sm:gap-5 justify-evenly py-[22px] lg:py-8 px-5 lg:px-10 rounded-[14px] sm:rounded-[18px] md:rounded-[22px] lg:rounded-[35px] bg-gradient-to-b from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] h-[150px] sm:h-[165px] md:h-[180px] lg:h-[200px] xl:h-[220px] md:items-center z-[1] relative transform transition-transform duration-300 group-hover:scale-105"
        >
          {/* Star 2 - Top left of 4th card - Responsive */}
          <img 
            src={starIcon} 
            alt="star" 
            className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 md:-top-10 md:-left-10 lg:-top-11 lg:-left-11 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div></div>
          <img src={m4} alt="Cloud Studio" className="justify-self-end max-md:w-[20px]" draggable="false" />
          <h3 className="text-[18px] sm:text-[24px] md:text-[36px] lg:text-[42px] xl:text-[54px] font-medium self-end leading-tight md:leading-[54px]">Cloud Studio</h3>
          <div className="flex items-end justify-between sm:justify-end min-[370px]:gap-5 md:gap-7 lg:gap-10 xl:gap-16 2xl:gap-20 max-md:col-span-2">
            <p className="font-nunito text-[10px] md:text-[12px] lg:text-[14px] xl:text-base font-medium md:w-[350px] md:place-self-end leading-[12px] md:leading-[18px] lg:leading-[22px]">
              <span>Flexible AI deployment - optimized to <br className="sm:hidden" /> scale on any cloud or on-premises.</span>
            </p>
            <div className="bg-white bg-opacity-10 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right pl-0.5">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* 5th Card - AI Marketplace with Star */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="group cursor-pointer w-full grid grid-cols-2 gap-3 sm:gap-5 justify-evenly py-[22px] lg:py-8 px-5 lg:px-10 rounded-[14px] sm:rounded-[18px] md:rounded-[22px] lg:rounded-[35px] bg-gradient-to-b from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] h-[150px] sm:h-[165px] md:h-[180px] lg:h-[200px] xl:h-[220px] md:items-center z-[1] relative transform transition-transform duration-300 group-hover:scale-105"
        >
          {/* Star 3 - Bottom right of 5th card - Responsive */}
          <img 
            src={starIcon} 
            alt="star" 
            className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-10 lg:-bottom-11 lg:-right-11 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <div></div>
          <img src={m5} alt="AI Marketplace" className="justify-self-end max-md:w-[20px]" draggable="false" />
          <h3 className="text-[18px] sm:text-[24px] md:text-[36px] lg:text-[42px] xl:text-[54px] font-medium self-end leading-tight md:leading-[54px]">AI Marketplace</h3>
          <div className="flex items-end justify-between sm:justify-end min-[370px]:gap-5 md:gap-7 lg:gap-10 xl:gap-16 2xl:gap-20 max-md:col-span-2">
            <p className="font-nunito text-[10px] md:text-[12px] lg:text-[14px] xl:text-base font-medium md:w-[350px] md:place-self-end leading-[12px] md:leading-[18px] lg:leading-[22px]">
              <span>Intelligent, ready to use agents for <br className="sm:hidden" /> fast, accurate operations.</span>
            </p>
            <div className="bg-white bg-opacity-10 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right pl-0.5">
                <path d="m9 18 6-6-6-6"></path>
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
          className="w-full h-auto object-cover opacity-100"
        />
      </div>
    </div>
  );
};

export default FullStackAI;