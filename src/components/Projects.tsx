import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SolarFixr',
    description: 'A comprehensive solar service and solutions platform that connects customers with solar installation and maintenance services. Features real-time booking, service tracking, and customer management.',
    technologies: ['React', 'Node.js', 'REST APIs', 'Responsive Design'],
    liveLink: 'https://solarfixr-lyart.vercel.app',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Web Fighting Game',
    description: 'A classic arcade-style fighting game built entirely with vanilla JavaScript. Features character selection, combo moves, health bars, and smooth animations without any frameworks.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    gradient: 'from-red-500 to-pink-600'
  },
  {
    title: 'Cloud Point',
    description: 'A real-time weather application that provides accurate weather forecasts and conditions. Integrates with external weather APIs to deliver location-based weather data with an intuitive interface.',
    technologies: ['JavaScript', 'Weather API', 'Geolocation', 'Async/Await'],
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'DD Feed',
    description: 'A responsive social feed-style application demonstrating advanced DOM manipulation and modern layout techniques. Features infinite scroll, dynamic content loading, and interactive UI elements.',
    technologies: ['JavaScript', 'DOM Manipulation', 'CSS Grid', 'Flexbox'],
    gradient: 'from-purple-500 to-indigo-600'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center animate-fadeInUp">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          A selection of projects showcasing my skills in full stack development,
          problem-solving, and creating user-friendly applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-xl shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
