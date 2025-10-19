export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  video?: string;
  liveUrl?: string;
  codeUrl?: string;
  layout?: 'default' | 'same-row' | 'custom';
}

export const projectsData: Record<string, Project> = {
  scoundrel: {
    id: 'scoundrel',
    title: 'Scoundrel Game',
    description: 'A solo dungeon card game built as a Progressive Web App (PWA). Scoundrel combines strategic card gameplay with modern web technologies, featuring responsive design, offline capabilities, and immersive dungeon-crawling mechanics. Players navigate through challenging encounters using a deck of cards representing weapons, monsters, and potions.',
    tags: ['JavaScript', 'PWA', 'CSS3', 'HTML5', 'Service Worker'],
    images: [
      '/projects/scoundrel-1.png',
      '/projects/scoundrel-2.png'
    ],
    video: '/projects/scoundrel.mp4',
        liveUrl: 'https://ztm-scoundrel-game.vercel.app/',
    codeUrl: 'https://github.com/JacintoDesign/scoundrel-game-pwa',
    layout: 'same-row'
  },
  'ztm-music': {
    id: 'ztm-music',
    title: 'ZTM Music Player',
    description: 'A modern music player application built with TypeScript and React. Features include audio visualization, playlist management, and a sleek user interface. The app demonstrates advanced frontend development techniques with real-time audio processing and responsive design patterns.',
    tags: ['TypeScript', 'React', 'CSS3', 'Web Audio API', 'PWA'],
    images: [
      '/projects/ztm-music-2.png',
      '/projects/ztm-music-3.png',
      '/projects/ztm-music-4.png'
    ],
    video: '/projects/ztm-music.mp4',
        liveUrl: 'https://ztm-music-player.vercel.app/',
    codeUrl: 'https://github.com/JacintoDesign/ztm-music-player',
    layout: 'same-row'
  },
  recipe: {
    id: 'recipe',
    title: 'Recipes App',
    description: 'A Progressive Web App (PWA) for recipe management and discovery. Built with TypeScript, this application allows users to browse, search, and organize recipes with an intuitive interface. Features include responsive design, offline capabilities, and a clean, modern user experience for culinary enthusiasts.',
    tags: ['TypeScript', 'PWA', 'CSS3', 'HTML5', 'Service Worker'],
    images: [
      '/projects/recipe-2.png',
      '/projects/recipe-3.png',
      '/projects/reciple-4.png'
    ],
    video: '/projects/recipe.mp4',
        liveUrl: 'https://ztm-recipe-app.vercel.app/',
    codeUrl: 'https://github.com/JacintoDesign/recipe-app',
    layout: 'custom'
  }
};
