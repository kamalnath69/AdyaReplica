import { motion } from "framer-motion";
import ellipse574 from "@/assets/images/Ellipse574.png";
import ellipse575 from "@/assets/images/Ellipse575.png";
import { useNavigate } from "react-router-dom";

export function CTA() {
  const navigate = useNavigate();

  const handleScheduleDemo = () => {
    navigate('/schedule-demo');
  };
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10"
      >
        <div className="relative overflow-hidden rounded-[14px] sm:rounded-[18px] md:rounded-[22px] lg:rounded-[35px] bg-gradient-to-b from-[rgba(24,36,130,0.17)] to-[rgba(66,140,252,0.17)] p-8 md:p-12 lg:p-16 backdrop-blur-sm border border-blue-500/20">
          
          <div className="relative text-center">
            <h2 
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] font-medium mb-6 md:mb-8"
              style={{
                background: 'linear-gradient(105.01deg, rgb(255, 255, 255) 49.25%, rgb(66, 140, 252) 84.23%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Ready to transform your business with AI?
            </h2>
            <p className="mx-auto max-w-2xl font-nunito text-[16px] md:text-[18px] lg:text-[20px] font-medium text-gray-300 leading-[22px] md:leading-[26px] mb-8 md:mb-10">
              Get started with Adya.ai today and unlock the full potential of AI for your enterprise.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button onClick={handleScheduleDemo} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-[40px] py-[16px] font-medium font-manrope text-lg w-full sm:w-auto">
                Schedule Demo
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-[#428CFC] text-[#428CFC] hover:bg-[#428CFC]/10 px-[40px] py-[16px] font-medium font-manrope text-lg w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}