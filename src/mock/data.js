import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Grace To | Developer', // e.g: 'Name | Developer'
  lang: 'en, cn, vn', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Grace To',
  subtitle: "I'm motivated to make difference in software development world",
  cta: 'More about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'port.jpg',
    title: 'My Portfolio',
    info: 'Created with Gatsby using starter template including animations and deployed on Netlify',
    info2:
      'In-progress A/B Testing with Netlify to compare different versions using Google Analytics plugin tool',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'famlog.jpg',
    title: 'FAMLOG',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/CS157A-Team39-FAMLOG/famlog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mobile.jpg',
    title: 'SGuard',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/CMPE137-HiFicus/SGuard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tps.sang@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sang-to/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SangT',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
