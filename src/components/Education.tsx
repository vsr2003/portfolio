import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  gpa?: string;
  honors?: string[];
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Sagar Institute of Science Technology and Research",
      location: "Bhopal, M.P.",
      period: "2021 - 2025",
      description: "Comprehensive study of software development principles, data structures, algorithms, and system design.",
      gpa: "8.54/10.0",
      honors: ["Magna Cum Laude", "Phi Beta Kappa"]
    },
    {
      degree: "Senior Secondary - 12th",
      institution: "MKN Higher Secondary School",
      location: "Bhopal, M.P.",
      period: "2020 - 2021",
      description: "Specialized in Machine Learning and Artificial Intelligence with focus on deep learning algorithms and neural networks.",
      gpa: "87.4/100",
      honors: ["Dean's List", "Outstanding Graduate Student Award"]
    },
    {
      degree: "High School - 10th",
      institution: "MKN Higher Secondary School",
      location: "Bhopal, M.P.",
      period: "2018 - 2019",
      description: "Specialized in Machine Learning and Artificial Intelligence with focus on deep learning algorithms and neural networks.",
      gpa: "86.2/100",
      honors: ["Dean's List", "Outstanding Graduate Student Award"]
    },
    
  ];

  return (
    <section id="education" className="py-20 transition-colors duration-500 bg-gray-50 dark:bg-gray-800/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Education
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Academic foundation that shaped my technical expertise and problem-solving approach
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((education, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100 dark:border-gray-700"
              >
                <div className="p-8 transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 transition-all duration-300 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 group-hover:scale-110 group-hover:rotate-3">
                      <GraduationCap size={24} className="text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
                        <h3 className="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white md:mb-0 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {education.degree}
                        </h3>
                        {education.gpa && (
                          <span className="inline-block px-3 py-1 text-sm font-semibold text-green-800 transition-transform duration-300 bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-400 group-hover:scale-105">
                            GPA: {education.gpa}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-col mb-4 space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-6">
                        <div className="flex items-center text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                          <MapPin size={16} className="mr-2" />
                          <span className="font-medium">{education.institution}</span>
                          <span className="mx-2">•</span>
                          <span>{education.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                          <Calendar size={16} className="mr-2" />
                          <span>{education.period}</span>
                        </div>
                      </div>
                      
                      <p className="mb-4 leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                        {education.description}
                      </p>
                      
                      {education.honors && education.honors.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {education.honors.map((honor, honorIndex) => (
                            <span
                              key={honorIndex}
                              className="px-3 py-1 text-sm font-medium text-purple-800 transition-transform duration-300 bg-purple-100 rounded-full dark:bg-purple-900/30 dark:text-purple-400 hover:scale-105"
                            >
                              {honor}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
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

export default Education;