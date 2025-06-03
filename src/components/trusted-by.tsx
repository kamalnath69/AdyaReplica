import { TRUSTED_COMPANIES } from "@/lib/constants";
import ellipseImage from "@/assets/images/Ellipse574.png";
import ellipse573 from "@/assets/images/Ellipse573.png";
import ellipse575 from "@/assets/images/Ellipse575.png";
import adyaBoxes from "@/assets/images/adya-with-boxes.png";

export function TrustedBy() {
  return (
    <>
      {/* New section above trusted partners */}
      <div className="w-full flex max-md:flex-col gap-20 md:gap-10 pt-[50px] sm:pt-[64px] md:pt-[82px] lg:pt-[110px] xl:pt-[140px] pb-[100px] sm:pb-[110px] md:pb-[160px] lg:pb-[140px] xl:pb-[180px] px-0 sm:px-8 md:px-12 lg:px-16 justify-between relative">
        <img 
          src={ellipse573} 
          className="absolute -top-[940px] right-0 z-[0]" 
          draggable="false"
          alt=""
        />
        <img 
          src={ellipse575} 
          className="absolute -top-[300px] left-0 z-[0] max-sm:hidden" 
          draggable="false"
          alt=""
        />
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-20 z-[1] max-md:w-full max-md:items-center max-md:text-center max-xl:w-[60%] max-sm:px-4">
          <p 
            className="w-full xl:w-[640px] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] font-medium"
            style={{
              color: 'white',
              background: 'linear-gradient(105.01deg, rgb(255, 255, 255) 49.25%, rgb(66, 140, 252) 84.23%) text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Adya is at the forefront of catalyzing the AI ecosystem for businesses. We have built the foundational layers of the emerging AI ecosystem.
          </p>
        </div>
        <img 
          className="z-[1] max-md:self-center max-md:max-w-[400px] max-md:w-full w-[40%] h-fit px-4 max-sm:pr-2 sm:px-8 md:px-12 lg:px-0" 
          src={adyaBoxes}
          alt="Adya ecosystem illustration"
        />
      </div>

      {/* Trusted By section */}
      <div className="flex flex-col items-center justify-center gap-[60px] md:gap-20 relative w-full mb-[110px] sm:mb-[180px] md:mb-[240px] lg:mb-[321px]">
        {/* Background ellipse image */}
        <img 
          src={ellipseImage} 
          className="absolute top-0 right-0" 
          draggable="false"
          alt=""
        />
        
        {/* Title */}
        <h1 
          className="font-medium text-[34px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[38px] sm:leading-[42px] md:leading-[48px] lg:leading-[53px] w-fit"
          style={{
            color: 'white',
            background: 'linear-gradient(95.91deg, rgb(255, 255, 255) 16.46%, rgb(66, 140, 252) 116.31%) text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Trusted By
        </h1>
        
        {/* Logo rows container */}
        <div className="flex flex-col gap-5 sm:gap-8 z-[1] w-full">
          {/* First row - sliding left */}
          <div 
            className="overflow-x-hidden flex-nowrap flex w-full group"
            style={{ mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)' }}
          >
            <div className="flex animate-slide-left group-hover:animate-slide-left-paused">
              {/* Repeat the logos multiple times for continuous scrolling */}
              {[...Array(12)].map((_, setIndex) => (
                <div key={setIndex} className="flex">
                  {TRUSTED_COMPANIES.firstRow.map((logo, index) => (
                    <div 
                      key={`${setIndex}-${index}`}
                      className="flex justify-center items-center h-[50px] sm:h-[76px] w-[135px] sm:w-[305px] rounded-[10px] sm:rounded-[20px] bg-[#010313] p-3 px-5 shrink-0 mr-2 sm:mr-7"
                    >
                      <img 
                        src={logo} 
                        className="max-sm:h-full w-fit" 
                        draggable="false"
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Second row - sliding right */}
          <div 
            className="overflow-x-hidden flex-nowrap flex w-full group"
            style={{ mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)' }}
          >
            <div className="flex animate-slide-right group-hover:animate-slide-right-paused">
              {/* Repeat the logos multiple times for continuous scrolling */}
              {[...Array(10)].map((_, setIndex) => (
                <div key={setIndex} className="flex">
                  {TRUSTED_COMPANIES.secondRow.map((logo, index) => (
                    <div 
                      key={`${setIndex}-${index}`}
                      className="flex justify-center items-center h-[50px] sm:h-[76px] w-[135px] sm:w-[305px] rounded-[10px] sm:rounded-[20px] bg-[#010313] p-3 px-5 shrink-0 mr-2 sm:mr-7"
                    >
                      <img 
                        src={logo} 
                        className="max-sm:h-full w-fit" 
                        draggable="false"
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Third row - sliding left */}
          <div 
            className="overflow-x-hidden flex-nowrap flex w-full group"
            style={{ mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)' }}
          >
            <div className="flex animate-slide-left group-hover:animate-slide-left-paused">
              {/* Repeat the logos multiple times for continuous scrolling */}
              {[...Array(10)].map((_, setIndex) => (
                <div key={setIndex} className="flex">
                  {TRUSTED_COMPANIES.thirdRow.map((logo, index) => (
                    <div 
                      key={`${setIndex}-${index}`}
                      className="flex justify-center items-center h-[50px] sm:h-[76px] w-[135px] sm:w-[305px] rounded-[10px] sm:rounded-[20px] bg-[#010313] p-3 px-5 shrink-0 mr-2 sm:mr-7"
                    >
                      <img 
                        src={logo} 
                        className="max-sm:h-full w-fit" 
                        draggable="false"
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}