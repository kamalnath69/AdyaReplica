import { motion, AnimatePresence } from "framer-motion";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { ThemeProvider } from "@/components/theme-provider";
import { HomePage } from './pages/HomePage';
import { ScheduleDemo } from './pages/ScheduleDemo';

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