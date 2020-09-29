import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Grace To | Developer', // e.g: 'Name | Developer'
  lang: 'en, cn, vn', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
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
  img: '',
  paragraphOne:
    "I'm a senior majoring in Software Engineering at San Jose State University. I'll be graduating in June 2021. Looking forwards to joining a professional environment to utilize my kills",
  paragraphTwo: 'Front-end development focused and interested in testing',
  paragraphThree:
    '"If you want to live a happy life, tie it to a goal, not to people or things" - Albert Einstein',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'port.jpg',
    title: 'My Portfolio',
    info:
      'Created with Gatsby using starter template including animations, React, Gatsby, Bootstrap, Sass and deployed on Netlify',
    info2:
      'In-progress A/B Testing with Netlify to compare different versions using Google Analytics plugin tool',
    url: '',
    repo: 'https://github.com/SangT/my-portfolio-site', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'famlog.jpg',
    title: 'FAMLOG',
    info:
      'Used HTML, CSS for web interface, PHP for server-side and MySQL to implement RDBMS and 3-tier architecture',
    info2: 'Synchronized users’ list for tracking household shopping list',
    url: '',
    repo: 'https://github.com/CS157A-Team39-FAMLOG/famlog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mobile.jpg',
    title: 'SGuard',
    info:
      'Applied MVC to implement this iOS app in Swift, utilize UIKit for user interface and framework for app features',
    info2: 'Managed Firebase for user data storage',
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
