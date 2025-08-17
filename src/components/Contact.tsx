import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-2xl font-semibold mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <a
                    href="mailto:shamedward2@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        Email
                      </div>
                      <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        shamedward2@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+918270395411"
                    className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Phone
                      </div>
                      <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        +91 8270395411
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:border-emerald-400 focus:outline-none transition-all duration-300 text-white hover:border-gray-600"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:border-emerald-400 focus:outline-none transition-all duration-300 text-white hover:border-gray-600"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:border-emerald-400 focus:outline-none transition-all duration-300 text-white hover:border-gray-600"
                  placeholder="Project discussion"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:border-emerald-400 focus:outline-none transition-all duration-300 text-white hover:border-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;