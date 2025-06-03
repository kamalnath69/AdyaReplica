import { FOOTER_LINKS, INVESTORS, SOCIAL_LINKS } from "@/lib/constants";
import adyaLogo from "@/assets/images/adya-logo.png";

// Social Media Icons
const LinkedInIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
  </svg>
);

const getSocialIcon = (iconType: string) => {
  switch (iconType) {
    case 'linkedin':
      return <LinkedInIcon />;
    case 'facebook':
      return <FacebookIcon />;
    case 'instagram':
      return <InstagramIcon />;
    default:
      return null;
  }
};

export function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img 
              src={adyaLogo} 
              alt="Adya AI" 
              className="h-8 w-auto mb-6"
            />
            <p className="mt-4 max-w-xs text-gray-400">
              The AI orchestration platform that empowers businesses to build and deploy custom AI solutions.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Investors and Connect With Us Section */}
        <div className="mt-16 border-t border-gray-800 pt-12">
          <div className="flex max-md:flex-col max-md:gap-10 md:justify-between">
            {/* Our Investors */}
            <div className="space-y-5">
              <p className="bg-clip-text text-transparent font-manrope font-semibold text-xl bg-gradient-to-r from-white to-[#428CFC] w-fit">
                Our Investors
              </p>
              <div className="flex gap-4">
                {INVESTORS.map((investor, index) => (
                  <div key={index} className="py-2 px-11 bg-white rounded-xl">
                    <img 
                      src={investor.logo} 
                      alt={investor.name}
                      className="h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Connect with Us */}
            <div className="md:w-[26rem] space-y-5 flex flex-col items-start md:items-end">
              <p className="bg-clip-text text-transparent font-manrope font-semibold text-xl bg-gradient-to-r from-white to-[#428CFC] w-fit">
                Connect with Us
              </p>
              <div className="flex gap-10">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-white hover:text-white/80 transition-colors"
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-gray-400 md:flex-row">
            <div>© 2025 Adya AI. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}