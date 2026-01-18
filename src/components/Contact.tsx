import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects, opportunities,
              or just having a chat about technology and development.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:raja@example.com"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
              >
                <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <Mail size={20} className="text-gray-600 group-hover:text-blue-600" />
                </div>
                <span className="font-medium">raja@example.com</span>
              </a>

              <a
                href="https://github.com/rajaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
              >
                <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <Github size={20} className="text-gray-600 group-hover:text-blue-600" />
                </div>
                <span className="font-medium">github.com/rajaprasad</span>
              </a>

              <a
                href="https://linkedin.com/in/rajaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
              >
                <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <Linkedin size={20} className="text-gray-600 group-hover:text-blue-600" />
                </div>
                <span className="font-medium">linkedin.com/in/rajaprasad</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
