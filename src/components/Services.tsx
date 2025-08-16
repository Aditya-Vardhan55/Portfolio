import React from 'react';
import { Zap, Bot, Code, MessageSquare, Rocket, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="text-blue-400" size={32} />,
      title: "GenAI Automation",
      description: "Transform your workflows with intelligent automation powered by generative AI. Custom solutions for content creation, data processing, and business process optimization.",
      features: ["Custom AI Models", "Workflow Automation", "Content Generation", "Data Analysis"]
    },
    {
      icon: <Bot className="text-purple-400" size={32} />,
      title: "Custom AI Tool Development",
      description: "Build bespoke AI applications tailored to your business needs. From chatbots to recommendation systems, I create intelligent solutions that drive results.",
      features: ["Machine Learning Models", "AI Integration", "Performance Optimization", "Scalable Architecture"]
    },
    {
      icon: <Code className="text-green-400" size={32} />,
      title: "Web App Prototyping (MERN)",
      description: "Rapid prototyping and development of modern web applications using MongoDB, Express, React, and Node.js. Full-stack solutions from concept to deployment.",
      features: ["Responsive Design", "Real-time Features", "API Development", "Database Design"]
    },
    {
      icon: <MessageSquare className="text-orange-400" size={32} />,
      title: "Chatbot Integration",
      description: "Integrate intelligent chatbots using GPT models and LangChain. Enhance customer support and user engagement with conversational AI that understands context.",
      features: ["GPT Integration", "LangChain Framework", "Custom Training", "Multi-platform Support"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge AI solutions and modern web technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group themed-card border rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 themed-overlay rounded-lg transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold ml-4 themed-text-primary group-hover:themed-text-accent transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="themed-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Rocket className="text-blue-400 mr-3" size={16} />
                    <span className="themed-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t themed-text-secondary/20">
                <button className="w-full themed-button themed-text-primary py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
            <Zap className="text-yellow-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how AI and modern web technologies can accelerate your growth and innovation. 
              From proof-of-concept to production deployment, I'll guide you through every step.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;