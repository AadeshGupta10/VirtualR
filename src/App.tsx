import { ThemeProvider } from "./context/Themeprovider";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="container px-2 mx-auto scroll-smooth">
        <HeroSection />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
        <Footer />
    </ThemeProvider>
  );
};

export default App;
