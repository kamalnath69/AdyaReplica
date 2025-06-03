import { motion } from "framer-motion";
import ellipse574 from "@/assets/images/Ellipse574.png";
import ellipse575 from "@/assets/images/Ellipse575.png";

interface InfoSectionProps {
  reverse?: boolean;
}

export function LastInfoSection({ reverse = false }: InfoSectionProps) {
  return (
    <section className="bg-black py-[100px] sm:py-[140px] md:py-[180px] lg:py-[220px] relative overflow-hidden">
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
        <div className={`grid gap-12 lg:gap-20 items-center lg:grid-cols-2 ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`order-2 ${reverse ? 'lg:order-1' : 'lg:order-1'} z-10`}
          >
            <h2 
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] font-medium mb-6 sm:mb-8 md:mb-10 leading-tight"
              style={{
                background: 'linear-gradient(105.01deg, rgb(255, 255, 255) 49.25%, rgb(66, 140, 252) 84.23%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Discover a cutting-edge
              <span className="text-[#428CFC]"> orchestration platform </span>
              that empowers businesses
            </h2>
            <p className="font-nunito text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-300 mb-8 md:mb-10 leading-[20px] md:leading-[24px] lg:leading-[28px]">
              Build and deploy customized AI Agents and enterprise apps in minutes.
              Our platform allows you to connect to any data source, create custom workflows,
              and scale seamlessly across your organization.
            </p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-[30px] py-[12px] font-medium font-manrope text-base">
              Check it out
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`order-1 ${reverse ? 'lg:order-2' : 'lg:order-2'} z-10`}
          >
            <div className="bg-gradient-to-br from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] p-6 md:p-8 lg:p-10 rounded-[14px] sm:rounded-[18px] md:rounded-[22px] lg:rounded-[35px] border border-blue-500/20 backdrop-blur-sm">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-r from-blue-600/20 to-indigo-600/20 flex items-center justify-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/50">Vanij</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}