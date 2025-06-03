import { motion, AnimatePresence } from "framer-motion";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { Navbar } from "@/components/Header/navbar";
import { Hero } from "@/components/Hero/hero";
import { TrustedBy } from "@/components/trusted-by";
import { LastInfoSection } from "@/components/LastInfoSection";
import { Features } from "@/components/features";
import { Solutions } from "@/components/Solutions/solutions";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/Footer/footer";
import { ThemeProvider } from "@/components/theme-provider";
import InfoSection from "./components/Info/InfoSection";
import FullStackAI from "./components/FullStackAi";
import { ScheduleDemo } from './pages/ScheduleDemo';

// Home page component
function HomePage() {
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
    </motion.div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider defaultTheme="dark">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/schedule-demo" element={<ScheduleDemo />} />
              {/* Add other routes */}
            </Routes>
          </AnimatePresence>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;