import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slideInLeft">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 stagger-1 animate-fadeInUp">
              Raja Prasad
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6 stagger-2 animate-fadeInUp">
              Full Stack Web Developer & Problem Solver
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 stagger-3 animate-fadeInUp">
              I'm a passionate full stack developer who loves building modern web applications
              that solve real-world problems. With expertise in both frontend and backend
              technologies, I create seamless digital experiences from concept to deployment.
              I'm also dedicated to sharing knowledge through workshops and mentoring fellow developers.
            </p>
            <div className="flex gap-4 stagger-4 animate-fadeInUp">
              <a
                href="https://github.com/rajaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="button-hover flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rajaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="button-hover flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-slideInRight">
            <div className="relative hero-image">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Raja Prasad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-2xl -z-10 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-900 dark:bg-gray-700 rounded-2xl -z-10 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
