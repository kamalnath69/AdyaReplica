import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PlatformOverview } from "@/components/platform-overview";
import { SolutionsOverview } from "@/components/solutions-overview";
import { TrustedBy } from "@/components/trusted-by";
import { InfoSection } from "@/components/info-section";
import { Features } from "@/components/features";
import { Solutions } from "@/components/solutions";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-black font-['Inter']"
        >
          <Navbar />
          <main>
            <Hero />
            <PlatformOverview />
            <SolutionsOverview />
            <TrustedBy />
            <InfoSection />
            <Features />
            <Solutions />
            <InfoSection reverse />
            <CTA />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;