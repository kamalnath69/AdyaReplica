import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import ellipse573 from "@/assets/images/Ellipse573.png";
import ellipse575 from "@/assets/images/Ellipse575.png";

export function Features() {
  return (
    <section className="bg-black py-[100px] sm:py-[140px] md:py-[180px] relative overflow-hidden">
      {/* Background Ellipses */}
      <img 
        src={ellipse575} 
        className="absolute top-0 left-0 opacity-100 z-0" 
        draggable="false"
        alt=""
      />
      <img 
        src={ellipse573} 
        className="absolute bottom-0 right-0 opacity-100 z-0 max-sm:hidden" 
        draggable="false"
        alt=""
      />
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 z-10 relative"
        >
          <h2 
            className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] font-medium mb-6"
            style={{
              background: 'linear-gradient(105.01deg, rgb(255, 255, 255) 49.25%, rgb(66, 140, 252) 84.23%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Platform Features
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 relative z-10">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center max-w-[280px] group cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <div className="mx-auto flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] border border-blue-500/20 text-[#428CFC] mb-6">
                <feature.icon className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-medium text-white mb-3">
                {feature.title}
              </h3>
              <p className="font-nunito text-[14px] md:text-[16px] font-medium text-gray-300 leading-[18px] md:leading-[22px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}