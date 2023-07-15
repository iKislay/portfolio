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
  meta,
  starbucks,
  tesla,
  carrent,
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
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
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
    title: "Senior Web Developer (Part-Time)",
    company_name: "DeuxSTEM",
    icon: starbucks,
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
    title: "Web Developer (Intern)",
    company_name: "Info aidTech",
    icon: tesla,
    iconBg: "black",
    date: "May 2023 - Jul 2023 · 3 mon",
    points: [
      "Completed task like coding product landing page, calculator, temprature converter.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer (Full-time)",
    company_name: "Snapytrend",
    icon: meta,
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
      "After Kislay optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: " ",
    company: " ",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
];

const projects = [
  {
    name: "Blog Website",
    description:
      "A responsive blog website built with express.js and ejs. It offers a user-friendly interface, intuitive navigation, and seamless integration with Node.js and MongoDB for a robust backend. Explore captivating articles, engage in discussions, and share your favorite content effortlessly.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://flowrat.com/",
  },
  // {
  //   name: "ecommerce website",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://snapytrend.com/",
  // },
  {
    name: "ecommerce website",
    description:
      "'Snapytrend' - a visually stunning online store built using MERN stack, featuring a sleek and modern design that captivates customers. With seamless integration of payment gateways, admin panel which includes - inventory management, and order tracking, creating coupon code, etc.",
    tags: [
      {
        name: "tailwind.css",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDb",
        color: "red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
