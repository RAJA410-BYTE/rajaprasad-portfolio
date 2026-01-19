import { Code2, Database, Wrench, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'UI/UX'],
    color: 'blue'
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'REST APIs', 'MySQL', 'Database Design', 'Server-side Logic'],
    color: 'green'
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'Version Control'],
    color: 'orange'
  },
  {
    title: 'Concepts',
    icon: BookOpen,
    skills: ['Data Structures', 'Algorithms', 'Testing', 'Problem Solving', 'Debugging'],
    color: 'purple'
  }
];

export default function Skills() {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      orange: 'bg-orange-100 text-orange-700 border-orange-200',
      purple: 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
      purple: 'text-gray-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center animate-fadeInUp">
          Skills & Technologies
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          A comprehensive toolkit for building modern, scalable web applications
          from frontend to backend.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-white shadow-sm ${getIconColor(category.color)}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`skill-badge px-4 py-2 rounded-lg border-2 font-medium ${getColorClasses(category.color)}`}
                      style={{ animationDelay: `${skillIndex * 0.05}s` }}
                    >
                      {skill}
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
