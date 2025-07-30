import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1hwDS6chvrJCJX7ChcF8nn7AirxEC6dgH/view?usp=drive_link', '_blank');
  };
  
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 transition-colors duration-500 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-blue-300 rounded-full -top-40 -right-40 w-80 h-80 dark:bg-blue-600 mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-float" />
        <div className="absolute bg-purple-300 rounded-full -bottom-40 -left-40 w-80 h-80 dark:bg-purple-600 mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bg-pink-300 rounded-full top-40 left-40 w-80 h-80 dark:bg-pink-600 mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-16 justify-items-center lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="order-2 text-center lg:text-left lg:order-1">
            <div className="animate-fade-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
                <span className="block mt-2 text-3xl animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                  Hi, I'm
                </span>
                <span className="block mt-3 text-6xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                  Vijay Singh Rathore
                </span>
              </h1>

              <h2 className="mb-6 text-xl font-medium text-gray-600 md:text-2xl lg:text-3xl dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                Full-Stack Developer
              </h2>

              <p className="mb-10 text-lg leading-relaxed text-gray-600 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                Passionate about creating exceptional digital experiences through clean code, 
                innovative design, and cutting-edge technologies. Let's build something amazing together.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row lg:justify-start animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
                <button onClick={downloadResume} className="flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105 animate-glow">
                  <Download size={20} />
                  <span>Download Resume</span>
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center px-8 py-4 space-x-2 font-semibold text-gray-700 transition-all duration-300 transform border-2 border-gray-300 rounded-full group dark:border-gray-600 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:shadow-lg hover:scale-105"
                >
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center mb-8 space-x-6 lg:justify-start animate-fade-in-up" style={{ animationDelay: '1.4s', animationFillMode: 'both' }}>
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:john@example.com', label: 'Email' }
                ].map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 text-gray-600 transition-all duration-300 transform bg-white rounded-full shadow-lg dark:bg-gray-800 hover:shadow-xl dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 animate-bounce-in"
                    style={{ animationDelay: `${1.6 + index * 0.1}s`, animationFillMode: 'both' }}
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="order-1 text-center lg:order-2">
            <div className="relative inline-block animate-fade-in-right" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              {/* Main Profile Image */}
              <div className="relative mx-auto w-80 h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse-slow"></div>
                <div className="absolute overflow-hidden transition-transform duration-500 transform bg-white rounded-full shadow-2xl inset-2 dark:bg-gray-800 hover:scale-105">
                  <img
                    src="/images/vsr_img.jpg"
                    alt="vsr"
                    className="object-cover w-full h-full transform scale-150 -translate-x-4 translate-y-12"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute flex items-center justify-center w-16 h-16 font-bold text-white bg-blue-500 rounded-full shadow-lg -top-4 -right-4 animate-bounce-in" style={{ animationDelay: '1.8s', animationFillMode: 'both' }}>
                  💻
                </div>
                <div className="absolute flex items-center justify-center w-16 h-16 font-bold text-white bg-purple-500 rounded-full shadow-lg -bottom-4 -left-4 animate-bounce-in" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
                  🚀
                </div>
                <div className="absolute flex items-center justify-center w-12 h-12 font-bold text-white bg-green-500 rounded-full shadow-lg top-1/2 -left-8 animate-bounce-in" style={{ animationDelay: '2.2s', animationFillMode: 'both' }}>
                  ⚡
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
