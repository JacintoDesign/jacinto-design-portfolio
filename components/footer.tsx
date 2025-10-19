"use client";

import { Github, Linkedin, Code, BookOpen } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const siteCreatedYear = 2024;

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/JacintoDesign',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jacintowong/',
      icon: Linkedin,
    },
    {
      name: 'CodePen',
      href: 'https://codepen.io/jacintodesign',
      icon: Code,
    },
    {
      name: 'Medium',
      href: 'https://jacintowong.medium.com/',
      icon: BookOpen,
    },
  ];

  return (
    <footer className="bg-[#030303] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/icon-192.png" 
                alt="Jacinto Design" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-white">Jacinto Design</span>
            </div>
            <p className="text-white/60 text-sm">
              © {siteCreatedYear}{currentYear !== siteCreatedYear ? `-${currentYear}` : ''} Jacinto Design. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-200 p-2 hover:bg-white/5 rounded-lg"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            Crafting exceptional digital experiences through innovative design and cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
