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
  summarize,
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

const projects = [
  {
    name: "Summarize AI",
    description:
      "This website offers a powerful solution for users looking to quickly understand the essence of web content.\n\
       By simply inputting a link, it generates a concise summary of the webpage or post.\n\
        The platform is built with modern technologies like React, TypeScript, Tailwind CSS, Redux, and incorporates API integration from Rapid API, ensuring a seamless and efficient user experience.\n\
        \
      Key Features:\n\
      \
      Content Summarization: Instantly generates summaries for any given web page or post link. Summary History: Maintains a record of all summaries created by the user for easy access. Link Copying: Enables users to copy the original links of summarized posts for sharing. Technologies Used: Built with React, TypeScript, Tailwind CSS, Redux, and features API integration from Rapid API for robust functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react-redux",
        color: "blue-text-gradient",
      },
      {
        name: "apiintegration",
        color: "violet-text-gradient",
      },
      {
        name: "html/css",
        color: "yellow",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: summarize,
    source_code_link: "https://github.com/PeyonManuel/ai-summarizer",
  },
  {
    name: "Moviezz",
    description:
      "Movie directory using The movie database API.\n\
      The goal was to create a directory using the most important functionalities of the API and make my own design using inspirations from other popular movie directories.\n\
      \
      Main features\n\
      List most popular movies, tv shows and people of the moment\n\
      Search with automatic suggestions for movies, series and people\n\
      Site about each film with general information, cast, details, reviews and similar films or the collection of the film\n\
      Site about each series with general information, cast, details, reviews and similar series\n\
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
    name: "Car Searcher",
    description:
      "This project is a highly responsive web application designed for car enthusiasts and potential buyers to effortlessly search and filter cars. Built with React, Next.js, and TypeScript, it offers advanced search capabilities allowing users to precisely find vehicles based on a wide range of criteria. The application handles data efficiently in chunks for optimal performance, even with extensive datasets. Tailwind CSS ensures a sleek, mobile-responsive design, while SEO and metadata are finely tuned for maximum online visibility. A perfect blend of modern technologies and innovative data handling techniques makes this platform stand out for users and search engines alike.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "apiintegration",
        color: "violet-text-gradient",
      },
      {
        name: "html/css",
        color: "yellow",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: summarize,
    source_code_link: "https://github.com/PeyonManuel/ai-summarizer",
  },
  {
    name: "Ukiyo manga site",
    description:
      "Ukiyo is a manga site where you can search and read your favorite mangas with style!\n\
      Applied API integration as well as created my own styles from scratch using SASS, and built components with React.\n\
      The site lists mangas from different API calls with different filters.\n\
      It has a pre made plan system.\n\
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
      "I developed an eCommerce site inspired by Mercado Libre, showcasing my ability to adhere to specific client guidelines and build a comprehensive eCommerce solution from scratch. Key aspects of the project included:\n\
      \
      Backend Development: Created with NodeJs and Express.\n\
      Data Management: Utilized MongoDB and mongoose for database operations.\n\
      Custom Styling: Implemented unique styles using CSS.\n\
      Frontend Construction: Built using JavaScript and React.\n\
      State Management: Managed application state using Redux.\n\
      Transaction Processing: Integrated PayPal's API for transactions.\n\
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
  {
    name: "Jack's Lounge landing page",
    description:
      "Created a bespoke landing page for Jack's Lounge, meeting the client's specific requirements without using third-party styling libraries. This restobar and café's digital presence is defined by:\n\
      \
      Custom Parallax Effect: Captivates with an initial dynamic visual.\n\
      Detailed Venue Description: Immerses users with text and images.\n\
      Animated 'About' Section: Brings the lounge's story to life.\n\
      Smooth Site Navigation: Ensures effortless exploration.\n\
      Attractive Menu Displays: Highlights café and restaurant offerings in a unique style.\n\
      Developed using React, TypeScript, Tailwind CSS, and Redux, the project delivers a personalized and seamless web experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html/css",
        color: "yellow",
      },
      {
        name: "javascript",
        color: "yellow",
      },
    ],
    image: jacks,
    source_code_link:
      "https://github.com/PeyonManuel/Jack-s-longue-landing-page",
  },
];

export { services, technologies, experiences, projects };
