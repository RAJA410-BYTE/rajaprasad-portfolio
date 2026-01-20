import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import FloatingElements from './components/FloatingElements';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <FloatingElements />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Raja Prasad. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
