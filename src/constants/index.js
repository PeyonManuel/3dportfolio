import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mysql,
  sass,
  aws,
  python,
  sofi,
  JacksLounge,
  carrent,
  jobit,
  ukiyo,
  moviez,
  jacks,
  libremercado,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "sass",
    icon: sass,
  },
];

const experiences = [
  {
    title: "Web developer",
    company_name: "Jack's Lounge",
    icon: JacksLounge,
    iconBg: "#383E56",
    date: "June 2021 - July 2021",
    points: [
      "Understanding Client Needs: I actively listened to the client's requirements for their bar/ice cream shop's landing page, ensuring every feature and design element aligned with their vision and business objectives.",
      "Proposing Creative Solutions: Leveraging my expertise in React, I proposed innovative ideas that enhanced user experience and functionality, going beyond basic requirements to deliver a more engaging and interactive landing page.",
      "Strategic Project Planning: I developed a clear project plan, outlining each development phase, from initial design concepts to final implementation, ensuring timely delivery and adherence to the client's specifications.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "SoFi",
    icon: sofi,
    iconBg: "#383E56",
    date: "October 2021 - October 2023",
    points: [
      "Elevated React state management to expert level and collaborated with the integration of MySQL databases, enhancing both front-end performance and back-end support for websites and mobile apps.",
      "Streamlined code quality and software functionality by conducting thorough reviews and debugging, alongside authoring and implementing strategic code enhancements for future releases.",
      "Led collaborative efforts with back-end developers and fellow engineers, architecting robust APIs and refining software interfaces, resulting in more efficient and user-friendly systems.",
      "Actively engaged with clients to ensure project success, tracking milestones, incorporating feedback, and proactively addressing concerns, leading to improved customer satisfaction and system efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Moviezz",
    description:
      "Movie directory using The movie database API.\
      The goal was to create a directory using the most important functionalities of the API and make my own design using inspirations from other popular movie directories.\
      \
      Main features\
      List most popular movies, tv shows and people of the moment\
      Search with automatic suggestions for movies, series and people\
      Site about each film with general information, cast, details, reviews and similar films or the collection of the film\
      Site about each series with general information, cast, details, reviews and similar series\
      Site about each person with biography, details, filmography in order by popularity of the moment and filmography categorized by type, year and details such as number of episodes or role",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow",
      },
      {
        name: "apiintegration",
        color: "blue-text-gradient",
      },
      {
        name: "html/css",
        color: "yellow",
      },
    ],
    image: moviez,
    source_code_link: "https://github.com/PeyonManuel/movie-project",
  },
  {
    name: "Ukiyo manga site",
    description:
      "Ukiyo is a manga site where you can search and read your favorite mangas with style!\
      Applied API integration as well as created my own styles from scratch using SASS, and built components with React.\
      The site lists mangas from different API calls with different filters.\
      It has a pre made plan system.\
      It has the details page where you can see details of a manga in specific.\
      ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow",
      },
    ],
    image: ukiyo,
    source_code_link: "https://github.com/PeyonManuel/Ukiyo-MangaSite",
  },
  {
    name: "Libre mercado",
    description:
      "I developed an eCommerce site inspired by Mercado Libre, showcasing my ability to adhere to specific client guidelines and build a comprehensive eCommerce solution from scratch. Key aspects of the project included:\
      \
      Backend Development: Created with NodeJs and Express.\
      Data Management: Utilized MongoDB and mongoose for database operations.\
      Custom Styling: Implemented unique styles using CSS.\
      Frontend Construction: Built using JavaScript and React.\
      State Management: Managed application state using Redux.\
      Transaction Processing: Integrated PayPal's API for transactions.\
      Key features of the site include user registration and login, token authentication with JSON Web Tokens, email verification, address registration, password and email changes, buying and selling functionalities, a favorites system, notifications, history, a question option for sellers, a purchase rating feature, and sections for various user needs like history, purchases, and personal data, all categorized and searchable with filters.",
    tags: [
      {
        name: "javascript",
        color: "yellow",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: libremercado,
    source_code_link: "https://github.com/PeyonManuel/Libre-mercado",
  },
];

export { services, technologies, experiences, testimonials, projects };
