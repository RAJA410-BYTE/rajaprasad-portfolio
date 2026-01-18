import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Raja Prasad
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              Full Stack Web Developer & Problem Solver
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm a passionate full stack developer who loves building modern web applications
              that solve real-world problems. With expertise in both frontend and backend
              technologies, I create seamless digital experiences from concept to deployment.
              I'm also dedicated to sharing knowledge through workshops and mentoring fellow developers.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/rajaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rajaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Raja Prasad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-900 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
