import {
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
  snapytrend_ss,
  flowrat_ss,
  threejs,
  defaultCompanyLogo,
  geeksforgeeks,
  spotify_clone_ss,
  ubuntu_portfolio_ss
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "schedule",
  //   title: "Schedule a call",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Design",
    icon: web,
    description: "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website."
  },
  {
    title: "Development",
    icon: backend,
    description: "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS."
  },
  {
    title: "The full package",
    icon: creator,
    description: "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects."
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
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
];

const experiences = [
  {
    title: "Campus Mantri",
    company_name: "GeeksForGeeks",
    icon: geeksforgeeks,
    iconBg: "#383E56",
    date: "April 2024 - April 2025 · 12 mon",
    points: [
      "Planned and organized workshops, coding competitions, and seminars in my campus.",
      "Promoted GeeksforGeeks resources, courses, and events through social media and campus channels.",
      "Acted as the primary point of contact between GeeksforGeeks and the campus community.",
      "Fostered a community of learners by encouraging collaboration and knowledge sharing among students.",
    ],
  },
  {
    title: "Senior Web Developer (Part-Time)",
    company_name: "DeuxSTEM",
    icon: defaultCompanyLogo,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2022 · 3 mon",
    points: [
      "I took charge of managing the official web page for DeuxSTEM, overseeing its smooth operation and efficiently resolving any encountered errors.",
      "I successfully handled all aspects of the website, ensuring its smooth operation and swiftly resolving any errors that came our way.",
      "I thrive in collaborating with cross-functional teams, including designers, product managers, and fellow developers, to collectively craft exceptional products of the highest quality.",
      "With meticulous attention to detail and a proactive approach, I ensured that visitors had a seamless experience while navigating through the site.",
    ],
  },
  {
    title: "Full stack Developer (Full-time)",
    company_name: "Snapytrend",
    icon: defaultCompanyLogo,
    iconBg: "black",
    date: "March 2023 - Present",
    points: [
      "Coding a ecommerce website will almost all functionalities like admin panel, payment gateway, live chat, etc.",
      "Developing and maintaining web applications using React.js and other related technologies like node.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kislay exceeded our expectations with his exceptional coding skills and dedication to delivering top-notch results.",
    name: "Priyanka",
    designation: " ",
    company: " ",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kislay does.",
    name: "Ayush Singh",
    designation: " ",
    company: " ",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "After Kislay optimized our website, our traffic increased by 50%. I can't thank him enough!",
    name: "Lisa Wang",
    designation: " ",
    company: " ",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
];

const projects = [
  {
    name: "Ubuntu Theme Portfolio",
    description:
      "A responsive portfolio website with ubuntu theme crafted with the power of Next.js to provide a seamless and engaging user experience. This project is a demonstration of my skills in web development, design, and theming, incorporating the sleek and modern aesthetic of the Ubuntu operating system.",
    tags: [
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
    ],
    image: ubuntu_portfolio_ss,
    source_code_link: "https://kislay-portfolio.vercel.app/",
  },
  {
    name: "Spotify Web Player Clone",
    description:
      "A responsive spotify web player clone website developed using React.js to showcase design of the popular music streaming platform, Spotify. This clone shows my ability to build complex, interactive web applications with a focus on user experience and modern web technologies.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: spotify_clone_ss,
    source_code_link: "https://spotify-kislay.vercel.app/",
  },
  // {
  //   name: "Blog Website",
  //   description:
  //     "A responsive blog website built with express.js and ejs. It offers a user-friendly interface, intuitive navigation, and seamless integration with Node.js and MongoDB for a robust backend. Explore captivating articles, engage in discussions, and share your favorite content effortlessly.",
  //   tags: [
  //     {
  //       name: "ejs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "express.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "mongoDb",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: snapytrend_ss,
  //   source_code_link: "https://flowrat.com/",
  // },
  // {
  //   name: "ecommerce website",
  //   description:
  //     "'Snapytrend' - a visually stunning online store built using MERN stack, featuring a sleek and modern design that captivates customers. With seamless integration of payment gateways, admin panel which includes - inventory management, and order tracking, creating coupon code, etc.",
  //   tags: [
  //     {
  //       name: "tailwind.css",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "react.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "node.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongoDb",
  //       color: "red-text-gradient",
  //     },
  //   ],
  //   image: flowrat_ss,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
