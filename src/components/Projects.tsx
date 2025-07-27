import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  status: 'completed' | 'in-progress' | 'planning' | null;
  category: string;
}

const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      title: "E-Waste Management Platform",
      description: "Full-stack e-waste management solution with admin dashboard",
      longDescription: "Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS for styling, this project features JWT-based authentication and integration with the TomTom Maps API. State management is handled using Redux Toolkit, and navigation is implemented with React Router. Additionally, an Admin Dashboard and a CMS were developed to efficiently manage products.",
      image: "../../public/images/project1.png",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Maps API", "Redux", "Tailwind CSS"],
      liveUrl: "https://ecogeek.netlify.app/",
      githubUrl: "https://github.com/vsr2003/EWASTE",
      date: "2024",
      status: null,
      category: "Web Application"
    },
    
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400';
      case 'in-progress': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400';
      case 'planning': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400';
      case null: return '';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <section id="projects" className="py-20 transition-colors duration-500 bg-gray-50 dark:bg-gray-800/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Projects
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Featured projects showcasing my technical skills and creative problem-solving abilities
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize transition-transform duration-300 group-hover:scale-105 ${getStatusColor(project.status)}`}>
                      {project.status?.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                <div className="p-8 transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      <Tag size={16} className="text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.category}</span>
                    </div>
                    <div className="flex items-center text-gray-500 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>

                  <p className="mb-4 leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    {project.description}
                  </p>

                  <p className="mb-6 text-sm leading-relaxed text-gray-500 transition-colors duration-300 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium text-gray-700 transition-all duration-300 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 space-x-2 font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 space-x-2 font-medium text-gray-700 transition-all duration-300 border border-gray-300 rounded-lg dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-105 hover:shadow-lg"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;