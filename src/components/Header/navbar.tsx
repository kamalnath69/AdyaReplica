import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import magicIcon from "@/assets/svg/MagicColorFilledIcon-D2LTFJJX.svg";
import adyaLogo from "@/assets/images/adya-logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock/unlock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Lock body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore body scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobileMenuOpen]);

  const handleScheduleDemo = () => {
    navigate('/schedule-demo');
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out",
        isScrolled
          ? "bg-[#0a0a0a]/20 backdrop-blur-xl border-b border-white/5 shadow-xl"
          : "bg-[#0a0a0a]"
      )}
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - aligned to left */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src={adyaLogo} 
            alt="Adya AI" 
            className="h-6 sm:h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation - using the new structure */}
        <nav className="hidden md:flex items-center gap-5">
          <div className="relative group px-3 py-2">
            <NavItem title="Platform" items={NAV_ITEMS.platform} />
          </div>
          <div className="relative group px-3 py-2">
            <NavItem title="Products" items={NAV_ITEMS.products} />
          </div>
          <div className="relative group px-3 py-2">
            <NavItem title="Industries" items={NAV_ITEMS.industries} />
          </div>
          <a href="about-us" className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 hover:text-blue-400 transition-colors ring-transparent border-transparent">
            Company
          </a>
          <button 
            onClick={handleScheduleDemo}
            className="flex text-white ring-white hover:bg-white/25 font-manrope flex-row items-center px-4 py-2 bg-transparent ring-1 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hidden md:flex text-sm !ring-[#428CFC] hover:!bg-blue-900"
          >
            <img src={magicIcon} alt="" className="mr-2 sm:w-6 sm:h-6 h-5 w-5" />
            <span className="font-medium">Schedule Demo</span>
          </button>
        </nav>

        {/* Mobile - only logo, demo button and hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {/* Schedule Demo Button - mobile version */}
          <button 
            onClick={handleScheduleDemo}
            className="flex text-white ring-white hover:bg-white/25 font-manrope flex-row items-center px-3 sm:px-4 py-2 bg-transparent ring-1 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] text-xs sm:text-sm !ring-[#428CFC] hover:!bg-blue-900"
          >
            <img 
              src={magicIcon}
              alt="Magic icon" 
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2" 
            />
            <span className="font-medium hidden xs:inline">Demo</span>
            <span className="font-medium xs:hidden">Demo</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - with maximum z-index and fixed positioning */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-[99998]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Side Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-white/10 md:hidden overflow-y-auto z-[99999]"
              style={{ position: 'fixed' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <img 
                  src={adyaLogo} 
                  alt="Adya AI" 
                  className="h-6 w-auto cursor-pointer"
                  onClick={() => {
                    navigate('/');
                    setIsMobileMenuOpen(false);
                  }}
                />
                <button
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="p-6">
                <div className="flex flex-col space-y-6">
                  <MobileNavItem title="Platform" items={NAV_ITEMS.platform} onClose={() => setIsMobileMenuOpen(false)} />
                  <MobileNavItem title="Products" items={NAV_ITEMS.products} onClose={() => setIsMobileMenuOpen(false)} />
                  <MobileNavItem title="Industries" items={NAV_ITEMS.industries} onClose={() => setIsMobileMenuOpen(false)} />
                  <MobileNavItem title="Company" items={NAV_ITEMS.company} onClose={() => setIsMobileMenuOpen(false)} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

interface NavItemProps {
  title: string;
  items: { title: string; href: string; description?: string; icon?: string }[];
}

interface MobileNavItemProps extends NavItemProps {
  onClose: () => void;
}

function NavItem({ title, items }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 hover:text-blue-400 transition-colors ring-transparent border-transparent"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor" 
          aria-hidden="true" 
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        >
          <path 
            fillRule="evenodd" 
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" 
            clipRule="evenodd"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-80 origin-top-left rounded-2xl bg-black/90 backdrop-blur-2xl shadow-2xl ring-1 ring-white/10 focus:outline-none overflow-hidden z-[110]"
          >
            <div className="py-3">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all duration-150"
                >
                  <div className="flex items-start space-x-3">
                    {item.icon && (
                      <img 
                        src={item.icon} 
                        alt={item.title}
                        className="h-5 w-5 mt-0.5 flex-shrink-0" 
                      />
                    )}
                    <div>
                      <div className="font-medium">{item.title}</div>
                      {item.description && (
                        <div className="text-xs text-white/60 mt-1 leading-relaxed">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ title, items, onClose }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0 pb-4 last:pb-0">
      <button
        className="flex items-center justify-between w-full py-3 text-lg font-medium text-white hover:text-blue-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown 
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-2">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start space-x-3 px-2 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-150"
                  onClick={onClose}
                >
                  {item.icon && (
                    <img 
                      src={item.icon} 
                      alt={item.title}
                      className="h-4 w-4 mt-0.5 flex-shrink-0" 
                    />
                  )}
                  <div>
                    <div className="font-medium">{item.title}</div>
                    {item.description && (
                      <div className="text-xs text-white/60 mt-1 leading-relaxed">
                        {item.description}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}