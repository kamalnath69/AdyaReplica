import { FOOTER_LINKS } from "@/lib/constants";
import adyaLogo from "@/assets/images/adya-logo.png";

export function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4">
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
        
        <div className="mt-12 border-t border-gray-800 pt-6">
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