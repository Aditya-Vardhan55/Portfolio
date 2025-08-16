import React from 'react';
import { Brain, Cog, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg themed-text-secondary leading-relaxed">
              Hey there! 👋 I'm Aditya, a passionate AI/ML engineer who believes in pushing the boundaries 
              of what's possible with intelligent systems. My journey began with curiosity about how machines 
              can think and learn, and it has evolved into a mission to create AI solutions that make a real impact.
            </p>
            
            <p className="text-lg themed-text-secondary leading-relaxed">
              With expertise spanning machine learning, generative AI, and full-stack development, I specialize 
              in transforming complex ideas into scalable products. Whether it's building custom AI tools, 
              implementing automation workflows, or developing modern web applications, I bring both technical 
              excellence and creative problem-solving to every project.
            </p>

            <p className="text-lg themed-text-secondary leading-relaxed">
              When I'm not coding the next AI breakthrough, you'll find me exploring the latest developments 
              in GenAI, contributing to open-source projects, or mentoring aspiring developers. I believe 
              the future belongs to those who can harness the power of AI responsibly and creatively. 🌌
            </p>
          </div>

          <div className="grid gap-6">
            <div className="themed-card border rounded-xl p-6 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Brain className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold themed-text-primary">AI/ML Expertise 🧠</h3>
              </div>
              <p className="themed-text-secondary">
                Deep learning, neural networks, NLP, computer vision, and generative AI models
              </p>
            </div>

            <div className="themed-card border rounded-xl p-6 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Cog className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold themed-text-primary">Full-Stack Development ⚙️</h3>
              </div>
              <p className="themed-text-secondary">
                React, Node.js, Python, APIs, databases, and modern web technologies
              </p>
            </div>

            <div className="themed-card border rounded-xl p-6 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold themed-text-primary">Global Impact 🌌</h3>
              </div>
              <p className="themed-text-secondary">
                Helping startups and businesses worldwide leverage AI for growth and innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;