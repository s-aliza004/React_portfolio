import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Experience from "./components/expsection";
import ProjectDetails from "./components/ProjectDetails"; // ✅ Project Details Page import karo

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ProjectSection />
            <SkillsSection />
            <Experience />
            <ContactSection />
            <Footer />
          </>
        } />
        <Route path="/project/:projectId" element={<ProjectDetails />} /> 
      </Routes>
    </Router>
  );
}
