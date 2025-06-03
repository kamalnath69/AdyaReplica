import { motion } from 'framer-motion';
import eyeLogo from '@/assets/svg/eye-logo.svg';
import Featurepage from './Featurepage';
import agentsNetworkImage from '@/assets/images/agent-network.png';
import ellipse4 from '@/assets/images/Ellipse4.png';
import ellipse574 from '@/assets/images/Ellipse574.png';
import ellipse575 from '@/assets/images/Ellipse575.png';
import { useNavigate } from "react-router-dom";

const InfoSection = () => {
  const navigate = useNavigate();

  const handleScheduleDemo = () => {
    navigate('/schedule-demo');
  };

  // Replace this with your actual Google Drive video link
  // To get the correct link: Share your video -> Get link -> Replace 'view?usp=sharing' with 'preview'
  const driveVideoUrl = "https://drive.google.com/file/d/1dt1NYwilEI7ApqWs5TdM0uykoMzA8lwh/preview";
  
  // Alternative: Direct download link format
  // const driveVideoUrl = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-3 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 relative overflow-hidden">
      {/* Background Ellipses - Mobile Responsive */}
      <img 
        src={ellipse575} 
        className="absolute top-2 sm:top-5 md:top-8 lg:top-10 left-0 opacity-30 sm:opacity-50 md:opacity-70 lg:opacity-100 z-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-auto scale-75 sm:scale-90 md:scale-100" 
        draggable="false"
        alt=""
      />
      <img 
        src={ellipse574} 
        className="absolute top-[15%] sm:top-[20%] md:top-[25%] right-0 opacity-30 sm:opacity-50 md:opacity-70 lg:opacity-100 z-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-auto scale-75 sm:scale-90 md:scale-100" 
        draggable="false"
        alt=""
      />
      <img 
        src={ellipse4} 
        className="absolute top-[35%] sm:top-[40%] md:top-[45%] lg:top-[50%] left-0 opacity-30 sm:opacity-50 md:opacity-70 lg:opacity-100 z-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-auto scale-75 sm:scale-90 md:scale-100" 
        draggable="false"
        alt=""
      />
      <img 
        src={ellipse574} 
        className="absolute top-[55%] sm:top-[60%] md:top-[70%] lg:top-[75%] right-0 opacity-30 sm:opacity-50 md:opacity-70 lg:opacity-100 z-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-auto scale-75 sm:scale-90 md:scale-100" 
        draggable="false"
        alt=""
      />
      <img 
        src={ellipse575} 
        className="absolute bottom-2 sm:bottom-5 md:bottom-8 lg:bottom-10 left-0 opacity-30 sm:opacity-50 md:opacity-70 lg:opacity-100 z-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-auto scale-75 sm:scale-90 md:scale-100" 
        draggable="false"
        alt=""
      />

      {/* Hero Content Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 relative z-10 max-w-5xl mx-auto w-full"
      >
        <img 
          src={eyeLogo} 
          alt="Eye Logo" 
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28" 
        />
        
        <p
          className="text-center font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] leading-tight sm:leading-snug md:leading-relaxed lg:leading-tight px-2 sm:px-4"
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

        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-4 sm:px-6 md:px-8 lg:px-[30px] py-2.5 sm:py-3 md:py-[12px] font-medium font-manrope text-xs sm:text-sm md:text-base lg:text-lg z-10 w-auto min-w-[120px] sm:min-w-[140px]">
          Check it out
        </button>
      </motion.div>

      {/* Video Section - Google Drive Embed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-[280px] sm:max-w-[480px] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl relative z-10 px-1 sm:px-2 md:px-0"
      >
        <div className="relative group">
          <div className="aspect-video w-full rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/10 to-indigo-600/10 backdrop-blur-sm">
            <iframe
              src={driveVideoUrl}
              className="w-full h-full object-cover"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Demo Video"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full flex justify-center relative z-10 px-1 sm:px-2 md:px-4"
      >
        <Featurepage />
      </motion.div>

      {/* Multi-Agent Network Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full max-w-[280px] sm:max-w-[480px] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl flex justify-center px-2 sm:px-4 md:px-6 lg:px-8 relative z-10"
      >
        <div className="relative w-full">
          <img 
            src={agentsNetworkImage} 
            alt="Multi-Agent Network Diagram" 
            className="w-full h-auto object-contain rounded-lg sm:rounded-xl md:rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Multi-Agent Framework Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-[280px] sm:max-w-[480px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10 gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative z-10"
      >
        <p
          className="text-center font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-tight sm:leading-snug md:leading-relaxed lg:leading-tight"
          style={{
            background: 'linear-gradient(120deg, rgb(255, 255, 255) 55.55%, rgb(66, 140, 252) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          <span className="block">"Multiple Minds, One Mission:</span>
          <span className="block sm:inline"> Our proprietary Multi-Agent</span>
          <span className="hidden sm:inline"> </span>
          <span className="block sm:inline">Framework enables</span>
          <br className="hidden md:block" />
          <span className="block sm:inline"> AI systems to collaborate,</span>
          <span className="hidden sm:inline"> </span>
          <span className="block sm:inline">reason, and solve together.</span>
          <br className="hidden md:block" />
          <span className="block"> The first step to true AGI."</span>
        </p>
        
        <button 
          onClick={handleScheduleDemo} 
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-4 sm:px-6 md:px-8 lg:px-[30px] py-2.5 sm:py-3 md:py-[12px] font-medium font-manrope text-xs sm:text-sm md:text-base lg:text-lg z-10 w-auto min-w-[140px] sm:min-w-[160px]"
        >
          Schedule Demo
        </button>
      </motion.div>
    </div>
  );
};

export default InfoSection;