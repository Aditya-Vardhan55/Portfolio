import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import StarField from './components/StarField';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
    <div className="min-h-screen galaxy-background text-white overflow-x-hidden relative theme-transition">
      <StarField />
      <ThemeSwitcher />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
    </ThemeProvider>
  );
}

export default App;