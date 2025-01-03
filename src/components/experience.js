import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Tech Star Automation.",
      companyUrl: "https://www.techstarautomation.in/",
      role: "React Developer",
      duration: "Oct 2024 - Dec 2024",
      location: "Pune, MH",
      workType: "Remote",
      description: "Led the development of a responsive, SEO-friendly website using React.js, Tailwind CSS, and RESTful APIs. Optimized performance with reusable components and collaborated remotely using Redux, Git, and agile tools.",
      achievements: [
        "Built, deployed a responsive, SEO-friendly company website using React.js, Tailwind CSS, and RESTful APIs",
        "Managed a web development project, creating reusable components and ensuring optimal performance.",
        "Worked remotely, leveraging Redux, Git, and agile tools for seamless collaboration and debugging."
      ]
    },
    {
      company: "Sagar Defence Engineering",
      companyUrl: "https://www.sagardefence.com/",
      role: "Software Developer",
      duration: "Dec 2023 - Feb 2024",
      location: "Pune, MH",
      workType: "onsite",
      description: "Developed responsive web interfaces with HTML, CSS, and JavaScript, ensuring cross-browser compatibility. Gained expertise in C#, XAML, and WPF by building a user-friendly GUI.",
      achievements: [
        "Designed and developed responsive web interfaces using HTML, CSS, and JavaScript.",
        "Collaborated on front-end development, ensuring cross-browser compatibility and optimized performance.",
        "Gained expertise in C#, XAML, and WPF while developing a user-friendly GUI during this internship."
      ]
    }
  ];

  const getWorkTypeColor = (workType) => {
    switch (workType.toLowerCase()) {
      case 'remote':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'onsite':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'hybrid':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <section id="experiences" className="min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in">
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-zinc-900 rounded-lg p-6 md:p-8 hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 
                        transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10
                        animate-slide-up"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 md:mb-0 group">
                  <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500">
                    {exp.role}
                  </span>
                </h3>
                <div className="flex items-center space-x-4 text-zinc-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <span 
                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${getWorkTypeColor(exp.workType)}`}
                  >
                    {exp.workType}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-6 text-zinc-400">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  <a 
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:translate-x-1"
                  >
                    {exp.company}
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <p className="text-zinc-300 mb-6">
                {exp.description}
              </p>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li 
                    key={i}
                    className="text-zinc-400 flex items-start opacity-0 animate-fade-in"
                    style={{
                      animationDelay: `${(index * 200) + (i * 100) + 400}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <span className="text-blue-500 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;