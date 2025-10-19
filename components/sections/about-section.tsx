"use client";

import { InView } from '@/components/core/in-view';

export function AboutSection() {
  const textLines = [
    "About Me",
    "I'm a Senior Developer at the Canadian Broadcasting Corporation with a passion for technology that started at age 12 when I built my first computer.",
    "With 5 years of teaching experience in Canada and South Korea, I now combine my technical skills and educational background as an instructor for Zero to Mastery Academy.",
    "As a self-taught developer who landed a Senior Developer role after just 4 months of online learning, I understand the challenges of breaking into tech.",
    "I'm dedicated to creating high-quality, affordable courses that help students build real portfolio projects and confidently transition into web development careers.",
    "My goal is to make quality education accessible to everyone, regardless of their background or budget."
  ];

  return (
    <section id="about" className="min-h-screen bg-[#030303] flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            {textLines.map((line, index) => (
                  <InView
                    key={index}
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
                {index === 0 ? (
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                      {line}
                    </span>
                  </h2>
                ) : (
                  <p className={`text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed font-light tracking-wide mb-6 ${
                    index === 1 ? 'font-medium text-white/90' : ''
                  }`}>
                    {line}
                  </p>
                )}
              </InView>
            ))}
          </div>
          
          {/* Video Content */}
          <div className="flex justify-center lg:justify-end">
                <InView
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: 'blur(8px)' },
                    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
                  }}
                  viewOptions={{ margin: '0px 0px -100px 0px' }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.4
                  }}
                  once={true}
                >
              <video
                className="w-full max-w-md rounded-lg shadow-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/jacinto_orbit.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
}
