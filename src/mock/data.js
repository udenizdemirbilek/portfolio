import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Deniz Demirbilek', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Deniz Demirbilek',
  subtitle: "I'm the Front-End Developer you're looking for!",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'armsopen.jpg',
  paragraphOne:
    'Electrical Engineer turned Front-End Web Developer. Passionate about having a positive impact on the community through my work.',
  paragraphTwo:
    'Well-versed in front-end framework React, as well as basic Python and Machine Learning to increase customer value, with a strong skill set in communication and a background in technical sales.',
  paragraphThree: 'Risen up to a career change challenge at 32 and didn’t look back.',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vTrLqx-HBSN5qNThzMZCVA4VfH64RHifiYHV2CCjHkXkhBVfZz-UASXRsFuHWVnE9hif3uXXfCrzR89/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'giftify.png',
    title: 'Giftify',
    info: 'Capstone project for Front-End Dev Bootcamp. Created a platform as a team to let users donate unnecessary items to people in need with a team',
    info2:
      'Environment: React, Firebase, Redux, CSS. Created data structure for the app inside Firebase, enabled auth with Google and Facebook as well as creating content. Got extensive experience working with Git and SOLID code through code reviews.',
    url: 'https://giftify-recoded.netlify.app/',
    repo: 'https://github.com/ReCoded-Org/capstone-turkey-giftify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'board.jpg',
    title: 'Order Tracking App',
    info: 'Created a restaurant order tracking application with a partner',
    info2: 'Environment: React.js, Firebase, Bootstrap, CSS',
    url: 'https://kanbanboard-recoded.netlify.app/',
    repo: 'https://github.com/udenizdemirbilek/kanbanBoard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'movieP.jpg',
    title: 'Movie Database Search',
    info: 'Created a movie database catalog with a partner using The Movie Database API',
    info2: 'Environment: JavaScript and CSS, minimal HTML',
    url: 'https://movieproject-recoded.netlify.app/',
    repo: 'https://github.com/udenizdemirbilek/movie-website', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'info@denizdemirbilek.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ufuk-deniz-demirbilek-226636135/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/udenizdemirbilek',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
