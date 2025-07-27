import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
}

const Experience: React.FC = () => {
  const experienceData: ExperienceItem[] = [
    // {
    //   title: "Senior Full-Stack Developer",
    //   company: "TechCorp Solutions",
    //   location: "San Francisco, CA",
    //   period: "2022 - Present",
    //   description: "Lead development of scalable web applications serving 100K+ users. Architect and implement cloud-native solutions using modern technologies.",
    //   achievements: [
    //     "Increased application performance by 40% through code optimization",
    //     "Led a team of 5 developers on critical product features",
    //     "Implemented CI/CD pipeline reducing deployment time by 60%",
    //     "Mentored junior developers and conducted technical interviews"
    //   ],
    //   technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
    //   type: "full-time"
    // },
    // {
    //   title: "Full-Stack Developer",
    //   company: "StartupXYZ",
    //   location: "Remote",
    //   period: "2021 - 2022",
    //   description: "Developed MVP for fintech startup from concept to production. Built responsive web applications and RESTful APIs.",
    //   achievements: [
    //     "Built entire frontend application from scratch using React",
    //     "Designed and implemented secure payment processing system",
    //     "Integrated third-party APIs and services",
    //     "Achieved 99.9% uptime for production applications"
    //   ],
    //   technologies: ["React", "Express.js", "MongoDB", "Stripe API", "JWT", "Redux"],
    //   type: "full-time"
    // },
    {
      title: "Software Engineering Intern",
      company: "Mediology",
      location: "Gurgaon, Haryana",
      period: "August 2024 - August 2025",
      description: "Contributed to Google Workspace tools, focusing on user interface improvements and accessibility features.",
      achievements: [
        "Worked on AI APIs and an AI Chatbox feature for newspaper website to enhance user interaction.",
        "Integrated Google One Tap Login across multiple newspaper websites, improving user authentication efficiency",
        "Acquired knowledge of Nginx, including project setup, understanding configurations, and managing file paths."
      ],
      technologies: ["AWS S3", "AWS SNS", "AWS Textract", "Google Cloud","JavaScript", "CSS3", "HTML5", "React.js", "Node.js", "Express.js", "MongoDB", "SQL" ,"AI APIs"],
      type: "internship"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400';
      case 'part-time': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400';
      case 'contract': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400';
      case 'internship': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <section id="experience" className="py-20 transition-colors duration-500 bg-white dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Experience
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Professional journey building impactful solutions and leading technical innovation
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-12">
              {experienceData.map((experience, index) => (
                <div
                  key={index}
                  className={`relative flex items-center transition-all duration-500 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute w-4 h-4 transition-transform duration-300 transform border-4 border-white rounded-full shadow-lg left-4 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 dark:border-gray-900 hover:scale-125"></div>

                  {/* Content Card */}
                  <div className={`group ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 dark:border-gray-700 p-8 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 transition-all duration-300 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 group-hover:scale-110 group-hover:rotate-3">
                          <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize transition-transform duration-300 group-hover:scale-105 ${getTypeColor(experience.type)}`}>
                          {experience.type.replace('-', ' ')}
                        </span>
                      </div>

                      <h3 className="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {experience.title}
                      </h3>

                      <div className="flex flex-col mb-4 space-y-2">
                        <div className="flex items-center text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                          <ExternalLink size={16} className="mr-2" />
                          <span className="font-medium">{experience.company}</span>
                          <span className="mx-2">•</span>
                          <MapPin size={16} className="mr-1" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                          <Calendar size={16} className="mr-2" />
                          <span>{experience.period}</span>
                        </div>
                      </div>

                      <p className="mb-6 leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                        {experience.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="mb-3 font-semibold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                              <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 transition-transform duration-300 bg-blue-500 rounded-full group-hover:scale-125"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-sm font-medium text-gray-700 transition-all duration-300 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;