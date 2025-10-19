"use client";

import { InView } from '@/components/core/in-view';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

interface ProjectPageProps {
  project: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    images: string[];
    video?: string;
    liveUrl?: string;
    codeUrl?: string;
  };
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#030303] px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
            <InView
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              once={true}
            >
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </InView>

        {/* Project Header */}
            <InView
              variants={{
                hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              once={true}
            >
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                {project.title}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light tracking-wide mb-8 max-w-3xl">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  View Live
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
                >
                  View Code
                </a>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
              {/* Show remaining tags on desktop */}
              <div className="hidden md:flex flex-wrap gap-2">
                {project.tags.slice(4).map((tag, index) => (
                  <span
                    key={index + 4}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </InView>

        {/* Video and Images Gallery */}
            <InView
              variants={{
                hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              once={true}
            >
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
            
            {/* First item - Full width */}
            <div className="mb-8">
              {project.video ? (
                <div className="relative overflow-hidden shadow-2xl rounded-lg aspect-video">
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative overflow-hidden shadow-2xl rounded-lg">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} main screenshot`}
                    className="w-full h-auto max-h-96 object-contain bg-transparent rounded-lg"
                  />
                </div>
              )}
            </div>

                {/* Remaining items - Project-specific layout */}
                {project.images.length > (project.video ? 0 : 1) && (
                  <>
                    {project.layout === 'custom' && project.id === 'recipe' ? (
                      // Recipe custom layout: video at top, then 3 images in one row
                      <>
                        {/* Video is already displayed above in the main video section */}
                        
                        {/* 3 images in one row */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                          {project.images.map((image, index) => {
                            // First image (16:9) larger, others smaller
                            const colSpan = index === 0 ? 'col-span-1 md:col-span-6' : 'col-span-1 md:col-span-3';
                            const aspectClass = index === 0 ? 'h-64 object-cover' : 'h-64 object-contain';
                            
                            return (
                              <div key={index} className={`${colSpan} relative overflow-hidden shadow-2xl rounded-lg`}>
                                <img
                                  src={image}
                                  alt={`${project.title} screenshot ${index + 1}`}
                                  className={`w-full h-auto bg-transparent rounded-lg ${aspectClass}`}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      // Other layouts
                      <div className={project.layout === 'same-row' ? (project.id === 'scoundrel' ? 'grid grid-cols-1 md:grid-cols-12 gap-4' : 'grid grid-cols-1 md:grid-cols-3 gap-4') : 'grid grid-cols-1 md:grid-cols-12 gap-4'}>
                        {(project.video ? project.images : project.images.slice(1)).map((image, index) => {
                          let colSpan = '';
                          let aspectClass = '';
                          
                          if (project.layout === 'same-row') {
                            if (project.id === 'scoundrel') {
                              // Scoundrel specific: 16:9 image larger, vertical image smaller
                              if (index === 0) {
                                colSpan = 'col-span-1 md:col-span-8';
                                aspectClass = 'h-96 object-cover';
                              } else {
                                colSpan = 'col-span-1 md:col-span-4';
                                aspectClass = 'h-96 object-contain';
                              }
                            } else {
                              // Other same-row projects: equal width
                              colSpan = 'col-span-1 md:col-span-1';
                              aspectClass = 'h-64 object-cover';
                            }
                          } else {
                            // Default layout: first image full width, others take 1/3 width
                            const isWideImage = index === 0;
                            colSpan = isWideImage ? 'col-span-1 md:col-span-12' : 'col-span-1 md:col-span-4';
                            aspectClass = isWideImage ? 'aspect-video' : 'aspect-[9/16]';
                          }
                          
                          return (
                            <div key={index} className={`${colSpan} relative overflow-hidden shadow-2xl rounded-lg`}>
                              <img
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className={`w-full h-auto object-contain bg-transparent rounded-lg ${aspectClass}`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
          </div>
        </InView>
      </div>
      </div>
      <Footer />
    </>
  );
}
