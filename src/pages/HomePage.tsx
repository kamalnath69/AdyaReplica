import { motion } from "framer-motion";
import { Navbar } from "@/components/Header/navbar";
import { Hero } from "@/components/Hero/hero";
import { TrustedBy } from "@/components/TrustedBy/trusted-by";
import { LastInfoSection } from "@/components/LastInfoSection/LastInfoSection";
import { Features } from "@/components/Features/features";
import { Solutions } from "@/components/Solutions/solutions";
import { CTA } from "@/components/CTA/cta";
import { Footer } from "@/components/Footer/footer";
import InfoSection from "../components/Info/InfoSection";
import FullStackAI from "../components/FullStackAi/FullStackAi";
import { Chatbot } from '../components/Chatbot/Chatbot';

export function HomePage() {
  return (
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
        <TrustedBy />
        <LastInfoSection/>
        <Features />
        <Solutions />
        <CTA />
      </main>
      <Footer />
      <Chatbot />
    </motion.div>
  );
}