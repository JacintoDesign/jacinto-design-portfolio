"use client";

import { InView } from '@/components/core/in-view';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'scoundrel',
    title: 'Scoundrel Game',
    image: '/projects/scoundrel-1.png',
    description: 'A modern web application showcasing innovative design and functionality.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'recipe',
    title: 'Recipes App',
    image: '/projects/recipe-1.png',
    description: 'A comprehensive recipe management system with search and organization features.',
    tags: ['Vue.js', 'Firebase', 'CSS3', 'JavaScript']
  },
  {
    id: 'ztm-music',
    title: 'ZTM Music Player',
    image: '/projects/ztm-music-1.png',
    description: 'A music streaming platform with advanced features and sleek interface.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen bg-[#030303] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-none">
            <InView
              variants={{
                hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              viewOptions={{ margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              once={true}
            >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 tracking-tight text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
              Featured Projects
            </span>
          </h2>
        </InView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
                <InView
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  }}
                  viewOptions={{ margin: '0px 0px -100px 0px' }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                    delay: index * 0.2
                  }}
                  once={true}
                >
              <Link href={`/projects/${project.id}`} className="group block cursor-pointer">
                <div className="relative overflow-hidden shadow-2xl bg-transparent rounded-lg">
                      <picture>
                        {project.id === 'scoundrel' && (
                          <>
                            <source media="(max-width: 767px)" srcSet="/projects/scoundrel-mobile.png" />
                            <source media="(min-width: 768px)" srcSet="/projects/scoundrel-1.png" />
                          </>
                        )}
                        <img
                          src={project.id === 'scoundrel' ? '/projects/scoundrel-1.png' : project.image}
                          alt={project.title}
                          className={`w-full h-96 object-cover object-center transition-transform duration-500 rounded-lg ${
                            project.id === 'scoundrel' ? 'brightness-175 md:brightness-100 md:scale-125 md:group-hover:scale-135' : 'md:scale-110 md:group-hover:scale-125'
                          }`}
                        />
                      </picture>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {project.title}
                    </h3>
                    <button className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
