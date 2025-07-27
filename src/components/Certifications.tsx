import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  status: 'active' | 'expired';
  validUntil?: string;
}

const Certifications: React.FC = () => {
  const certificationsData: Certification[] = [
    {
      name: "Job Ready Bootcamp in C,C++ and DSA",
      issuer: "iNeuron",
      date: "2023",
      description: "Gained hands-on experience in problem-solving, algorithmic thinking, and core programming concepts essential for technical interviews and software development.",
      credentialId: "",
      verificationUrl: "",
      skills: ["C", "C++", "DSA"],
      status: "active",
      validUntil: ""
    },
    {
      name: "Data Structures and Algorithms",
      issuer: "MySirG.com",
      date: "2023",
      description: "Gained hands-on experience in problem-solving, algorithmic thinking, and core programming concepts essential for technical interviews and software development.",
      credentialId: "",
      verificationUrl: "",
      skills: ["Data Structures", "Algorithms", "Problem Solving"],
      status: "active",
      validUntil: ""
    },
    {
      name: "C language",
      issuer: "MySirG.com",
      date: "2024",
      description: "Gained hands-on experience in problem-solving, algorithmic thinking, and core programming concepts essential for technical interviews and software development.",
      credentialId: "",
      verificationUrl: "",
      skills: ["C language", "Programming", "Problem Solving"],
      status: "active",
      validUntil: ""
    },
    
  ];

  return (
    <section id="certifications" className="py-20 transition-colors duration-500 bg-white dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Certifications
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Professional certifications validating expertise across cloud platforms, frameworks, and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 dark:border-gray-700 p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 transition-all duration-300 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 group-hover:scale-110 group-hover:rotate-3">
                    <Award size={24} className="text-yellow-600 dark:text-yellow-400" />
                  </div>
                  {cert.status === 'active' && (
                    <div className="flex items-center px-2 py-1 space-x-1 text-green-800 transition-transform duration-300 bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-400 group-hover:scale-105">
                      <CheckCircle size={14} />
                      <span className="text-xs font-semibold">Active</span>
                    </div>
                  )}
                </div>

                <h3 className="mb-2 text-xl font-bold leading-tight text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
                  {cert.name}
                </h3>

                <div className="flex items-center mb-3 text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  <span className="font-medium">{cert.issuer}</span>
                </div>

                <div className="flex items-center mb-4 text-sm text-gray-500 transition-colors duration-300 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                  <Calendar size={14} className="mr-2" />
                  <span>Issued: {cert.date}</span>
                  {cert.validUntil && (
                    <>
                      <span className="mx-2">•</span>
                      <span>Valid until: {cert.validUntil}</span>
                    </>
                  )}
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs font-medium text-blue-800 transition-transform duration-300 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.credentialId && (
                  <div className="mb-4 text-xs text-gray-500 transition-colors duration-300 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </div>
                )}

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 transition-all duration-300 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105"
                  >
                    <ExternalLink size={14} />
                    <span>Verify Certification</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
            <div className="p-6 text-center transition-transform duration-300 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl hover:scale-105">
              <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                {certificationsData.filter(cert => cert.status === 'active').length}
              </div>
              <div className="font-medium text-gray-600 dark:text-gray-400">Active Certifications</div>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl hover:scale-105">
              <div className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">
                {new Set(certificationsData.flatMap(cert => cert.skills)).size}
              </div>
              <div className="font-medium text-gray-600 dark:text-gray-400">Validated Skills</div>
            </div>
            <div className="p-6 text-center transition-transform duration-300 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl hover:scale-105">
              <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
                {new Set(certificationsData.map(cert => cert.issuer)).size}
              </div>
              <div className="font-medium text-gray-600 dark:text-gray-400">Certification Providers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;