import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { heroTextReveal } from "@/lib/animations";
import heroBackground from "@/assets/webp/newhomehero-CDcRIB2C.webp";
import magicIcon from "@/assets/svg/MagicColorFilledIcon-D2LTFJJX.svg";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mx-auto max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={heroTextReveal}
            className="font-manrope z-50 text-center max-sm:text-[44px] sm:text-[68px] md:text-[82px] lg:text-[90px] font-medium leading-[44px] sm:leading-[68px] md:leading-[82px] lg:leading-[100px] pb-6 sm:pb-[50px] md:mt-[-50px] mx-1"
            style={{ 
              color: 'white',
              background: 'linear-gradient(95.91deg, rgb(255, 255, 255) 16.46%, rgb(66, 140, 252) 116.31%) text',
              WebkitTextFillColor: 'transparent',
              filter: 'blur(0px)',
              transform: 'translateY(0px)',
              opacity: 1
            }}
          >
            <span className="whitespace-nowrap">One Platform,</span>
            <br></br>Endless AI Possibilities
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ ...heroTextReveal, transition: { delay: 0.2 } }}
            className="font-nunito text-lg md:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[24px] md:leading-[30px] lg:leading-[30px] font-medium text-center z-[1] mb-[50px] sm:mb-[80px]"
            style={{ 
              filter: 'blur(0px)', 
              transform: 'translateZ(0px)', 
              opacity: 1 
            }}
          >
            Full Stack AI for Businesses
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ ...heroTextReveal, transition: { delay: 0.4 } }}
            className="w-fit h-fit z-[1] mx-auto"
          >
            <button 
              className="flex items-center text-white ring-white hover:bg-white/25 ring-1 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_18px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] px-[30px] py-3 bg-transparent gap-2"
            >
              <img 
                src={magicIcon}
                alt="Magic icon" 
                className="sm:w-6 sm:h-6 h-5 w-5" 
              />
              <span className="font-medium">Schedule Demo</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}