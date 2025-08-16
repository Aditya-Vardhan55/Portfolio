import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'service_bjr7n1o';
      const templateId = 'template_8e62yph';
      const publicKey = 'rBCr6N4VXJp6_QunD';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'vardhanaditya04.contact@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to turn your ideas into intelligent solutions? Let's build something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:vardhanaditya04.contact@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      vardhanaditya04.contact@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                    <Linkedin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/aditya-vardhan-035303256/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors duration-300"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-green-500/20 rounded-lg mr-4">
                    <Github className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a 
                      href="https://github.com/Aditya-Vardhan55"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-400 transition-colors duration-300"
                    >
                      View my repositories
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-orange-500/20 rounded-lg mr-4">
                    <MapPin className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Available for remote work globally</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-pink-500/20 rounded-lg mr-4">
                    <Calendar className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Availability</p>
                    <p className="text-white">Open for new projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✨ 5+ years of AI/ML expertise</li>
                <li>🚀 Proven track record with startups</li>
                <li>🌍 Global remote collaboration experience</li>
                <li>📈 Focus on scalable, production-ready solutions</li>
                <li>🔄 Agile development and quick iterations</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Send me a message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-300 text-center">
                  🚀 Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300 text-center">
                  ❌ Failed to send message. Please try again or email me directly.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white resize-none"
                  placeholder="Tell me about your project idea..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Let's Work Together
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700/50">
          <p className="text-gray-400">
            © 2025 Aditya Vardhan. Building the future with AI, one project at a time. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;