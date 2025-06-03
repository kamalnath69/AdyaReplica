import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import magicIcon from "@/assets/svg/MagicColorFilledIcon-D2LTFJJX.svg";
import adyaLogo from "@/assets/images/adya-logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-[#0a0a0a]/20 backdrop-blur-xl border-b border-white/5 shadow-xl"
          : "bg-[#0a0a0a]"
      )}
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
        {/* Logo - aligned to left with proper spacing */}
        <div className="flex items-center">
          <img 
            src={adyaLogo} 
            alt="Adya AI" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation - centered */}
        <nav className="hidden items-center space-x-8 md:flex">
          <NavItem title="Platform" items={NAV_ITEMS.platform} />
          <NavItem title="Products" items={NAV_ITEMS.products} />
          <NavItem title="Industries" items={NAV_ITEMS.industries} />
          <NavItem title="Company" items={NAV_ITEMS.company} />
        </nav>

        {/* Schedule Demo Button - aligned to right */}
        <div className="hidden md:flex items-center">
          <button 
            className="flex text-white ring-white hover:bg-white/25 font-manrope flex-row items-center px-4 py-2 bg-transparent ring-1 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hidden md:flex text-sm !ring-[#428CFC] hover:!bg-blue-900"
          >
            <img 
              src={magicIcon}
              alt="Magic icon" 
              className="sm:w-6 sm:h-6 h-5 w-5" 
            />
            <span className="font-medium"> Schedule Demo</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-black/95 backdrop-blur-xl border-t border-white/10 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                <MobileNavItem title="Platform" items={NAV_ITEMS.platform} />
                <MobileNavItem title="Products" items={NAV_ITEMS.products} />
                <MobileNavItem title="Industries" items={NAV_ITEMS.industries} />
                <MobileNavItem title="Company" items={NAV_ITEMS.company} />
                <button 
                  className="flex items-center justify-center text-white ring-white hover:bg-white/25 ring-1 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_18px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] px-[30px] py-3 bg-transparent gap-2 mt-4 w-full"
                >
                  <img 
                    src={magicIcon}
                    alt="Magic icon" 
                    className="sm:w-6 sm:h-6 h-5 w-5" 
                  />
                  <span className="font-medium">Schedule Demo</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

interface NavItemProps {
  title: string;
  items: { title: string; href: string; description?: string; icon?: any }[];
}

function NavItem({ title, items }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-200 group-hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown 
          className={cn(
            "ml-1 h-3 w-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-80 origin-top-left rounded-2xl bg-black/90 backdrop-blur-2xl shadow-2xl ring-1 ring-white/10 focus:outline-none overflow-hidden"
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
                      <item.icon className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" />
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

function MobileNavItem({ title, items }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="flex items-center justify-between w-full px-2 py-3 text-base font-medium text-white hover:text-blue-300 transition-colors"
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
            <div className="pb-3">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}