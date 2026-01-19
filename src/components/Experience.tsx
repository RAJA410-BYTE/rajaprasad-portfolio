import { Award, Users, Presentation, Code } from 'lucide-react';

const experiences = [
  {
    icon: Code,
    title: 'Full Stack Development Training',
    organization: 'Professional Development',
    description: 'Completed comprehensive training in modern web development, covering frontend frameworks, backend technologies, database management, and deployment strategies.',
    highlights: ['React & Node.js', 'RESTful APIs', 'Database Design', 'Git Workflow']
  },
  {
    icon: Presentation,
    title: 'Workshop Facilitator',
    organization: 'Developer Community',
    description: 'Conducted hands-on workshops teaching web development fundamentals, JavaScript concepts, and modern development practices to aspiring developers.',
    highlights: ['Web Fundamentals', 'JavaScript Basics', 'Practical Projects', 'Code Reviews']
  },
  {
    icon: Users,
    title: 'Hackathon Team Lead',
    organization: 'Coding Competitions',
    description: 'Led development teams in multiple hackathons, coordinating project planning, code architecture, and team collaboration to deliver working prototypes under tight deadlines.',
    highlights: ['Team Leadership', 'Rapid Prototyping', 'Project Management', 'Technical Strategy']
  },
  {
    icon: Award,
    title: 'Peer Mentorship',
    organization: 'Developer Community',
    description: 'Provided guidance and mentorship to junior developers, helping them debug issues, understand core concepts, and develop best practices in software development.',
    highlights: ['Code Mentoring', 'Problem Solving', 'Best Practices', 'Career Guidance']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center animate-fadeInUp">
          Experience & Leadership
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Hands-on development experience combined with a passion for teaching
          and leading collaborative projects.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="experience-item bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600 flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {exp.organization}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
