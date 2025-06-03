import { motion } from "framer-motion";
import { SOLUTIONS } from "@/lib/constants";
import ellipse574 from "@/assets/images/Ellipse574.png";
import ellipse575 from "@/assets/images/Ellipse575.png";
import starIcon from "@/assets/svg/star.svg";

export function Solutions() {
  return (
    <section className="bg-black py-[100px] sm:py-[140px] md:py-[180px] relative overflow-hidden">
      {/* Background Ellipses */}
      <img 
        src={ellipse574} 
        className="absolute top-0 right-0 opacity-100 z-0" 
        draggable="false"
        alt=""
      />
      <img 
        src={ellipse575} 
        className="absolute bottom-0 left-0 opacity-100 z-0 max-sm:hidden" 
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
            AI Agents for Every Business Need
          </h2>
          <p className="font-nunito text-[14px] md:text-[16px] lg:text-[18px] font-medium text-gray-300 leading-[20px] md:leading-[24px]">
            Pre-built solutions ready to deploy or customize
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`relative group cursor-pointer transform transition-transform duration-300 hover:scale-105 rounded-[14px] sm:rounded-[18px] md:rounded-[22px] lg:rounded-[35px] bg-gradient-to-b from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] p-6 md:p-8 lg:p-10 border border-blue-500/20 backdrop-blur-sm ${
                solution.highlighted ? "relative" : ""
              }`}
            >
              {solution.highlighted && (
                <>
                  <img 
                    src={starIcon} 
                    alt="star" 
                    className="absolute -top-4 -right-4 w-8 h-8 md:w-10 md:h-10 animate-pulse"
                  />
                  <div className="absolute -top-2 right-8 md:right-12 rounded-full bg-[#428CFC] px-3 py-1 text-xs font-medium text-black">
                    Featured
                  </div>
                </>
              )}
              <div
                className={`flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full mb-6 ${
                  solution.highlighted
                    ? "bg-gradient-to-br from-[#428CFC]/20 to-[#428CFC]/10 text-[#428CFC]"
                    : "bg-gradient-to-br from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] text-[#428CFC]"
                }`}
              >
                <solution.icon className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-medium text-white mb-4">
                {solution.title}
              </h3>
              <p className="font-nunito text-[14px] md:text-[16px] font-medium text-gray-300 leading-[18px] md:leading-[22px]">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}