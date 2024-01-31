// contains all constants to be used throughout the project
// dont' remove anything from here if not sure

import { gits } from "../assets/images";
import {
  css,
  estate,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nodejs,
  react,
  sass,
  tailwindcss,
  bootstrap,
} from "../assets/icons";

// sidebar links
export const SIDEBAR_LINKS = [
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

// skills
export const SKILLS = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap 5",
    type: "Frontend",
  },
];

// site name
export const SITE_NAME = "Fitra Muhammad Anugrah";

// extra links
export const EXTRA_LINKS = {
  source_code: "https://github.com/Samunee",
};

// experiences
export const EXPERIENCES = [
  {
    title: "Test Engineer Internship",
    company_name: "GITS.ID (PT GITS Indonesia)",
    icon: gits,
    iconBg: "#accbe1",
    date: "January 2024 - Present",
    points: [
      "I Internship at GITS.ID as a Test Engineer for the Nabati and KCI projects.",
    ],
  },

];

// projects
export const PROJECTS = [
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://real-estate-app-react.vercel.app/",
  },
];
