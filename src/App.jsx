// src/App.jsx

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
