import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Header/navbar";
import { Hero } from "@/components/Hero/hero";
import { SolutionsOverview } from "@/components/solutions-overview";
import { TrustedBy } from "@/components/trusted-by";
import { LastInfoSection } from "@/components/LastInfoSection";
import { Features } from "@/components/features";
import { Solutions } from "@/components/solutions";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import InfoSection from "./components/Info/InfoSection";
import FullStackAI from "./components/FullStackAi";

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
            <InfoSection/>
            <FullStackAI/>
            <SolutionsOverview />
            <TrustedBy />
            <LastInfoSection/>
            <Features />
            <Solutions />
            <CTA />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;