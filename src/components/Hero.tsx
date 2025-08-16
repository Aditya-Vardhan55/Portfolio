import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shooting-star"></div>
        <div className="shooting-star delay-1000"></div>
        <div className="shooting-star delay-2000"></div>
      </div>
      
      {/* Floating Planet */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse hidden lg:block"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Building Intelligent Systems
            </span>
            <br />
            <span className="text-white">
              from Earth to the Edge of the Universe
            </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl ml-4">🚀</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            AI/ML Engineer | GenAI Developer | Full-Stack Innovator
          </p>
          
          <p className="text-lg themed-text-secondary max-w-2xl mx-auto mb-8">
            I'm a tech explorer building intelligent systems, GenAI tools, and automation solutions 
            for global businesses. I help startups turn ideas into scalable products using AI, React, and modern APIs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="group themed-button px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 themed-text-primary"
          >
            Hire Me
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => scrollToSection('projects')}
            className="group border-2 themed-text-accent hover:themed-overlay px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 themed-text-primary"
          >
            View Projects
            <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;