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
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 gap-12 sm:gap-16 lg:gap-20 xl:gap-24 relative overflow-hidden">
      {/* Background Ellipses - Responsive positioning */}
      <img 
        src={ellipse575} 
        className="absolute top-5 sm:top-10 left-0 opacity-60 sm:opacity-80 lg:opacity-100 z-0 w-16 sm:w-20 md:w-24 lg:w-auto" 
        draggable="false"
        alt=""
      />
      <img 
        src={ellipse574} 
        className="absolute top-[20%] sm:top-[25%] right-0 opacity-60 sm:opacity-80 lg:opacity-100 z-0 w-16 sm:w-20 md:w-24 lg:w-auto" 
        draggable="false"
        alt=""
      />
      <img 
        src={ellipse4} 
        className="absolute top-[40%] sm:top-[50%] left-0 opacity-60 sm:opacity-80 lg:opacity-100 z-0 w-16 sm:w-20 md:w-24 lg:w-auto" 
        draggable="false"
        alt=""
      />
      <img 
        src={ellipse574} 
        className="absolute top-[65%] sm:top-[75%] right-0 opacity-60 sm:opacity-80 lg:opacity-100 z-0 w-16 sm:w-20 md:w-24 lg:w-auto" 
        draggable="false"
        alt=""
      />
      <img 
        src={ellipse575} 
        className="absolute bottom-5 sm:bottom-10 left-0 opacity-60 sm:opacity-80 lg:opacity-100 z-0 w-16 sm:w-20 md:w-24 lg:w-auto" 
        draggable="false"
        alt=""
      />

      {/* Hero Content Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 relative z-10 max-w-5xl mx-auto"
      >
        <img 
          src={eyeLogo} 
          alt="Eye Logo" 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" 
        />
        
        <p
          className="text-center font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[720px] xl:max-w-[900px] leading-tight sm:leading-snug lg:leading-tight px-2"
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

        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-6 sm:px-8 lg:px-[30px] py-3 sm:py-[12px] font-medium font-manrope text-sm sm:text-base lg:text-lg z-10">
          Check it out
        </button>
      </motion.div>

      {/* Video Section - Google Drive Embed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl relative z-10 px-2 sm:px-0"
      >
        <div className="relative group">
          <div className="aspect-video w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/10 to-indigo-600/10 backdrop-blur-sm">
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
        className="w-full flex justify-center relative z-10 px-2 sm:px-4"
      >
        <Featurepage />
      </motion.div>

      {/* Multi-Agent Network Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl flex justify-center px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="relative w-full">
          <img 
            src={agentsNetworkImage} 
            alt="Multi-Agent Network Diagram" 
            className="w-full h-auto object-contain rounded-xl sm:rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Multi-Agent Framework Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-[300px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 gap-6 sm:gap-8 lg:gap-10 relative z-10"
      >
        <p
          className="text-center font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight sm:leading-snug lg:leading-tight"
          style={{
            background: 'linear-gradient(120deg, rgb(255, 255, 255) 55.55%, rgb(66, 140, 252) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          <span className="block sm:inline">"Multiple Minds, One Mission:</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline"> Our proprietary Multi-Agent Framework enables</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline"> AI systems to collaborate, reason, and solve together.</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline"> The first step to true AGI."</span>
        </p>
        
        <button 
          onClick={handleScheduleDemo} 
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-6 sm:px-8 lg:px-[30px] py-3 sm:py-[12px] font-medium font-manrope text-sm sm:text-base lg:text-lg z-10"
        >
          Schedule Demo
        </button>
      </motion.div>
    </div>
  );
};

export default InfoSection;