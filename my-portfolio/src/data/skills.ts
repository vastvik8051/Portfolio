import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,

  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiExpo,
  SiRedux,
  SiAxios,
  SiVite,
  SiArduino,
  SiJson,
  SiJsonwebtokens
} from "./icons";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Sass", icon: SiSass, color: "#CC6699" },
      { name: "GSAP", icon: null, color: "#88CE02" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: null, color: "#B8965A" },
      { name: "Axios", icon: SiAxios, color: "#5A29E4" },
      { name: "JSON", icon: SiJson, color: "#fff" },
    { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" }
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "NoSQL", icon: null, color: "#B8965A" },
    ],
  },

  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: FaReact, color: "#61DAFB" },
      { name: "Expo", icon: SiExpo, color: "#FFFFFF" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Axios", icon: SiAxios, color: "#5A29E4" },
    ],
  },

  {
    title: "Programming",
    skills: [
      { name: "C", icon: null, color: "#A8B9CC" },
      { name: "C++", icon: null, color: "#00599C" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Arduino", icon: SiArduino, color: "#00979D" },
    ],
  },
];