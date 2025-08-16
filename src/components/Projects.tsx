import React from 'react';
import { ExternalLink, Github, Zap, Bot, Globe2, Database, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "JARVIS – Personal AI Assistant",
      description: "An intelligent AI assistant powered by GPT models that can handle complex conversations, task automation, and provide personalized recommendations. Features voice commands, natural language processing, and integration with various APIs.",
      tech: ["Python", "OpenAI GPT", "LangChain", "FastAPI", "React"],
      icon: <Bot className="text-blue-400" size={24} />,
      demo: "#",
      github: "https://github.com/Aditya-Vardhan55",
      featured: true
    },
    {
      title: "GenAI Content Automation Platform",
      description: "A comprehensive platform that automates content creation using generative AI. Supports blog posts, social media content, and marketing materials with brand-specific customization.",
      tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Tailwind"],
      icon: <Zap className="text-purple-400" size={24} />,
      demo: "#",
      github: "https://github.com/Aditya-Vardhan55"
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time analytics dashboard with AI-powered insights and predictive modeling. Features interactive visualizations, automated reporting, and intelligent anomaly detection.",
      tech: ["React", "D3.js", "Python", "TensorFlow", "MongoDB"],
      icon: <Database className="text-green-400" size={24} />,
      demo: "#",
      github: "https://github.com/Aditya-Vardhan55"
    },
    {
      title: "AI-Powered E-commerce Recommender",
      description: "Machine learning recommendation system that analyzes user behavior and preferences to provide personalized product suggestions, increasing conversion rates by 40%.",
      tech: ["Python", "Scikit-learn", "Redis", "Docker", "AWS"],
      icon: <Cpu className="text-orange-400" size={24} />,
      demo: "#",
      github: "https://github.com/Aditya-Vardhan55"
    },
    {
      title: "Multi-Language SaaS Platform",
      description: "Full-stack SaaS application with AI translation services, user management, subscription billing, and real-time collaboration features for global teams.",
      tech: ["MERN Stack", "Stripe", "Socket.io", "Google Translate API"],
      icon: <Globe2 className="text-pink-400" size={24} />,
      demo: "#",
      github: "https://github.com/Aditya-Vardhan55"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the frontiers of AI and web development through innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group themed-card border rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-[1.02] ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {project.icon}
                    <h3 className="text-2xl font-bold ml-3 themed-text-primary group-hover:themed-text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="ml-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="themed-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors duration-300 border border-blue-500/30"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700/70 transition-colors duration-300 border border-gray-600/30"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Aditya-Vardhan55"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;